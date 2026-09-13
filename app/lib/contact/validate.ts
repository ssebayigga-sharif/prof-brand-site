import type { ContactTopic } from "@/app/lib/contact/topics";

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const CONTACT_LIMITS = {
  name: { min: 2, max: 80 },
  email: { max: 254 },
  message: { min: 10, max: 5000 },
} as const;

export type ContactFields = {
  name: string;
  email: string;
  topicId: string;
  message: string;
  company: string; // honeypot — must stay empty
};

export type ValidationResult =
  | { ok: true; fields: ContactFields; topic: ContactTopic }
  | { ok: false; error: string };

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactPayload(
  raw: Record<string, unknown>,
  topics: ContactTopic[],
): ValidationResult {
  const name = asTrimmedString(raw.name);
  const email = asTrimmedString(raw.email).toLowerCase();
  const topicId = asTrimmedString(raw.topic ?? raw.topicId);
  const message = asTrimmedString(raw.message);
  const company = asTrimmedString(raw.company);

  if (
    name.length < CONTACT_LIMITS.name.min ||
    name.length > CONTACT_LIMITS.name.max
  ) {
    return {
      ok: false,
      error: `Please enter your name (${CONTACT_LIMITS.name.min}–${CONTACT_LIMITS.name.max} characters).`,
    };
  }

  if (!EMAIL_PATTERN.test(email) || email.length > CONTACT_LIMITS.email.max) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const topic = topics.find((item) => item.id === topicId);
  if (!topic) {
    return { ok: false, error: "Please choose a topic for your message." };
  }

  if (
    message.length < CONTACT_LIMITS.message.min ||
    message.length > CONTACT_LIMITS.message.max
  ) {
    return {
      ok: false,
      error: `Your message must be between ${CONTACT_LIMITS.message.min} and ${CONTACT_LIMITS.message.max} characters.`,
    };
  }

  return {
    ok: true,
    fields: { name, email, topicId, message, company },
    topic,
  };
}
