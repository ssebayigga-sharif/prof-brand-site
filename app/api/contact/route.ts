import { NextRequest } from "next/server";
import { PROF_EMAIL, topics } from "@/app/lib/contact/topics";
import { validateContactPayload } from "@/app/lib/contact/validate";

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
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return jsonError(
      "The contact service is not configured yet. Please email the professor directly.",
      500,
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
  // that the field is being checked.
  if (fields.company.length > 0) {
    return Response.json({ ok: true });
  }

  const subject = `[Site] ${topic.subject} — ${fields.name}`;
  const senderEmail = process.env.BREVO_SENDER_EMAIL || PROF_EMAIL;
  const htmlMessage = fields.message
    .split(/\r?\n{2,}/)
    .map(
      (paragraph) =>
        `<p style="margin:0 0 12px">${escapeHtml(paragraph).replace(/\n/g, "<br />")}</p>`,
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
        sender: { name: "prof-brand-site", email: senderEmail },
        to: [{ email: PROF_EMAIL }],
        replyTo: { email: fields.email, name: fields.name },
        subject,
        textContent: `${fields.message}\n\n— ${fields.name} (${fields.email})\nSent from the website contact page.`,
        htmlContent: `<p style="margin:0 0 12px"><strong>Topic:</strong> ${escapeHtml(topic.label)}</p>${htmlMessage}<p style="margin:16px 0 0"><strong>— ${escapeHtml(fields.name)}</strong> (${escapeHtml(fields.email)})<br />Sent from the website contact page.</p>`,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error(
        `Brevo send failed (${response.status}): ${detail.slice(0, 500)}`,
      );
      return jsonError(
        "Your message could not be sent right now. Please try again.",
        502,
      );
    }
  } catch (error) {
    console.error("Brevo request error:", error);
    return jsonError(
      "Your message could not be sent right now. Please try again, or email the professor directly.",
      502,
    );
  }

  return Response.json({ ok: true });
}
