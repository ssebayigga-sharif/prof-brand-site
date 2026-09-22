import type { Metadata } from "next";
import { redirect } from "next/navigation";
import ContactForm from "@/app/hooks/contact-form";
import { buildMailto, PROF_EMAIL, topics } from "@/app/lib/contact/topics";
import { PageHero } from "@/app/components/ui/page-hero";
import { createClient } from "@/app/lib/supabase/server";

export const metadata: Metadata = {
  title: "Contact & Inquiries | Judge Daniel David Ntanda Nsereko",
  description:
    "Get in touch with Judge Daniel David Ntanda Nsereko for speaking engagements, research inquiries, books, and academic collaboration.",
};

export default async function ContactPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/sign-up?next=/contact");
  }

  return (
    <main className="bg-white text-[#17201f]">
      {/* Hero */}
      <PageHero
        eyebrow="Correspondence"
        badge="Direct Inquiries"
        title={
          <>
            Start a <em className="text-[#e6c66a] not-italic">Conversation</em>
          </>
        }
        description="Whether you are an academic institution inviting Judge Nsereko to speak, a legal researcher seeking citation guidance, or a publisher, we welcome your message."
        asideTitle="Direct Email"
        asideText={PROF_EMAIL}
      />

      {/* Inquiry Topic Grid */}
      <section
        className="grid gap-px border-y border-[#d9d1c4] bg-[#d9d1c4] sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Inquiry topics"
      >
        {topics.map((topic, index) => (
          <a
            key={topic.id}
            href={buildMailto(topic)}
            className="group flex flex-col justify-between bg-white p-8 transition-colors hover:bg-[#faf6ef]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c64e38]">
                0{index + 1} — {topic.label}
              </p>
              <h3 className="mt-2 font-serif text-xl text-[#17201f] transition group-hover:text-[#c64e38]">
                {topic.subject}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#66706b]">
                {topic.description}
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#16404d] group-hover:text-[#c64e38]">
              Open mail draft ↗
            </span>
          </a>
        ))}
      </section>

      {/* Compose Form Section */}
      <section
        className="px-6 py-20 sm:px-10 lg:px-[5.5vw]"
        aria-label="Compose a message"
      >
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-[#d9d1c4] pb-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800 border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Verified Member Channel
                </span>
                {user?.email && (
                  <span className="text-xs text-[#66706b]">
                    Signed in as <strong>{user.email}</strong>
                  </span>
                )}
              </div>
              <h2 className="mt-2 font-serif text-3xl font-normal text-[#17201f]">
                Compose Your Message
              </h2>
            </div>
            <a
              href={`mailto:${PROF_EMAIL}`}
              className="text-xs font-semibold text-[#16404d] underline decoration-[#c64e38] underline-offset-4 hover:text-[#c64e38]"
            >
              Direct Email: {PROF_EMAIL} ↗
            </a>
          </div>

          <div className="rounded-xl border border-[#d9d1c4] bg-[#faf6ef]/70 p-6 sm:p-10">
            <ContactForm topics={topics} />
          </div>
        </div>
      </section>

      {/* Expectations & Guidance */}
      <section
        className="border-t border-[#d9d1c4] bg-[#faf6ef] px-6 py-16 sm:px-10 lg:px-[5.5vw]"
        aria-label="What to expect"
      >
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
          <div className="rounded-lg border border-[#d9d1c4] bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c64e38]">
              Response Time
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[#66706b]">
              The Judge reads correspondence personally and endeavors to reply
              within two to three working days.
            </p>
          </div>

          <div className="rounded-lg border border-[#d9d1c4] bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c64e38]">
              Speaking Details
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[#66706b]">
              Including event dates, venue location, topic, and organizing
              entity assists in prompt confirmation.
            </p>
          </div>

          <div className="rounded-lg border border-[#d9d1c4] bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c64e38]">
              Privacy Notice
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[#66706b]">
              Your contact details are used solely to reply to your inquiry. No
              marketing lists or public disclosures.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
