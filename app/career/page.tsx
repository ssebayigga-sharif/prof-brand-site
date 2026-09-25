import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../components/ui/page-hero";
import { TimelineItem } from "../components/ui/timeline-item";
import { Button } from "../components/ui/button";
import {
  CAREER_HISTORY,
  PROFESSIONAL_STATUS,
  PROFESSIONAL_ACTIVITIES,
  MEMBERSHIPS,
  AWARDS,
  EXTERNAL_EXAMINATIONS,
  PERSONAL_DATA,
} from "../lib/data/cv-data";

export const metadata: Metadata = {
  title: "Curriculum Vitae & Career | Judge Daniel David Ntanda Nsereko",
  description:
    "Comprehensive career history, judicial appointments at the ICC and Special Tribunal for Lebanon, academic appointments, professional missions, and memberships.",
};

export default function CareerPage() {
  const judicialCareer = CAREER_HISTORY.filter(
    (c) => c.category === "judicial",
  );
  const academicCareer = CAREER_HISTORY.filter(
    (c) => c.category === "academic",
  );
  const unAndPractice = CAREER_HISTORY.filter(
    (c) => c.category === "un" || c.category === "practice",
  );

  return (
    <main className="bg-background text-ink">
      {/* Page Hero */}
      <PageHero
        eyebrow="Curriculum Vitae"
        badge="Over 50 Years in Law"
        title={
          <>
            A Life in{" "}
            <em className="text-gold not-italic">Courts, Classrooms,</em>{" "}
            &amp; Public Service
          </>
        }
        description="From Ugandan private practice and academic department leadership to presiding over landmark international criminal appeals at the ICC and the Special Tribunal for Lebanon."
        asideTitle="The Record of Service"
        asideText="Appellate judge, international criminal law pioneer, and educator of generations of African lawyers."
      >
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" size="sm" href="#judicial">
            Judicial Service
          </Button>
          <Button variant="outline-light" size="sm" href="#academic">
            Academic Career
          </Button>
          <Button variant="outline-light" size="sm" href="#missions">
            Expert Missions
          </Button>
          <Button variant="outline-light" size="sm" href="#memberships">
            Memberships
          </Button>
        </div>
      </PageHero>

      {/* Personal Profile Summary */}
      <section className="border-b border-line bg-surface px-6 py-12 sm:px-10 lg:px-[5.5vw]">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Personal Data
            </p>
            <h3 className="mt-2 font-serif text-2xl text-ink">
              {PERSONAL_DATA.name}
            </h3>
            <p className="mt-2 text-xs text-muted">
              Nationality: {PERSONAL_DATA.nationality}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Professional Status
            </p>
            <ul className="mt-2 space-y-2 text-xs leading-relaxed text-ink">
              {PROFESSIONAL_STATUS.map((s, idx) => (
                <li key={idx}>
                  <strong>{s.period}:</strong> {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Summary of Qualifications
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              J.S.D. &amp; LL.M. (New York University); Certificate in
              International Law (Hague Academy); M.C.J. (Howard University);
              LL.B. (University of East Africa, Dar Es Salaam).
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Judicial Appointments */}
      <section
        id="judicial"
        className="px-6 py-16 sm:px-10 lg:px-[5.5vw] lg:py-24"
        aria-labelledby="judicial-heading"
      >
        <div className="max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_240px] items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                01 / Judicial Service
              </p>
              <h2
                id="judicial-heading"
                className="mt-4 font-serif text-3xl font-normal leading-tight sm:text-5xl"
              >
                International Tribunals &amp; Appellate Chambers
              </h2>
              <p className="mt-4 max-w-2xl text-base text-muted">
                Decisions rendered and appeals presided over at the
                International Criminal Court and the Special Tribunal for
                Lebanon.
              </p>
            </div>
            <figure className="justify-self-start lg:justify-self-end">
              <div className="relative aspect-3/4 w-44 sm:w-52 overflow-hidden rounded-lg border border-line bg-surface-dark shadow-md">
                <Image
                  src="/judge.png"
                  alt="Judge Daniel David Ntanda Nsereko in Appeals Chamber judicial robes"
                  fill
                  className="object-cover object-top"
                  sizes="220px"
                />
              </div>
              <figcaption className="mt-2 text-[11px] text-muted">
                Judge Nsereko in judicial robes at the ICC Appeals Chamber
              </figcaption>
            </figure>
          </div>

          <div className="mt-12 border-t border-line">
            {judicialCareer.map((entry, idx) => (
              <TimelineItem
                key={idx}
                period={entry.period}
                role={entry.role}
                institution={entry.institution}
                location={entry.location}
                description={entry.description}
                cases={entry.cases}
                badge="Judicial"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Academic Appointments */}
      <section
        id="academic"
        className="parchment px-6 py-16 sm:px-10 lg:px-[5.5vw] lg:py-24"
        aria-labelledby="academic-heading"
      >
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            02 / Academia
          </p>
          <h2
            id="academic-heading"
            className="mt-4 font-serif text-3xl font-normal leading-tight sm:text-5xl"
          >
            University Teaching &amp; Departmental Leadership
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Over three decades of university instruction in Public International
            Law, Criminal Law, Evidence, and Human Rights across Botswana,
            Canada, and Uganda.
          </p>

          <div className="mt-12 border-t border-line">
            {academicCareer.map((entry, idx) => (
              <TimelineItem
                key={idx}
                period={entry.period}
                role={entry.role}
                institution={entry.institution}
                location={entry.location}
                description={entry.description}
                badge="Academic"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: UN & Early Legal Practice */}
      <section className="px-6 py-16 sm:px-10 lg:px-[5.5vw] lg:py-24">
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            03 / Early Career &amp; United Nations
          </p>
          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight sm:text-5xl">
            United Nations Consultancies &amp; Legal Practice
          </h2>

          <div className="mt-12 border-t border-line">
            {unAndPractice.map((entry, idx) => (
              <TimelineItem
                key={idx}
                period={entry.period}
                role={entry.role}
                institution={entry.institution}
                location={entry.location}
                description={entry.description}
                badge={
                  entry.category === "un" ? "United Nations" : "Law Practice"
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Professional Activities, Observer Missions & Consultancies */}
      <section
        id="missions"
        className="bg-surface px-6 py-16 sm:px-10 lg:px-[5.5vw] lg:py-24"
        aria-labelledby="missions-heading"
      >
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            04 / Missions &amp; Advisory
          </p>
          <h2
            id="missions-heading"
            className="mt-4 font-serif text-3xl font-normal leading-tight sm:text-5xl"
          >
            Amnesty International Missions &amp; Legal Consultancies
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted">
            High-level trial observation, human rights field investigations, and
            treaty negotiation advisory for African governments and
            international organizations.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PROFESSIONAL_ACTIVITIES.map((act, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-line bg-panel p-6 shadow-sm"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-accent">
                    {act.year}
                  </span>
                  <span className="rounded-full bg-navy/10 px-2 py-0.5 text-[10px] font-medium uppercase text-navy">
                    {act.category.replace("_", " ")}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-xl font-normal text-ink">
                  {act.role}
                </h3>
                <p className="mt-1 text-xs font-medium text-navy">
                  {act.organization}
                  {act.location && ` · ${act.location}`}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  {act.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Academic Standards & External Examinations */}
      <section className="px-6 py-16 sm:px-10 lg:px-[5.5vw] lg:py-24">
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            05 / Academic Governance
          </p>
          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight sm:text-5xl">
            External Examinations &amp; Professorial Assessor Roles
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Serving as external examiner, doctorate committee evaluator, and
            promotions assessor for major African and European universities.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="border-b-2 border-ink text-ink">
                  <th className="py-3 pr-4 font-semibold uppercase">Period</th>
                  <th className="py-3 px-4 font-semibold uppercase">
                    Institution
                  </th>
                  <th className="py-3 px-4 font-semibold uppercase">
                    Location
                  </th>
                  <th className="py-3 pl-4 font-semibold uppercase">
                    Role &amp; Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {EXTERNAL_EXAMINATIONS.map((exam, idx) => (
                  <tr key={idx} className="hover:bg-surface">
                    <td className="py-3 pr-4 font-medium text-accent">
                      {exam.period}
                    </td>
                    <td className="py-3 px-4 font-semibold text-ink">
                      {exam.institution}
                    </td>
                    <td className="py-3 px-4 text-muted">
                      {exam.location}
                    </td>
                    <td className="py-3 pl-4 text-muted">
                      <span className="capitalize font-medium text-ink">
                        {exam.role.replace("_", " ")}
                      </span>
                      {exam.details && ` — ${exam.details}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 6: Memberships & Awards */}
      <section
        id="memberships"
        className="bg-background px-6 py-16 text-ink sm:px-10 lg:px-[5.5vw] lg:py-24"
      >
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            06 / Standing
          </p>
          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-ink sm:text-5xl">
            Professional Memberships &amp; Editorial Boards
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {MEMBERSHIPS.map((mem, idx) => (
              <div
                key={idx}
                className="rounded border border-line bg-surface p-4"
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                  {mem.period}
                </span>
                <h4 className="mt-1 text-sm font-semibold text-ink">
                  {mem.role}
                </h4>
                <p className="mt-1 text-xs text-muted">
                  {mem.organization}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-line pt-10">
            <h3 className="font-serif text-2xl text-ink">
              Honours &amp; Fellowships
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {AWARDS.map((award, idx) => (
                <div
                  key={idx}
                  className="rounded border border-line bg-surface p-5"
                >
                  <span className="text-xs font-semibold text-accent">
                    {award.year}
                  </span>
                  <h4 className="mt-1 font-serif text-lg text-ink">
                    {award.title}
                  </h4>
                  <p className="mt-1 text-xs font-medium text-muted">
                    {award.institution} · {award.location}
                  </p>
                  {award.description && (
                    <p className="mt-2 text-xs text-muted">
                      {award.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background px-6 py-16 text-center sm:px-10 lg:px-[5.5vw] lg:py-20">
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">
          Interested in Academic or Speaking Engagements?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
          Judge Nsereko participates in select lectures, conferences, and
          comparative criminal justice panels.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="primary" href="/contact">
            Contact the Judge →
          </Button>
          <Button variant="secondary" href="/speaking">
            View Speaking History
          </Button>
        </div>
      </section>
    </main>
  );
}
