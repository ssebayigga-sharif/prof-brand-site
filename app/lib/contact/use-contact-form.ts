"use client";

import { useState } from "react";
import type { ContactTopic } from "@/app/lib/contact/topics";

export type ContactFormStatus = "idle" | "sending" | "success" | "error";

export type ContactFieldValues = {
  name: string;
  email: string;
  topicId: string;
  message: string;
  company: string; // honeypot
};

export type ContactField = keyof ContactFieldValues;

const initialFields: ContactFieldValues = {
  name: "",
  email: "",
  topicId: "general",
  message: "",
  company: "",
};

/**
 * Client-side state for the contact form: field values, submission status,
 * error message, and the POST to /api/contact. Validation happens again on
 * the server (see app/lib/contact/validate.ts) — this only handles UX.
 */
export function useContactForm(topics: ContactTopic[]) {
  const [fields, setFields] = useState<ContactFieldValues>(() => ({
    ...initialFields,
    topicId: topics[0]?.id ?? initialFields.topicId,
  }));
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  function setField(field: ContactField, value: string) {
    setFields((current) => ({ ...current, [field]: value }));
    if (status === "error") {
      setStatus("idle");
      setError(null);
    }
  }

  async function submit(): Promise<boolean> {
    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (response.ok && data?.ok) {
        setStatus("success");
        return true;
      }

      setError(data?.error ?? "Something went wrong. Please try again.");
      setStatus("error");
      return false;
    } catch {
      setError(
        "Network error — please try again, or email the professor directly.",
      );
      setStatus("error");
      return false;
    }
  }

  /** Clears the editable fields and returns the form to its idle state. */
  function reset() {
    setFields((current) => ({
      ...initialFields,
      topicId: current.topicId,
    }));
    setStatus("idle");
    setError(null);
  }

  return { fields, status, error, setField, submit, reset };
}
