import type { Metadata } from "next";
import { PageHero } from "../components/ui/page-hero";
import { Button } from "../components/ui/button";
import WritingExplorer from "./writing-explorer";

export const metadata: Metadata = {
  title: "Publications & Writing Archive | Judge Daniel David Ntanda Nsereko",
  description:
    "Comprehensive publication bibliography of Judge Daniel David Ntanda Nsereko: 14 books, 28 book chapters, 39 peer-reviewed articles, and 36 conference papers.",
};

export default function WritingPage() {
  return (
    <main className="bg-white text-[#17201f]">
      <PageHero
        eyebrow="Bibliography &amp; Scholarship"
        badge="100+ Works"
        title={
          <>
            Ideas That Travel <em className="text-[#e6c66a] not-italic">Across Borders</em>
          </>
        }
        description="Treatises, commentaries, judicial scholarship, and indigenous translations examining international criminal jurisdiction, victim rights, constitutional governance, and the rule of law."
        asideTitle="Scholarly Focus"
        asideText="Comprehensive research on the Rome Statute, head of state immunity, the Crime of Aggression, and African regional legal architecture."
      />

      {/* Interactive Explorer */}
      <WritingExplorer />

      {/* CTA Section */}
      <section className="border-t border-[#d9d1c4] bg-[#faf6ef] px-6 py-16 text-center sm:px-10 lg:px-[5.5vw] lg:py-20">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c64e38]">
            Scholarly Correspondence
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[#17201f] sm:text-4xl">
            Research Inquiries &amp; Academic Synergies
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#66706b]">
            For inquiries regarding citations, book copies, translation projects, or scholarly consultations, please reach out directly.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="primary" href="/contact">
              Send a Message →
            </Button>
            <Button variant="secondary" href="/books">
              Browse Books Catalogue
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
