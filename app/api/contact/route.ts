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
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.email) {
      return jsonError(
        "Authentication required. Please sign in to your account before sending a message to Professor Nsereko.",
        401
      );
    }
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
    console.error("BREVO_API_KEY is not configured in environment.");
    return jsonError(
      "The message service is temporarily unconfigured on this server. Please use the direct email link above to email the professor directly.",
      503
    );
  }

  const senderName = "Prof. Judge David Daniel Ntanda Nsereko";
  const senderEmail = process.env.BREVO_SENDER_EMAIL || PROF_EMAIL;
  const subject = `${topic.subject} — ${fields.name}`;
  const receivedAt = new Date().toLocaleString("en-GB", {
    dateStyle: "long",
    timeStyle: "short",
  });

  const htmlMessage = fields.message
    .split(/\r?\n{2,}/)
    .map(
      (paragraph) =>
        `<p style="margin:0 0 14px;font-size:14px;line-height:22px;color:#22211f;">${escapeHtml(paragraph).replace(/\n/g, "<br />")}</p>`
    )
    .join("");

  const metaRow = (label: string, value: string) =>
    `<tr>
      <td style="padding:7px 14px 7px 0;font-size:11px;line-height:16px;color:#8a928c;letter-spacing:.04em;text-transform:uppercase;white-space:nowrap;">${label}</td>
      <td align="right" style="padding:7px 0;font-size:13px;line-height:18px;color:#17201f;">${value}</td>
    </tr>`;

  const ruledDivider =
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="border-top:1px solid #e5ded2;height:1px;line-height:1px;font-size:1px;">&nbsp;</td></tr></table>`;

  const htmlContent = `
  <div style="background-color:#faf6ef;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#16404d;">
      <tr>
        <td align="center" style="padding:30px 28px 22px;">
          <p style="margin:0;font-size:11px;line-height:16px;letter-spacing:2px;text-transform:uppercase;color:#e6c66a;">Public archive &middot; Judge Daniel David Ntanda Nsereko</p>
          <h1 style="margin:10px 0 4px;font-size:24px;line-height:30px;color:#fff8ed;font-family:Georgia, 'Times New Roman', serif;">${escapeHtml(topic.label)}</h1>
          <p style="margin:0;font-size:12px;line-height:18px;color:#b8c5c1;">Message submitted through the website contact form</p>
        </td>
      </tr>
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#faf6ef;">
      <tr>
        <td align="center" style="padding:10px 0 26px;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="width:560px;max-width:100%;background-color:#ffffff;border:1px solid #d9d1c4;border-radius:12px;">
            <tr>
              <td style="padding:18px 26px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${metaRow("Topic", `<span style="color:#c64e38;">${escapeHtml(topic.label)}</span>`)}
                  ${metaRow("From", `${escapeHtml(fields.name)} &lt;${escapeHtml(fields.email)}&gt;`)}
                  ${metaRow("Received", receivedAt)}
                </table>
                ${ruledDivider}
              </td>
            </tr>
            <tr>
              <td style="padding:16px 26px 6px;">${htmlMessage}</td>
            </tr>
            <tr>
              <td style="padding:0 26px;">${ruledDivider}</td>
            </tr>
            <tr>
              <td style="padding:14px 26px 22px;">
                <p style="margin:0;font-size:15px;line-height:20px;color:#17201f;"><strong>&mdash; ${escapeHtml(fields.name)}</strong> <span style="color:#c64e38;">(&nbsp;${escapeHtml(fields.email)}&nbsp;)</span></p>
                <p style="margin:8px 0 0;font-size:11px;line-height:16px;color:#66706b;">&#10003;&nbsp; Verified member &middot; sent via the Judge Nsereko public archive</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#17201f;">
      <tr>
        <td align="center" style="padding:20px 28px;">
          <p style="margin:0;font-size:12px;line-height:19px;color:#a9b8b3;text-align:center;">
            Submitted through the contact form on the <strong style="color:#d8e0dc;">Judge Nsereko public archive</strong>.<br/>
            To respond directly to <strong style="color:#d8e0dc;">${escapeHtml(fields.name)}</strong>, hit &ldquo;Reply&rdquo; &mdash; your reply goes straight to <span style="color:#e6c66a;">${escapeHtml(fields.email)}</span>.
          </p>
        </td>
      </tr>
    </table>
  </div>`;

  const textContent =
    `${topic.subject}\n` +
    `${"".padEnd(topic.subject.length, "=")}\n\n` +
    `From:     ${fields.name} <${fields.email}>\n` +
    `Topic:    ${topic.label}\n` +
    `Received: ${receivedAt}\n\n` +
    `${fields.message}\n\n` +
    `— ${fields.name} (${fields.email})\n` +
    `Sent via the Judge Nsereko public archive. Reply to this email to reach ${fields.name} directly.\n`;

  try {
    const response = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email: PROF_EMAIL }],
        replyTo: { email: fields.email, name: fields.name },
        subject,
        textContent,
        htmlContent,
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
