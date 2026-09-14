import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Daniel David Ntanda Nsereko | Judge, Professor & Author",
  description:
    "The work and ideas of Judge Daniel David Ntanda Nsereko, professor, author, and international jurist.",
};

interface CareerEntry {
  period: string;
  role: string;
  place: string;
}

interface EducationEntry {
  degree: string;
  school: string;
}

const CAREER: CareerEntry[] = [
  {
    period: "2012—2023",
    role: "Judge, Appeals Chamber",
    place: "Special Tribunal for Lebanon · The Hague",
  },
  {
    period: "2007—2012",
    role: "Judge, International Criminal Court",
    place: "President, Appeals Division, 2009—2010",
  },
  {
    period: "1996—2007",
    role: "Professor of Law",
    place: "University of Botswana · Gaborone",
  },
  {
    period: "1972—present",
    role: "Advocate, High Court of Uganda",
    place: "Private practice, teaching, and public service",
  },
];

const EDUCATION: EducationEntry[] = [
  { degree: "J.S.D.", school: "New York University School of Law" },
  { degree: "LL.M.", school: "New York University School of Law" },
  { degree: "M.C.J.", school: "Howard University School of Law" },
  { degree: "LL.B.", school: "University of East Africa" },
];

export default function Home() {
  return (
    <main className="bg-[#f7f4ee] text-[#17201f]" id="about">
      <section className="bg-[#17201f] text-[#fff8ed]">
        <div className="grid min-h-[calc(100svh-168px)] items-center gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:px-[5.5vw] lg:py-14">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase text-[#e6c66a]">
              Judge · Professor · Author
            </p>
            <h1 className="mb-0 max-w-4xl font-serif text-5xl font-normal leading-[1.04] tracking-normal sm:text-6xl lg:text-7xl xl:text-8xl">
              Daniel David Ntanda{" "}
              <span className="block text-[#e6c66a]">Nsereko</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-[#d8e0dc] sm:text-lg sm:leading-8">
              A Ugandan scholar and international jurist whose work connects
              legal education, judicial service, and international criminal law
              with a steady commitment to the public good.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#e6c66a] px-5 py-3 text-sm font-semibold text-[#17201f] shadow-[0_10px_26px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:bg-[#f0d882] focus:outline-none focus:ring-2 focus:ring-[#e6c66a] focus:ring-offset-2 focus:ring-offset-[#17201f]"
                href="#career"
              >
                Explore career
              </a>
              <Link
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#a9b8b3] px-5 py-3 text-sm font-semibold text-[#fff8ed] transition hover:-translate-y-0.5 hover:border-[#fff8ed] hover:bg-[#fff8ed] hover:text-[#17201f] focus:outline-none focus:ring-2 focus:ring-[#e6c66a] focus:ring-offset-2 focus:ring-offset-[#17201f]"
                href="/writing"
              >
                Read writing
              </Link>
            </div>
          </div>

          <div className="justify-self-center lg:justify-self-end">
            <figure className="max-w-82.5">
              <div className="relative aspect-4/5 overflow-hidden rounded-sm border border-[#fff8ed]/20 bg-[#24312f] shadow-[0_24px_60px_rgba(0,0,0,0.32)]">
                <Image
                  src="/prof.png"
                  alt="Judge Daniel David Ntanda Nsereko"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 76vw, 330px"
                />
              </div>
              <figcaption className="mt-5 border-l border-[#e6c66a] pl-4 text-sm leading-6 text-[#d8e0dc]">
                Scholar, judge, and teacher with a record of service across
                African legal education and international justice.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d1c4] bg-[#fffaf2] px-6 sm:px-10 lg:px-[5.5vw]">
        <div className="grid divide-y divide-[#d9d1c4] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="py-6 sm:pr-8">
            <strong className="font-serif text-4xl font-normal text-[#17201f]">
              50+
            </strong>
            <p className="mt-2 text-xs font-semibold uppercase text-[#66706b]">
              Years in law
            </p>
          </div>
          <div className="py-6 sm:px-8">
            <strong className="font-serif text-4xl font-normal text-[#17201f]">
              ICC
            </strong>
            <p className="mt-2 text-xs font-semibold uppercase text-[#66706b]">
              Former judge
            </p>
          </div>
          <div className="py-6 sm:pl-8">
            <strong className="font-serif text-4xl font-normal text-[#17201f]">
              4
            </strong>
            <p className="mt-2 text-xs font-semibold uppercase text-[#66706b]">
              Legal degrees
            </p>
          </div>
        </div>
      </section>

      <section
        className="grid gap-10 bg-[#f7f4ee] px-6 py-16 sm:px-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:px-[5.5vw] lg:py-24"
        aria-labelledby="about-heading"
      >
        <p className="text-xs font-semibold uppercase text-[#66706b]">
          01 / About
        </p>
        <div>
          <h2
            id="about-heading"
            className="max-w-3xl font-serif text-4xl font-normal leading-tight tracking-normal sm:text-5xl lg:text-6xl"
          >
            A career built across classrooms and courts.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#66706b] sm:text-lg sm:leading-8">
            For more than five decades, Professor Nsereko has taught and
            practiced law while contributing to the work of international courts
            and tribunals. His scholarship focuses on international criminal
            law, human rights, criminal justice, and the relationship between
            law and public power.
          </p>
          <Link
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md border border-[#17201f] px-5 py-3 text-sm font-semibold text-[#17201f] transition hover:-translate-y-0.5 hover:bg-[#17201f] hover:text-[#fff8ed] focus:outline-none focus:ring-2 focus:ring-[#a83f35] focus:ring-offset-2"
            href="#career"
          >
            More about his career
          </Link>
        </div>
      </section>

      <section
        id="career"
        className="grid gap-10 bg-[#ebe5da] px-6 py-16 sm:px-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:px-[5.5vw] lg:py-24"
        aria-labelledby="career-heading"
      >
        <div>
          <p className="text-xs font-semibold uppercase text-[#a83f35]">
            02 / Career
          </p>
          <h2
            id="career-heading"
            className="mt-6 max-w-sm font-serif text-4xl font-normal leading-tight tracking-normal sm:text-5xl"
          >
            Selected appointments
          </h2>
        </div>
        <div className="border-t border-[#cfc7ba]">
          {CAREER.map(({ period, role, place }) => (
            <div
              className="grid gap-3 border-b border-[#cfc7ba] py-6 sm:grid-cols-[145px_minmax(0,1fr)] sm:gap-8"
              key={`${period}-${role}`}
            >
              <span className="text-xs font-semibold uppercase text-[#a83f35]">
                {period}
              </span>
              <div>
                <h3 className="font-serif text-2xl font-normal leading-snug text-[#17201f] sm:text-3xl">
                  {role}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#66706b]">{place}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="grid gap-10 bg-[#16404d] px-6 py-16 text-[#fff8ed] sm:px-10 lg:grid-cols-[minmax(280px,420px)_minmax(0,1fr)] lg:gap-16 lg:px-[5.5vw] lg:py-24"
        aria-labelledby="books-heading"
      >
        <div className="relative aspect-3/4 overflow-hidden rounded-sm border border-[#fff8ed]/15 bg-[#24385e] shadow-[0_18px_46px_rgba(0,0,0,0.22)]">
          <Image
            src="/author.png"
            alt="Cover of To The Hague from Nabinene"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 88vw, 420px"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase text-[#e6c66a]">
            03 / Writing
          </p>
          <h2
            id="books-heading"
            className="mt-6 max-w-2xl font-serif text-4xl font-normal leading-tight tracking-normal sm:text-5xl lg:text-6xl"
          >
            A life in law, written for the next generation.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#d8e0dc] sm:text-lg sm:leading-8">
            From international criminal law to Luganda translations and memoir,
            his writing brings legal questions into conversation with history,
            language, and public life.
          </p>
          <Link
            className="mt-8 inline-flex min-h-11 w-fit items-center justify-center rounded-md bg-[#e6c66a] px-5 py-3 text-sm font-semibold text-[#17201f] shadow-[0_10px_26px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#f0d882] focus:outline-none focus:ring-2 focus:ring-[#e6c66a] focus:ring-offset-2 focus:ring-offset-[#16404d]"
            href="/writing"
          >
            Explore the writing archive
          </Link>
        </div>
      </section>

      <section
        className="grid gap-10 bg-[#fffaf2] px-6 py-16 sm:px-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:px-[5.5vw] lg:py-24"
        aria-labelledby="education-heading"
      >
        <div>
          <p className="text-xs font-semibold uppercase text-[#66706b]">
            04 / Foundation
          </p>
          <h2
            id="education-heading"
            className="mt-6 max-w-sm font-serif text-4xl font-normal leading-tight tracking-normal sm:text-5xl"
          >
            Formed in rigorous legal traditions.
          </h2>
        </div>
        <div className="grid border-t border-[#d9d1c4] sm:grid-cols-2 sm:gap-x-10">
          {EDUCATION.map(({ degree, school }) => (
            <div className="border-b border-[#d9d1c4] py-6" key={degree}>
              <strong className="font-serif text-3xl font-normal text-[#17201f]">
                {degree}
              </strong>
              <p className="mt-2 text-sm leading-6 text-[#66706b]">{school}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="bg-[#8e352f] px-6 py-16 text-[#fff8ed] sm:px-10 lg:px-[5.5vw] lg:py-24"
        aria-label="Profile conclusion"
      >
        <p className="text-xs font-semibold uppercase text-[#f4d0c3]">
          An enduring record
        </p>
        <h2 className="mt-6 max-w-3xl font-serif text-4xl font-normal leading-tight tracking-normal sm:text-5xl lg:text-6xl">
          Teaching the law. Writing for its future.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#e6c66a] px-5 py-3 text-sm font-semibold text-[#17201f] shadow-[0_10px_26px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:bg-[#f0d882] focus:outline-none focus:ring-2 focus:ring-[#fff8ed] focus:ring-offset-2 focus:ring-offset-[#8e352f]"
            href="/writing"
          >
            Explore the writing archive
          </Link>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#fff8ed] px-5 py-3 text-sm font-semibold text-[#fff8ed] transition hover:-translate-y-0.5 hover:bg-[#fff8ed] hover:text-[#8e352f] focus:outline-none focus:ring-2 focus:ring-[#fff8ed] focus:ring-offset-2 focus:ring-offset-[#8e352f]"
            href="/contact"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
