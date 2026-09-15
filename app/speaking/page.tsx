import type { Metadata } from "next";
import { PageHero } from "../components/ui/page-hero";
import { Button } from "../components/ui/button";
import { SPEAKING_ENGAGEMENTS, PERSONAL_DATA } from "../lib/data/cv-data";

export const metadata: Metadata = {
  title: "Speaking & Lectures | Judge Daniel David Ntanda Nsereko",
  description:
    "Keynotes, guest lectures, international seminars, and conference addresses delivered by Judge Daniel David Ntanda Nsereko across world capitals.",
};

const KEYNOTE_TOPICS = [
  {
    title: "International Criminal Law & Tribunals",
    description:
      "Admissibility challenges, prosecutorial discretion, evidence management, and the evolution of the ICC and ad hoc international tribunals.",
  },
  {
    title: "Head of State Immunity & Impunity",
    description:
      "Doctrinal analysis of customary international law exceptions to personal and functional immunity for atrocity crimes.",
  },
  {
    title: "Victims of Crime & Human Rights",
    description:
      "Victim participation in criminal proceedings, restitution, reparations, and protection of vulnerable witnesses.",
  },
  {
    title: "The African State & International Justice",
    description:
      "Complementarity, relations between the African Union and the ICC, and indigenous legal traditions.",
  },
];

export default function SpeakingPage() {
  return (
    <main className="bg-white text-[#17201f]">
      {/* Page Hero */}
      <PageHero
        eyebrow="Keynotes &amp; Lectures"
        badge="International Addresses"
        title={
          <>
            Advancing the Dialogue on <em className="text-[#e6c66a] not-italic">Global Justice</em>
          </>
        }
        description="Keynote addresses, distinguished university lectures, and judicial seminars delivered across Europe, North America, Africa, and Asia on international humanitarian and criminal law."
        asideTitle="Inquiry Topics"
        asideText="Available for distinguished university lectures, high-level panel discussions, judicial training seminars, and memorial addresses."
      >
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" href="/contact">
            Submit Speaking Invitation →
          </Button>
          <Button variant="outline-light" href="#engagements">
            Browse Lecture History
          </Button>
        </div>
      </PageHero>

      {/* Featured Topics Section */}
      <section className="border-b border-[#d9d1c4] bg-[#faf6ef] px-6 py-16 sm:px-10 lg:px-[5.5vw] lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c64e38]">
              Subject Matter
            </p>
            <h2 className="mt-2 font-serif text-3xl text-[#17201f] sm:text-4xl">
              Core Lecture &amp; Seminar Themes
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {KEYNOTE_TOPICS.map((topic, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#d9d1c4] bg-white p-6 shadow-sm transition hover:border-[#c64e38]"
              >
                <span className="font-serif text-2xl font-normal text-[#c64e38]">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-serif text-xl text-[#17201f]">
                  {topic.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#66706b]">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chronological Lecture History */}
      <section
        id="engagements"
        className="px-6 py-16 sm:px-10 lg:px-[5.5vw] lg:py-24"
        aria-labelledby="history-heading"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col justify-between gap-4 border-b border-[#d9d1c4] pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c64e38]">
                Lecture Record
              </p>
              <h2
                id="history-heading"
                className="mt-2 font-serif text-3xl text-[#17201f] sm:text-4xl"
              >
                Selected Lectures, Addresses &amp; Panel Presentations
              </h2>
            </div>
            <span className="text-xs font-semibold text-[#66706b]">
              {SPEAKING_ENGAGEMENTS.length} Recorded Addresses
            </span>
          </div>

          <div className="mt-8 divide-y divide-[#d9d1c4]">
            {SPEAKING_ENGAGEMENTS.map((lecture, idx) => (
              <article
                key={idx}
                className="py-6 transition hover:bg-[#faf6ef]/70"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="font-semibold text-[#c64e38]">{lecture.year}</span>
                  <span className="text-[#a9b8b3]">·</span>
                  <span className="text-[#16404d] font-medium">{lecture.location}</span>
                  {lecture.date && (
                    <>
                      <span className="text-[#a9b8b3]">·</span>
                      <span className="text-[#66706b]">{lecture.date}</span>
                    </>
                  )}
                </div>

                <h3 className="mt-2 font-serif text-xl font-normal leading-snug text-[#17201f] sm:text-2xl">
                  {lecture.title}
                </h3>

                <p className="mt-1 text-sm text-[#16404d]">
                  <strong>Event:</strong> {lecture.event}
                </p>

                <p className="mt-1 text-xs text-[#66706b]">
                  <strong>Organizer / Venue:</strong> {lecture.organizerOrVenue}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Inquiry Process & CTA */}
      <section className="emblem bg-[#17201f] px-6 py-16 text-[#fff8ed] sm:px-10 lg:px-[5.5vw] lg:py-20">
        <div aria-hidden="true" className="emblem-mark" />
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e6c66a]">
            Invitations &amp; Engagements
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl">
            Invite Judge Nsereko to Speak
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#d8e0dc]">
            Please provide event dates, host institution, conference theme, and audience profile.
            All invitations are reviewed personally.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="primary" href="/contact">
              Send Speaking Invitation →
            </Button>
            <Button
              variant="outline-light"
              href={`mailto:${PERSONAL_DATA.email}?subject=Speaking%20Invitation%20for%20Judge%20Nsereko`}
            >
              Direct Email
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
