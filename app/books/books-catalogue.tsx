"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { books, type Book } from "../lib/books";
import { PageHero } from "../components/ui/page-hero";

const categories = [
  "All Categories",
  "Constitutional Law",
  "Criminal Law",
  "Memoir",
  "Translation",
  "Human Rights",
  "Legal Ethics",
  "Linguistics & Reference",
];

export default function BooksCatalogue() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = useMemo(() => {
    let result = books;

    if (selectedCategory !== "All Categories") {
      result = result.filter(
        (b) => b.category.toLowerCase() === selectedCategory.toLowerCase(),
      );
    }

    const q = searchQuery.trim().toLowerCase();
    if (!q) return result;

    return result.filter((b) =>
      [
        b.title,
        b.category,
        b.year,
        b.description,
        b.publisher ?? "",
        b.isbn ?? "",
        b.coauthor ?? "",
      ].some((val) => val.toLowerCase().includes(q)),
    );
  }, [selectedCategory, searchQuery]);

  return (
    <main className="bg-[#faf6ef] text-[#17201f]">
      {/* Hero Header */}
      <PageHero
        eyebrow="The Library of Daniel David Ntanda Nsereko"
        badge={`${books.length} Volumes`}
        title={
          <>
            Books That Make{" "}
            <em className="text-[#e6c66a] not-italic">Law Readable</em>
          </>
        }
        description="Treatises on constitutional architecture, leading criminal casebooks, personal memoirs from village Uganda to The Hague, and translations of classic literature into Luganda."
        asideTitle="Catalogue Archive"
        asideText="Four decades of published monographs for law faculties, high courts, libraries, and indigenous language readers."
      />

      {/* Filter and Search Bar */}
      <section className="border-b border-[#d9d1c4] bg-white px-6 py-8 sm:px-10 lg:px-[5.5vw]">
        <div className="flex flex-col gap-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
                  selectedCategory === cat
                    ? "bg-[#c64e38] text-white shadow-sm"
                    : "border border-[#d9d1c4] bg-[#faf6ef] text-[#66706b] hover:border-[#17201f] hover:text-[#17201f]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:max-w-md">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, publisher, ISBN, year..."
                className="w-full rounded-lg border border-[#d9d1c4] bg-white px-4 py-2.5 text-xs text-[#17201f] outline-none transition focus:border-[#c64e38] focus:ring-2 focus:ring-[#c64e38]/20"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-xs text-[#66706b] hover:text-[#17201f]"
                >
                  ✕
                </button>
              )}
            </div>

            <p className="text-xs text-[#66706b]">
              Showing <strong>{filteredBooks.length}</strong> of {books.length}{" "}
              publications
            </p>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section
        className="px-6 py-16 sm:px-10 lg:px-[5.5vw] lg:py-24"
        aria-labelledby="catalogue-heading"
      >
        <h2 id="catalogue-heading" className="sr-only">
          Book Catalogue Results
        </h2>

        {filteredBooks.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredBooks.map((book: Book, index: number) => (
              <article
                key={book.id}
                className="group flex flex-col justify-between overflow-hidden rounded-lg border border-[#d9d1c4] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c64e38] hover:shadow-lg"
              >
                <div>
                  {/* Book Image */}
                  <div className="relative aspect-4/5 w-full overflow-hidden bg-[#16404d]">
                    <Image
                      src={book.image}
                      alt={`Cover of ${book.title}`}
                      fill
                      className="object-cover object-top transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <span className="absolute left-3 top-3 rounded-md bg-[#17201f]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#e6c66a] backdrop-blur-sm">
                      {book.year}
                    </span>
                    <span className="absolute right-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[#17201f]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Book Metadata */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#c64e38]">
                        {book.category}
                      </span>
                      {book.edition && (
                        <span className="text-[10px] font-medium text-[#66706b]">
                          {book.edition}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 font-serif text-2xl font-normal leading-snug text-[#17201f]">
                      {book.title}
                    </h3>

                    {book.coauthor && (
                      <p className="mt-1 text-xs italic text-[#16404d]">
                        {book.coauthor}
                      </p>
                    )}

                    <p className="mt-3 text-xs leading-relaxed text-[#66706b]">
                      {book.description}
                    </p>

                    <div className="mt-4 border-t border-[#d9d1c4]/60 pt-3 text-[11px] text-[#66706b] space-y-1">
                      {book.publisher && (
                        <p>
                          <strong className="text-[#17201f]">Publisher:</strong>{" "}
                          {book.publisher}
                        </p>
                      )}
                      {book.isbn && (
                        <p>
                          <strong className="text-[#17201f]">ISBN:</strong>{" "}
                          {book.isbn}
                        </p>
                      )}
                      {book.pages && (
                        <p>
                          <strong className="text-[#17201f]">Length:</strong>{" "}
                          {book.pages}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="border-t border-[#d9d1c4]/60 bg-[#faf6ef] p-4">
                  <Link
                    href={`/contact?topic=books&title=${encodeURIComponent(book.title)}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#17201f] bg-white px-4 py-2 text-xs font-semibold text-[#17201f] transition hover:bg-[#17201f] hover:text-white"
                  >
                    Enquire about this book ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-[#d9d1c4] bg-white p-12 text-center">
            <p className="font-serif text-2xl text-[#17201f]">
              No books match your criteria.
            </p>
            <p className="mt-2 text-xs text-[#66706b]">
              Try clearing the search query or selecting &quot;All
              Categories&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
              }}
              className="mt-4 rounded-full bg-[#c64e38] px-5 py-2 text-xs font-semibold text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Bottom Cross-link to Articles */}
      <section className="bg-[#16404d] px-6 py-16 text-[#fff8ed] sm:px-10 lg:px-[5.5vw] lg:py-20">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e6c66a]">
              Beyond Monographs
            </p>
            <h2 className="mt-3 font-serif text-3xl font-normal text-[#fff8ed] sm:text-4xl">
              Explore 65+ Journal Articles &amp; Book Chapters
            </h2>
            <p className="mt-2 text-xs text-[#b8c5c1]">
              Commentaries on the Rome Statute, Cardozo review essays, and UN
              reports.
            </p>
          </div>
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 rounded-md bg-[#e6c66a] px-5 py-3 text-xs font-semibold text-[#17201f] transition hover:bg-[#f0d882]"
          >
            Open Writing Archive →
          </Link>
        </div>
      </section>
    </main>
  );
}
