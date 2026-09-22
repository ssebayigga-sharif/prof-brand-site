import { NextRequest } from "next/server";
import { PROF_EMAIL, topics } from "@/app/lib/contact/topics";
import { validateContactPayload } from "@/app/lib/contact/validate";
import { createClient } from "@/app/lib/supabase/server";

export const runtime = "nodejs";
const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

function jsonError(message: string, status: number): Response {
  return Response.json({ ok: false, error: message }, { status });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: NextRequest): Promise<Response> {
  // Mandatory authentication: only authenticated users can email Professor Nsereko
  let userEmail: string;
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user || !user.email) {
      return jsonError(
        "Authentication required. Please sign in to your account before sending a message to Professor Nsereko.",
        401
      );
    }
    userEmail = user.email;
  } catch (error) {
    console.error("Auth check failed in contact API:", error);
    return jsonError(
      "Authentication verification failed. Please ensure you are logged in.",
      401
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return jsonError("Invalid request body.", 400);
  }

  const result = validateContactPayload(body, topics);
  if (!result.ok) {
    return jsonError(result.error, 400);
  }

  const { fields, topic } = result;

  // Honeypot: pretend success so bots stop retrying instead of learning
  if (fields.company.length > 0) {
    return Response.json({ ok: true });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    // Graceful fallback when Brevo key is not configured in local/dev environments
    console.warn("BREVO_API_KEY is not configured in environment.");
    return jsonError(
      "The message service is temporarily unconfigured on this server. Please use the direct email link above to email the professor directly.",
      503
    );
  }

  const subject = `[Site] ${topic.subject} — ${fields.name}${userEmail ? " [Verified Member]" : ""}`;
  const senderEmail = process.env.BREVO_SENDER_EMAIL || PROF_EMAIL;
  const htmlMessage = fields.message
    .split(/\r?\n{2,}/)
    .map(
      (paragraph) =>
        `<p style="margin:0 0 12px">${escapeHtml(paragraph).replace(/\n/g, "<br />")}</p>`
    )
    .join("");

  try {
    const response = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Judge Nsereko Archive", email: senderEmail },
        to: [{ email: PROF_EMAIL }],
        replyTo: { email: fields.email, name: fields.name },
        subject,
        textContent: `${fields.message}\n\n— ${fields.name} (${fields.email})\nSent from the website contact page.`,
        htmlContent: `<p style="margin:0 0 12px"><strong>Topic:</strong> ${escapeHtml(topic.label)}</p>${htmlMessage}<p style="margin:16px 0 0"><strong>— ${escapeHtml(fields.name)}</strong> (${escapeHtml(fields.email)})<br />Sent from the Judge Nsereko website contact page.</p>`,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error(
        `Brevo send failed (${response.status}): ${detail.slice(0, 500)}`
      );
      return jsonError(
        "Your message could not be sent at this moment. Please email the professor directly.",
        502
      );
    }
  } catch (error) {
    console.error("Brevo request error:", error);
    return jsonError(
      "Your message could not be delivered due to a network error. Please email the professor directly.",
      502
    );
  }

  return Response.json({ ok: true });
}
