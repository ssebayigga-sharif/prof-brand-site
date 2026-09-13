"use client";

import { useContactForm } from "@/app/lib/contact/use-contact-form";
import {
  buildMailto,
  PROF_EMAIL,
  type ContactTopic,
} from "@/app/lib/contact/topics";

const labelClasses =
  "mb-1.5 block text-[10px] uppercase tracking-[0.13em] text-[var(--ink-muted)]";

const fieldClasses =
  "w-full rounded-none border border-[var(--line)] bg-transparent px-3 py-2.5 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--ink-muted)] focus:border-[var(--red)]";

export default function ContactForm({ topics }: { topics: ContactTopic[] }) {
  const { fields, status, error, setField, submit, reset } =
    useContactForm(topics);

  const selectedTopic =
    topics.find((topic) => topic.id === fields.topicId) ?? topics[0];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submit();
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border border-(--line)] bg-white/60 p-8"
      >
        <p className="font-[Georgia,serif] text-xl">Message sent.</p>
        <p className="mt-2 text-sm leading-6 text-(--ink-muted)]">
          Thank you — your message has been delivered to {PROF_EMAIL}. The
          professor replies personally, usually within a few days.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 text-xs uppercase tracking-[0.13em] underline decoration-(--line)] underline-offset-4 transition-colors hover:text-(--red)]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false}>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="contact-name">
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={80}
            value={fields.name}
            onChange={(event) => setField("name", event.target.value)}
            placeholder="Jane Doe"
            className={fieldClasses}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="contact-email">
            Your email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={254}
            value={fields.email}
            onChange={(event) => setField("email", event.target.value)}
            placeholder="you@example.com"
            className={fieldClasses}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClasses} htmlFor="contact-topic">
          Topic
        </label>
        <select
          id="contact-topic"
          name="topic"
          required
          value={fields.topicId}
          onChange={(event) => setField("topicId", event.target.value)}
          className={`${fieldClasses} appearance-none`}
        >
          {topics.map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className={labelClasses} htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={7}
          value={fields.message}
          onChange={(event) => setField("message", event.target.value)}
          placeholder={`e.g. ${selectedTopic?.bodyIntro ?? "Hello David,"} ...`}
          className={`${fieldClasses} resize-y`}
        />
        <p className="mt-1.5 text-[11px] text-(--ink-muted)]">
          {fields.message.length}/5000 characters
        </p>
      </div>

      {/* Honeypot — hidden from humans, catches bots */}
      <div
        className="absolute left-[9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.company}
          onChange={(event) => setField("company", event.target.value)}
        />
      </div>

      {status === "error" && error && (
        <p
          role="status"
          aria-live="polite"
          className="mt-5 border-l-2 border-(--red)] bg-white/60 p-3 text-sm leading-6"
        >
          {error}{" "}
          <a
            className="underline underline-offset-4 hover:text-(--red)]"
            href={
              selectedTopic
                ? buildMailto(selectedTopic)
                : `mailto:${PROF_EMAIL}`
            }
          >
            Email the professor directly ↗
          </a>
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 border border-(--foreground)] bg-(--foreground)] px-6 py-3 text-xs uppercase tracking-[0.13em] text-(--background)] transition-colors hover:border-(--red)] hover:bg-(--red)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <span aria-hidden="true">↗</span>
        </button>
        <p className="text-[11px] text-(--ink-muted)]">
          No mail app opens — the message is delivered straight to {PROF_EMAIL}.
        </p>
      </div>
    </form>
  );
}
