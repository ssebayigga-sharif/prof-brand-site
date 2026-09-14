import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing | Daniel David Ntanda Nsereko",
  description:
    "Selected books, articles, and scholarship by Professor Daniel David Ntanda Nsereko.",
};

const books = [
  {
    year: "2025",
    title: "Eddundiro Lya Bawansolo",
    description:
      "A Luganda translation of George Orwell's Animal Farm, extending the reach of a classic political text.",
    tag: "Translation",
  },
  {
    year: "2024",
    title: "Eddembe Lyaffe",
    description:
      "A Luganda-language treatise on human rights, with translated key United Nations instruments.",
    tag: "Human rights",
  },
  {
    year: "2024",
    title: "Ntuuka E Hague Okuva E Nabinene",
    description:
      "A personal and professional journey from Uganda to a life in international justice.",
    tag: "Memoir",
  },
  {
    year: "2023",
    title: "To The Hague from Nabinene",
    description:
      "A published account of the places, cases, and convictions that shaped an international jurist.",
    tag: "Memoir",
  },
];

const scholarship = [
  {
    year: "2025",
    title:
      "Exceptions to the Customary International Law Rule on Head of State Immunity under International Criminal Law",
    publication: "Cardozo International & Comparative Law Review",
  },
  {
    year: "2020",
    title:
      "Perspectives on the International Criminal Jurisdiction of the African Court of Justice and Human Rights Pursuant to the Malabo Protocol",
    publication:
      "The African Court of Justice and Human Rights: Development and Challenges",
  },
  {
    year: "2012",
    title: "The International Criminal Court and Africa",
    publication:
      "African Regional Human Rights System: Thirty Years after the African Charter",
  },
  {
    year: "2005",
    title:
      "Prosecutorial Discretion before National Courts and International Tribunals",
    publication: "Journal of International Criminal Justice",
  },
];

export default function WritingPage() {
  return (
    <main className="writing-page">
      <section className="writing-hero" aria-labelledby="writing-title">
        <div>
          <p className="eyebrow">The writing of Daniel David Ntanda Nsereko</p>
          <h1 id="writing-title">
            Ideas that travel <em>across borders.</em>
          </h1>
          <p className="writing-lede">
            Books, translations, and scholarship shaped by a lifetime in legal
            education and international criminal justice.
          </p>
        </div>
        <div className="writing-hero-aside">
          <span className="section-index">01 / Writing archive</span>
          <p>
            From Luganda-language books to leading questions in international
            law, this is a selection of the work rather than an exhaustive CV.
          </p>
        </div>
      </section>

      <section
        className="writing-section writing-books"
        aria-labelledby="books-heading"
      >
        <div className="writing-section-heading">
          <p className="section-index">02 / Books</p>
          <h2 id="books-heading">
            Books for courts, classrooms, and communities.
          </h2>
        </div>
        <div className="writing-book-list">
          {books.map((book) => (
            <article className="writing-book" key={book.title}>
              <div className="writing-book-meta">
                <span>{book.year}</span>
                <span>{book.tag}</span>
              </div>
              <div>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="writing-section writing-scholarship"
        aria-labelledby="scholarship-heading"
      >
        <div className="writing-section-heading">
          <p className="section-index">03 / Scholarship</p>
          <h2 id="scholarship-heading">
            Questions that keep international law honest.
          </h2>
        </div>
        <div className="scholarship-list">
          {scholarship.map((item) => (
            <article className="scholarship-item" key={item.title}>
              <span>{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.publication}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="writing-topics" aria-labelledby="topics-heading">
        <div>
          <p className="eyebrow">A continuing inquiry</p>
          <h2 id="topics-heading">
            Human rights. Accountability. African perspectives.
          </h2>
        </div>
        <div className="writing-topic-list">
          <span>International criminal law</span>
          <span>Human rights</span>
          <span>Criminal justice</span>
          <span>Law and society</span>
        </div>
      </section>

      <section className="writing-cta" aria-label="Contact call to action">
        <p className="eyebrow">For invitations, research, and correspondence</p>
        <h2>Bring the conversation forward.</h2>
        <Link
          className="inline-flex items-center gap-3 rounded-full bg-[#e7bc50] px-6 py-3 text-sm font-medium text-[#1d2524] shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:bg-[#f5d477] focus:outline-none focus:ring-2 focus:ring-[#f5ecdd] focus:ring-offset-2 focus:ring-offset-[#c64e38]"
          href="/contact"
        >
          Start a conversation <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
