import type { Metadata } from "next";
import ContactForm from "@/app/hooks/contact-form";
import { PROF_EMAIL, topics } from "@/app/lib/contact/topics";
import { PageHero } from "@/app/components/ui/page-hero";
import { TopicsGrid } from "@/app/components/contact/topics-grid";
import { createClient } from "@/app/lib/supabase/server";

export const metadata: Metadata = {
  title: "Contact & Inquiries | Judge Daniel David Ntanda Nsereko",
  description:
    "Get in touch with Judge Daniel David Ntanda Nsereko for speaking engagements, research inquiries, books, and academic collaboration.",
};

const EXPECTATIONS = [
  {
    heading: "Response Time",
    body: "The Judge reads correspondence personally and endeavors to reply within two to three working days.",
  },
  {
    heading: "Speaking Details",
    body: "Including event dates, venue location, topic, and organizing entity assists in prompt confirmation.",
  },
  {
    heading: "Privacy Notice",
    body: "Your contact details are used solely to reply to your inquiry. No marketing lists or public disclosures.",
  },
];

export default async function ContactPage() {
  // Session is optional context (e.g. to prefill/personalize), not a gate.
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="bg-background text-ink">
      <PageHero
        eyebrow="Correspondence"
        badge="Direct Inquiries"
        title={
          <>
            Start a <em className="text-accent not-italic">Conversation</em>
          </>
        }
        description="Whether you are an academic institution inviting Judge Nsereko to speak, a legal researcher seeking citation guidance, or a publisher, we welcome your message."
        asideTitle="Direct Email"
        asideText={PROF_EMAIL}
      />

      <TopicsGrid topics={topics} />

      <section
        className="border-b border-line bg-background px-6 py-20 sm:px-10 lg:px-[5.5vw]"
        aria-label="Compose a message"
      >
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-line-strong pb-6 sm:flex-row sm:items-end">
            <div>
              {user?.email && (
                <span className="text-xs text-muted">
                  Signed in as <strong>{user.email}</strong>
                </span>
              )}
              <h2 className="mt-2 font-serif text-3xl font-normal text-ink">
                Compose Your Message
              </h2>
            </div>
            <a
              href={`mailto:${PROF_EMAIL}`}
              className="text-xs font-semibold text-navy underline decoration-accent underline-offset-4 hover:text-accent"
            >
              Direct Email: {PROF_EMAIL} ↗
            </a>
          </div>

          <div className="rounded-xl border border-line bg-panel p-6 shadow-[0_18px_50px_rgba(23,32,31,0.08)] sm:p-10">
            <ContactForm topics={topics} />
          </div>
        </div>
      </section>

      <section
        className="border-t border-line bg-background px-6 py-16 sm:px-10 lg:px-[5.5vw]"
        aria-label="What to expect"
      >
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
          {EXPECTATIONS.map((item) => (
            <div key={item.heading} className="rounded-lg border border-line bg-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {item.heading}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}