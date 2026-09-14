"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PAGE_COUNT = 12;

const books = [
  {
    image: "/Const.png",
    year: "2017",
    category: "Constitutional law",
    title: "Constitutional Law in Botswana",
    description:
      "A substantial study of Botswana's constitutional order, institutions, and public law.",
  },
  {
    image: "/crime.png",
    year: "2015",
    category: "Criminal law",
    title: "Criminal Law in Uganda",
    description:
      "A leading reference on the principles, cases, and practice of criminal law in Uganda.",
  },
  {
    image: "/author.png",
    year: "2023",
    category: "Memoir",
    title: "To The Hague from Nabinene",
    description:
      "A journey through a life of legal education, judicial service, and international justice.",
  },
];

export default function BooksCatalogue() {
  const [currentPage, setCurrentPage] = useState(1);
  const hasBooks = currentPage === 1;

  return (
    <main className="bg-[#f4f0e9] text-[#1d2524]" aria-label="Books">
      <section className="grid gap-12 bg-[#1d2524] px-6 pb-16 pt-28 text-[#f5ecdd] sm:px-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20 lg:px-[5.5vw] lg:pb-24 lg:pt-40">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#e7bc50]">
            The library of Daniel David Ntanda Nsereko
          </p>
          <h1 className="mt-8 max-w-4xl font-serif text-5xl font-normal leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[clamp(4.5rem,7vw,8rem)]">
            Books that make <em className="text-[#e7bc50]">law readable.</em>
          </h1>
          <p className="mt-9 max-w-2xl text-base leading-7 text-[#b8c5c1] sm:text-lg">
            A growing catalogue of legal scholarship, reference works, and
            personal writing from a career spent teaching, judging, and asking
            how law can serve the public good.
          </p>
        </div>
        <div className="self-end border-l border-[#68706a] pl-5">
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#b8c5c1]">
            Archive / 01—12
          </p>
          <p className="mt-5 font-serif text-xl leading-7 text-[#f5ecdd]">
            Browse the collection one page at a time. More titles will join the
            archive as the catalogue grows.
          </p>
        </div>
      </section>

      <section
        className="px-6 py-16 sm:px-10 lg:px-[5.5vw] lg:py-24"
        aria-labelledby="catalogue-heading"
      >
        <div className="flex flex-col justify-between gap-6 border-b border-[#d7d1c6] pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#c64e38]">
              Catalogue
            </p>
            <h2
              id="catalogue-heading"
              className="mt-4 font-serif text-4xl font-normal leading-none tracking-[-0.04em] sm:text-5xl"
            >
              {hasBooks ? "Featured titles" : `Archive page ${currentPage}`}
            </h2>
          </div>
          <p className="text-sm text-[#68706a]">
            Page {currentPage} of {PAGE_COUNT}
          </p>
        </div>

        {hasBooks ? (
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {books.map((book, index) => (
              <article
                className="group overflow-hidden border border-[#d7d1c6] bg-[#fff9ee] transition duration-300 hover:-translate-y-2 hover:border-[#c64e38] hover:shadow-[0_20px_45px_rgba(29,37,36,0.14)]"
                key={book.title}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#194b59]">
                  <Image
                    src={book.image}
                    alt={`Cover of ${book.title}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#f5ecdd]/90 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[#1d2524]">
                    0{index + 1}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.12em] text-[#c64e38]">
                    <span>{book.category}</span>
                    <span>{book.year}</span>
                  </div>
                  <h3 className="mt-5 font-serif text-3xl font-normal leading-[1.02] tracking-[-0.03em]">
                    {book.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-[#68706a]">
                    {book.description}
                  </p>
                  <Link
                    className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#1d2524] px-4 py-2.5 text-xs font-medium transition hover:bg-[#1d2524] hover:text-[#f5ecdd] focus:outline-none focus:ring-2 focus:ring-[#c64e38] focus:ring-offset-2"
                    href="/contact"
                  >
                    Enquire about this book <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 flex min-h-80 flex-col items-center justify-center border border-dashed border-[#cfc7ba] bg-[#e8e2d8] px-6 text-center">
            <span className="font-serif text-5xl font-normal text-[#c64e38]">
              {String(currentPage).padStart(2, "0")}
            </span>
            <h3 className="mt-5 font-serif text-3xl font-normal">
              More titles are on their way.
            </h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-[#68706a]">
              This page is reserved for forthcoming books, translations, and
              editions in the growing archive.
            </p>
          </div>
        )}

        <nav
          className="mt-14 flex flex-wrap items-center justify-center gap-2 border-t border-[#d7d1c6] pt-8"
          aria-label="Book pages"
        >
          {Array.from({ length: PAGE_COUNT }, (_, index) => index + 1).map(
            (page) => (
              <button
                className={`grid h-10 w-10 place-items-center rounded-full text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-[#c64e38] focus:ring-offset-2 ${
                  currentPage === page
                    ? "bg-[#c64e38] text-[#fff9ee] shadow-[0_8px_18px_rgba(198,78,56,0.25)]"
                    : "border border-[#d7d1c6] text-[#68706a] hover:-translate-y-0.5 hover:border-[#1d2524] hover:text-[#1d2524]"
                }`}
                key={page}
                type="button"
                aria-current={currentPage === page ? "page" : undefined}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ),
          )}
        </nav>
      </section>

      <section className="bg-[#194b59] px-6 py-16 text-[#f5ecdd] sm:px-10 lg:px-[5.5vw] lg:py-20">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#e7bc50]">
              Beyond the books
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-4xl font-normal leading-none tracking-[-0.04em] sm:text-5xl">
              Read the wider writing archive.
            </h2>
          </div>
          <Link
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#e7bc50] px-6 py-3 text-sm font-medium text-[#1d2524] transition hover:-translate-y-1 hover:bg-[#f5d477] focus:outline-none focus:ring-2 focus:ring-[#e7bc50] focus:ring-offset-2 focus:ring-offset-[#194b59]"
            href="/writing"
          >
            Explore writings <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
