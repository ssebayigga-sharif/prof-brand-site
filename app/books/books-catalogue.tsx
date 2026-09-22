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
  const [activeSides, setActiveSides] = useState<Record<string, "front" | "back">>({});
  const [modalBook, setModalBook] = useState<Book | null>(null);
  const [modalSide, setModalSide] = useState<"front" | "back">("front");

  const toggleBookSide = (bookId: string, side: "front" | "back", e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveSides((prev) => ({ ...prev, [bookId]: side }));
  };

  const openModal = (book: Book) => {
    setModalBook(book);
    setModalSide(activeSides[book.id] ?? "front");
  };

  const closeModal = () => {
    setModalBook(null);
  };

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
            {filteredBooks.map((book: Book, index: number) => {
              const currentSide = activeSides[book.id] ?? "front";
              const displayedImage = currentSide === "back" && book.backImage ? book.backImage : book.image;

              return (
                <article
                  key={book.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-lg border border-[#d9d1c4] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c64e38] hover:shadow-xl"
                >
                  <div>
                    {/* Book Image Frame */}
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => openModal(book)}
                      onKeyDown={(e) => e.key === "Enter" && openModal(book)}
                      title={`Click to inspect cover of ${book.title}`}
                      className="relative aspect-4/5 w-full overflow-hidden bg-gradient-to-b from-[#212f2d] via-[#172220] to-[#0f1715] p-6 flex items-center justify-center cursor-pointer select-none"
                    >
                      {/* Subtle ambient lighting behind book */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none" />

                      <div className="relative w-full h-full">
                        <Image
                          src={displayedImage}
                          alt={`${currentSide === "back" ? "Back cover" : "Cover"} of ${book.title}`}
                          fill
                          className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>

                      {/* Header badges */}
                      <div className="absolute left-3 top-3 flex items-center gap-2">
                        <span className="rounded-md bg-[#17201f]/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#e6c66a] backdrop-blur-sm border border-[#e6c66a]/20">
                          {book.year}
                        </span>
                        {book.backImage && (
                          <span className="rounded-md bg-[#c64e38] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white">
                            2 Views
                          </span>
                        )}
                      </div>

                      <span className="absolute right-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[#17201f] shadow-sm">
                        0{index + 1}
                      </span>

                      {/* Hover action overlay indicator */}
                      <div className="absolute inset-x-0 bottom-3 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="rounded-full bg-[#17201f]/90 px-3 py-1 text-[11px] font-medium text-white shadow-lg backdrop-blur-xs border border-white/10 flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-[#e6c66a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Inspect Cover
                        </span>
                      </div>

                      {/* Front / Back Switcher for books with back cover */}
                      {book.backImage && (
                        <div
                          className="absolute bottom-3 left-3 z-10 flex rounded-full bg-[#17201f]/90 p-0.5 backdrop-blur-md border border-white/15 shadow-md"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            type="button"
                            onClick={(e) => toggleBookSide(book.id, "front", e)}
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider transition ${
                              currentSide === "front"
                                ? "bg-[#e6c66a] text-[#17201f]"
                                : "text-[#d8e0dc] hover:text-white"
                            }`}
                          >
                            Front
                          </button>
                          <button
                            type="button"
                            onClick={(e) => toggleBookSide(book.id, "back", e)}
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider transition ${
                              currentSide === "back"
                                ? "bg-[#e6c66a] text-[#17201f]"
                                : "text-[#d8e0dc] hover:text-white"
                            }`}
                          >
                            Back
                          </button>
                        </div>
                      )}
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
                  <div className="border-t border-[#d9d1c4]/60 bg-[#faf6ef] p-4 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => openModal(book)}
                      className="rounded-md border border-[#d9d1c4] bg-white px-3 py-2 text-xs font-semibold text-[#17201f] transition hover:border-[#17201f]"
                      title="Inspect cover in high resolution"
                    >
                      Inspect
                    </button>
                    <Link
                      href={`/contact?topic=books&title=${encodeURIComponent(book.title)}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-[#17201f] bg-white px-4 py-2 text-xs font-semibold text-[#17201f] transition hover:bg-[#17201f] hover:text-white"
                    >
                      Enquire about this book ↗
                    </Link>
                  </div>
                </article>
              );
            })}
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

      {/* Cover Inspector Lightbox Modal */}
      {modalBook && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Cover preview of ${modalBook.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-[#17201f] text-[#fff8ed] shadow-2xl border border-white/10 md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/60 p-2 text-white/80 hover:bg-black hover:text-white transition"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left: High-res Cover Display */}
            <div className="relative flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-[#111918] to-[#0a0f0e] p-6 sm:p-10 min-h-[350px] md:min-h-[520px]">
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px]">
                <Image
                  src={modalSide === "back" && modalBook.backImage ? modalBook.backImage : modalBook.image}
                  alt={`${modalSide === "back" ? "Back cover" : "Cover"} of ${modalBook.title}`}
                  fill
                  priority
                  className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
                  sizes="(max-width: 768px) 90vw, 480px"
                />
              </div>

              {/* Front/Back toggle in modal */}
              {modalBook.backImage && (
                <div className="mt-4 flex rounded-full bg-white/10 p-1 backdrop-blur-md border border-white/15">
                  <button
                    type="button"
                    onClick={() => setModalSide("front")}
                    className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider transition ${
                      modalSide === "front"
                        ? "bg-[#e6c66a] text-[#17201f]"
                        : "text-[#d8e0dc] hover:text-white"
                    }`}
                  >
                    Front Cover
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalSide("back")}
                    className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider transition ${
                      modalSide === "back"
                        ? "bg-[#e6c66a] text-[#17201f]"
                        : "text-[#d8e0dc] hover:text-white"
                    }`}
                  >
                    Back Cover (Magezi Muliro Edition)
                  </button>
                </div>
              )}
            </div>

            {/* Right: Book Details & Inquiry */}
            <div className="flex w-full flex-col justify-between border-t border-white/10 p-6 md:w-[360px] md:border-l md:border-t-0 bg-[#1c2826]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#e6c66a]/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#e6c66a]">
                    {modalBook.category}
                  </span>
                  <span className="text-xs text-[#a9b8b3]">{modalBook.year}</span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-normal leading-snug text-white">
                  {modalBook.title}
                </h3>

                {modalBook.edition && (
                  <p className="mt-1 text-xs font-medium text-[#e6c66a]">
                    {modalBook.edition}
                  </p>
                )}

                {modalBook.coauthor && (
                  <p className="mt-1 text-xs italic text-[#d8e0dc]">
                    {modalBook.coauthor}
                  </p>
                )}

                <p className="mt-4 text-xs leading-relaxed text-[#a9b8b3]">
                  {modalBook.description}
                </p>

                <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-xs text-[#d8e0dc]">
                  {modalBook.publisher && (
                    <p>
                      <strong className="text-white">Publisher:</strong> {modalBook.publisher}
                    </p>
                  )}
                  {modalBook.isbn && (
                    <p>
                      <strong className="text-white">ISBN:</strong> {modalBook.isbn}
                    </p>
                  )}
                  {modalBook.pages && (
                    <p>
                      <strong className="text-white">Length:</strong> {modalBook.pages}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2">
                <Link
                  href={`/contact?topic=books&title=${encodeURIComponent(modalBook.title)}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#e6c66a] px-4 py-2.5 text-xs font-semibold text-[#17201f] hover:bg-[#f0d882] transition"
                >
                  Enquire about this volume ↗
                </Link>
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex w-full items-center justify-center rounded-md border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 hover:text-white hover:border-white transition"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
