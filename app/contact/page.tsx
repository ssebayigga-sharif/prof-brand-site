import type { Metadata } from "next";
import ContactForm from "@/app/hooks/contact-form";
import { buildMailto, PROF_EMAIL, topics } from "@/app/lib/contact/topics";

export const metadata: Metadata = {
  title: "Contact | David Daniel Nsereko",
  description:
    "Contact Prof. David Daniel Nsereko — speaking invitations, books, teaching, and general inquiries.",
};

export default function ContactPage() {
  return (
    <main className="inner-page" aria-labelledby="contact-page-title">
      <section
        id="speaking"
        className="grid gap-px border-y border-(--line)] bg-(--line)] md:grid-cols-2 lg:grid-cols-3"
        aria-label="Inquiry topics"
      >
        {topics.map((topic, index) => (
          <a
            key={topic.id}
            href={buildMailto(topic)}
            className="group flex min-h-40 flex-col bg-(--background)] p-7 transition-colors hover:bg-white"
          >
            <div>
              <p className="section-index">
                {String(index + 1).padStart(2, "0")} — {topic.label}
              </p>
              <p className="mt-3 text-[13px] leading-6 text-(--ink-muted)]">
                {topic.description}
              </p>
            </div>
          </a>
        ))}
      </section>

      {/* Compose form — sends directly to the professor's inbox via Brevo */}
      <section className="px-[5.5vw] py-20" aria-label="Write a message">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-(--line)] pb-5">
            <div>
              <h2 className="font-[Georgia,serif] text-2xl font-medium tracking-tight">
                compose your message here
              </h2>
            </div>
            <a
              href={`mailto:${PROF_EMAIL}`}
              className="text-link shrink-0 text-xs"
            >
              {PROF_EMAIL}
            </a>
          </div>
          <ContactForm topics={topics} />
        </div>
      </section>

      {/* Expectations & privacy — builds trust, reduces follow-up emails */}
      <section
        className="border-t border-(--line)] px-[5.5vw] py-14"
        aria-label="What to expect"
      >
        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-3">
          <div>
            <p className="section-index">Response time</p>
            <p className="mt-3 text-[13px] leading-6 text-(--ink-muted)]">
              The professor reads and replies to every message personally,
              usually within two to three working days.
            </p>
          </div>
          <div>
            <p className="section-index">What helps</p>
            <p className="mt-3 text-[13px] leading-6 text-(--ink-muted)]">
              Choosing a topic above, one clear message, and any dates or
              details — it all helps a faster, more useful reply.
            </p>
          </div>
          <div>
            <p className="section-index">Your privacy</p>
            <p className="mt-3 text-[13px] leading-6 text-(--ink-muted)]">
              Your name and email are used only to reply to you. Nothing is
              published, shared, or added to a mailing list.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
