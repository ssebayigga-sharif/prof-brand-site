"use client";

import { useContactForm } from "@/app/lib/contact/use-contact-form";
import {
  buildMailto,
  PROF_EMAIL,
  type ContactTopic,
} from "@/app/lib/contact/topics";

const labelClasses =
  "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted";

const fieldClasses =
  "w-full rounded-md border border-line bg-panel px-4 py-3 text-sm text-ink outline-none transition placeholder:text-faint-2 focus:border-accent focus:ring-2 focus:ring-accent/20";

export default function ContactForm({
  topics,
}: {
  topics: readonly ContactTopic[];
}) {
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
        className="rounded-lg border border-line bg-panel p-8 shadow-sm"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
            ✓
          </span>
          <p className="font-serif text-2xl text-ink">Message Delivered</p>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Thank you for reaching out. Your message has been routed to {PROF_EMAIL}. Judge Nsereko reads correspondence personally and endeavors to reply within two to three days.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent underline underline-offset-4 hover:text-accent-deep"
        >
          ← Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="contact-name">
            Your Name *
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
            placeholder="e.g. Dr. Eleanor Vance"
            className={fieldClasses}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="contact-email">
            Your Email Address *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={254}
            value={fields.email}
            onChange={(event) => setField("email", event.target.value)}
            placeholder="you@institution.edu"
            className={fieldClasses}
          />
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="contact-topic">
          Subject Category *
        </label>
        <select
          id="contact-topic"
          name="topic"
          required
          value={fields.topicId}
          onChange={(event) => setField("topicId", event.target.value)}
          className={fieldClasses}
        >
          {topics.map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.label} — {topic.subject}
            </option>
          ))}
        </select>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className={labelClasses} htmlFor="contact-message">
            Message *
          </label>
          <span className="text-[11px] text-muted">
            {fields.message.length}/5000 characters
          </span>
        </div>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={7}
          value={fields.message}
          onChange={(event) => setField("message", event.target.value)}
          placeholder={`e.g. ${selectedTopic?.bodyIntro ?? "Dear Judge Nsereko,"} ...`}
          className={`${fieldClasses} resize-y font-sans`}
        />
      </div>

      {/* Honeypot hidden input */}
      <div
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
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
        <div
          role="status"
          aria-live="polite"
          className="rounded-md border-l-4 border-accent bg-red-50 p-4 text-xs leading-relaxed text-red-900"
        >
          <p className="font-semibold">{error}</p>
          <p className="mt-1">
            Alternatively, you can{" "}
            <a
              className="font-semibold underline hover:text-accent"
              href={
                selectedTopic
                  ? buildMailto(selectedTopic)
                  : `mailto:${PROF_EMAIL}`
              }
            >
              email Judge Nsereko directly at {PROF_EMAIL} ↗
            </a>
          </p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-wider text-inverse transition hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Transmitting..." : "Send Message"}
          <span aria-hidden="true">↗</span>
        </button>
        <p className="text-xs text-muted">
          Messages are dispatched directly to the Judge&apos;s personal inbox.
        </p>
      </div>
    </form>
  );
}
