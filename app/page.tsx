import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/ui/button";
import { SectionHeading } from "./components/ui/section-heading";
import {
  CAREER_HISTORY,
  EDUCATION,
  STATS,
  AWARDS,
  PROFESSIONAL_STATUS,
} from "./lib/data/cv-data";
import { books } from "./lib/books";

export const metadata: Metadata = {
  title: "Judge Daniel David Ntanda Nsereko | Jurist, Professor & Author",
  description:
    "Official portfolio and archive of Judge Daniel David Ntanda Nsereko — former Judge of the International Criminal Court (ICC) and Special Tribunal for Lebanon (STL), Professor of Law, and legal scholar.",
};

export default function Home() {
  const featuredBookIds = [
    "to-the-hague-from-nabinene",
    "eddundiro-lya-bawansolo",
    "eddembe-lyaffe",
    "english-luganda-law-dictionary",
    "constitutional-law-in-botswana",
    "criminal-law-in-uganda",
  ];
  const featuredBooks = featuredBookIds
    .map((id) => books.find((b) => b.id === id)!)
    .filter(Boolean);
  const selectedCareer = CAREER_HISTORY.filter(
    (c) =>
      c.role.includes("Judge") ||
      c.role.includes("President") ||
      c.role.includes("Professor of Law") ||
      c.role.includes("Head"),
  ).slice(0, 5);

  return (
    <main className="bg-background text-ink" id="about">
      {/* Hero Section */}
      <section className="emblem bg-background text-ink pt-20">
        <div className="grid min-h-[calc(100svh-5rem)] items-center gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:px-[5.5vw] lg:py-20">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                International Jurist &amp; Scholar
              </span>
              <span className="text-xs font-medium text-muted">
                The Hague · Uganda · Botswana
              </span>
            </div>

            <h1 className="font-serif text-4xl font-normal leading-[1.04] tracking-normal sm:text-6xl lg:text-7xl xl:text-8xl">
              Judge Daniel David Ntanda{" "}
              <span className="block text-accent">Nsereko</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
              A Ugandan scholar, appellate judge, and author whose landmark
              contributions span the International Criminal Court, the Special
              Tribunal for Lebanon, university classrooms across Africa and
              North America, and indigenous language legal scholarship.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="primary" href="/career">
                View Full Career &amp; CV ↗
              </Button>
              <Button variant="outline-light" href="/books">
                Explore Books &amp; Archive
              </Button>
              <Button variant="outline-light" href="/writing">
                Read Publications
              </Button>
            </div>
          </div>

          <div className="justify-self-center lg:justify-self-end">
            <figure className="max-w-sm">
              <div className="group relative aspect-4/5 overflow-hidden rounded-md border border-line bg-header shadow-md transition duration-500 hover:-translate-y-1">
                <Image
                  src="/prof.png"
                  alt="Judge Daniel David Ntanda Nsereko"
                  fill
                  priority
                  className="object-cover object-top transition duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 80vw, 380px"
                />
              </div>
              <figcaption className="mt-5 border-l-2 border-accent pl-4 text-xs leading-relaxed text-muted">
                <strong>Judge Daniel David Ntanda Nsereko</strong>
                <br />
                Former Judge, ICC Appeals Division (2007–2012)
                <br />
                Judge, Special Tribunal for Lebanon (2012–2023)
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-surface px-6 sm:px-10 lg:px-[5.5vw]">
        <div className="grid grid-cols-2 divide-y divide-line sm:grid-cols-5 sm:divide-x sm:divide-y-0">
          {STATS.map((stat, idx) => (
            <div key={idx} className="py-6 px-4 first:pl-0 last:pr-0">
              <strong className="block font-serif text-3xl font-normal text-ink sm:text-4xl">
                {stat.value}
              </strong>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 01 / Overview Section */}
      <section
        className="grid gap-12 border-t border-line bg-background px-6 py-16 sm:px-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:px-[5.5vw] lg:py-24"
        aria-labelledby="about-heading"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Overview
        </p>
        <div>
          <SectionHeading
            title="A career built across international courts, lecture halls, and legal reform."
            description="For more than five decades, Judge Nsereko has helped shape the architecture of international justice. From presiding over pivotal appeals at the International Criminal Court to advising the United Nations on victim rights, his life's work reflects an unswerving commitment to the rule of law, fair trial guarantees, and human dignity."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-line bg-surface p-6">
              <h3 className="font-serif text-xl text-ink">
                Judicial Service
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                President of the ICC Appeals Division (2009–2010), Judge of the
                ICC (2007–2012), and Judge of the Appeals Chamber of the Special
                Tribunal for Lebanon (2012–2023).
              </p>
            </div>
            <div className="rounded-lg border border-line bg-surface p-6">
              <h3 className="font-serif text-xl text-ink">
                Academic Leadership
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Head of Department and Professor of Law at University of
                Botswana; Walter S. Owen Visiting Professor at University of
                British Columbia; Senior Lecturer at Makerere University.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="secondary" href="/career">
              Explore Full Biography &amp; Appointments →
            </Button>
            <Button variant="ghost" href="/contact">
              Get in touch
            </Button>
          </div>
        </div>
      </section>

      {/* 02 / Selected Appointments */}
      <section
        id="career"
        className="parchment grid gap-12 border-t border-line px-6 py-16 sm:px-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:px-[5.5vw] lg:py-24"
        aria-labelledby="career-heading"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Appointments
          </p>
          <h2
            id="career-heading"
            className="mt-4 font-serif text-3xl font-normal leading-tight text-ink sm:text-4xl"
          >
            Distinguished Appointments
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            Key roles in the bench, government delegations, and legal education
            across the globe.
          </p>
          <div className="mt-6">
            <Button variant="red" size="sm" href="/career">
              View All 15 Positions →
            </Button>
          </div>
        </div>

        <div className="border-t border-line">
          {selectedCareer.map((entry, idx) => (
            <div
              className="grid gap-3 border-b border-line py-6 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-8"
              key={idx}
            >
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-accent">
                {entry.period}
              </span>
              <div>
                <h3 className="font-serif text-2xl font-normal text-ink">
                  {entry.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-navy">
                  {entry.institution} · {entry.location}
                </p>
                {entry.description && (
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {entry.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03 / Featured Books */}
      <section
        className="grid gap-12 border-t border-line bg-background px-6 py-16 text-ink sm:px-10 lg:grid-cols-[minmax(300px,400px)_minmax(0,1fr)] lg:gap-16 lg:px-[5.5vw] lg:py-24"
        aria-labelledby="books-heading"
      >
        <div className="group relative aspect-3/4 overflow-hidden rounded-md border border-line bg-surface p-6 shadow-md flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/author.png"
              alt="Cover of To The Hague from Nabinene"
              fill
              className="object-contain drop-shadow-[0_16px_28px_rgba(0,0,0,0.65)] transition duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 90vw, 400px"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Published Works
          </p>
          <h2
            id="books-heading"
            className="mt-4 font-serif text-3xl font-normal leading-tight text-ink sm:text-5xl lg:text-6xl"
          >
            A life in law, written for courts, scholars, and communities.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Author of {books.length} major volumes spanning constitutional
            jurisprudence, comparative criminal procedure, memoir, and
            translations into Luganda — connecting legal principle with cultural
            heritage.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBooks.map((b) => (
              <Link
                key={b.id}
                href="/books"
                className="group flex items-center gap-3 rounded border border-line bg-surface p-3 transition hover:border-accent hover:bg-panel"
              >
                <div className="relative h-14 w-10 shrink-0 overflow-hidden rounded bg-header p-0.5">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-accent">
                    {b.year} · {b.category}
                  </span>
                  <h4 className="mt-1 font-serif text-sm leading-snug text-ink truncate group-hover:text-accent transition-colors">
                    {b.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary" href="/books">
              Explore All {books.length} Books →
            </Button>
            <Button variant="outline-light" href="/writing">
              Scholarly Articles &amp; Chapters
            </Button>
          </div>
        </div>
      </section>

      {/* 04 / Education & Professional Status */}
      <section
        className="grid gap-12 border-t border-line bg-surface px-6 py-16 sm:px-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:px-[5.5vw] lg:py-24"
        aria-labelledby="education-heading"
      >
        <div>
          <span
            aria-hidden="true"
            className="mb-4 block h-0.5 w-12 bg-accent"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Foundations
          </p>
          <h2
            id="education-heading"
            className="mt-4 font-serif text-3xl font-normal leading-tight text-ink sm:text-4xl"
          >
            Formed in Rigorous Traditions
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            Doctoral and comparative legal training at leading American and
            African law faculties.
          </p>
        </div>

        <div>
          <div className="grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
            {EDUCATION.map((edu, idx) => (
              <div className="border-b border-line py-6" key={idx}>
                <strong className="block font-serif text-2xl font-normal text-ink sm:text-3xl">
                  {edu.degree}
                </strong>
                <p className="mt-2 text-sm font-medium text-navy">
                  {edu.institution}
                </p>
                <p className="text-xs text-muted">
                  {edu.location} · {edu.period}
                </p>
                {edu.note && (
                  <p className="mt-2 text-xs italic text-muted">
                    {edu.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-line bg-panel p-6">
            <h3 className="font-serif text-xl text-ink">
              Professional Status
            </h3>
            <div className="mt-4 space-y-3">
              {PROFESSIONAL_STATUS.map((status, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <div>
                    <strong className="text-sm font-semibold text-ink">
                      {status.title} ({status.period})
                    </strong>
                    <p className="text-xs text-muted">
                      {status.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 / Awards & Honours */}
      <section className="border-t border-line bg-background px-6 py-16 sm:px-10 lg:px-[5.5vw] lg:py-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            index="Recognition"
            title="Honours, Fellowships &amp; Service"
            description="Recognized internationally for contributions to international human rights, penal reform, and comparative jurisprudence."
            align="center"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {AWARDS.map((award, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-line bg-surface p-6 transition hover:border-accent"
              >
                <span className="text-xs font-semibold text-accent">
                  {award.year} · {award.location}
                </span>
                <h3 className="mt-2 font-serif text-xl text-ink">
                  {award.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-navy">
                  {award.institution}
                </p>
                {award.description && (
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {award.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        className="bg-background px-6 py-16 text-ink sm:px-10 lg:px-[5.5vw] lg:py-24"
        aria-label="Profile conclusion"
      >
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            An Enduring Record
          </p>
          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            Advancing international justice. Writing for future generations.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Whether inquiring about speaking engagements, academic
            collaborations, or book copies, we welcome your correspondence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" href="/contact">
              Get in Touch Directly →
            </Button>
            <Button variant="outline-light" href="/career">
              View Complete CV
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
