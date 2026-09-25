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
  const [activeSides, setActiveSides] = useState<
    Record<string, "front" | "back">
  >({});
  const [modalBook, setModalBook] = useState<Book | null>(null);
  const [modalSide, setModalSide] = useState<"front" | "back">("front");

  const toggleBookSide = (
    bookId: string,
    side: "front" | "back",
    e?: React.MouseEvent,
  ) => {
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
    <main className="bg-background text-ink">
      {/* Hero Header */}
      <PageHero
        eyebrow="The Library of Daniel David Ntanda Nsereko"
        badge={`${books.length} Volumes`}
        title={
          <>
            Books That Make{" "}
            <em className="text-gold not-italic">Law Readable</em>
          </>
        }
        description="Treatises on constitutional architecture, leading criminal casebooks, personal memoirs from village Uganda to The Hague, and translations of classic literature into Luganda."
        asideTitle="Catalogue Archive"
        asideText="Four decades of published monographs for law faculties, high courts, libraries, and indigenous language readers."
      />

      {/* Filter and Search Bar */}
      <section className="border-b border-line bg-background px-6 py-8 sm:px-10 lg:px-[5.5vw]">
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
                    ? "bg-accent text-white shadow-sm"
                    : "border border-line bg-surface text-muted hover:border-ink hover:text-ink"
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
                className="w-full rounded-lg border border-line bg-panel px-4 py-2.5 text-xs text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-xs text-muted hover:text-ink"
                >
                  ✕
                </button>
              )}
            </div>

            <p className="text-xs text-muted">
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {filteredBooks.map((book: Book, index: number) => {
              const currentSide = activeSides[book.id] ?? "front";
              const displayedImage =
                currentSide === "back" && book.backImage
                  ? book.backImage
                  : book.image;

              return (
                <article
                  key={book.id}
                  onClick={() => openModal(book)}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border border-line bg-panel p-3 transition duration-300 hover:-translate-y-1 hover:border-accent"
                >
                  <div>
                    {/* Book Image Frame */}
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => openModal(book)}
                      onKeyDown={(e) => e.key === "Enter" && openModal(book)}
                      title={`Click to inspect cover of ${book.title}`}
                      className="relative aspect-4/5 w-full overflow-hidden bg-panel p-3 flex items-center justify-center cursor-pointer select-none"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={displayedImage}
                          alt={`${currentSide === "back" ? "Back cover" : "Cover"} of ${book.title}`}
                          fill
                          className="object-contain drop-shadow-[0_8px_14px_rgba(164,150,132,0.28)] transition-all duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>

                      {/* Header badges */}
                      <div className="absolute left-3 top-3 flex items-center gap-2">
                        <span className="rounded-md bg-panel/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy border border-line">
                          {book.year}
                        </span>
                        {book.backImage && (
                          <span className="rounded-md bg-navy px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white">
                            2 Views
                          </span>
                        )}
                      </div>

                      {/* Hover action overlay indicator */}
                      <div className="absolute inset-x-0 bottom-3 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="rounded-full bg-panel/95 px-3 py-1 text-[11px] font-medium text-ink shadow-lg border border-line flex items-center gap-1.5">
                          <svg
                            className="w-3.5 h-3.5 text-accent"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          Inspect Cover
                        </span>
                      </div>

                      {/* Front / Back Switcher for books with back cover */}
                      {book.backImage && (
                        <div
                          className="absolute bottom-3 left-3 z-10 flex rounded-full bg-panel/95 p-0.5 border border-line shadow-md"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            type="button"
                            onClick={(e) => toggleBookSide(book.id, "front", e)}
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider transition ${
                              currentSide === "front"
                                ? "bg-gold text-ink"
                                : "text-muted hover:text-ink"
                            }`}
                          >
                            Front
                          </button>
                          <button
                            type="button"
                            onClick={(e) => toggleBookSide(book.id, "back", e)}
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider transition ${
                              currentSide === "back"
                                ? "bg-gold text-ink"
                                : "text-muted hover:text-ink"
                            }`}
                          >
                            Back
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Book Metadata */}
                    <div className="pt-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                          {book.category}
                        </span>
                        <span className="text-[10px] font-medium text-muted">
                          {book.year}
                        </span>
                      </div>
                      <h3 className="mt-2 font-serif text-base font-normal leading-snug text-ink">
                        {book.title}
                      </h3>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-line bg-panel p-12 text-center">
            <p className="font-serif text-2xl text-ink">
              No books match your criteria.
            </p>
            <p className="mt-2 text-xs text-muted">
              Try clearing the search query or selecting &quot;All
              Categories&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
              }}
              className="mt-4 rounded-full bg-accent px-5 py-2 text-xs font-semibold text-white"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 sm:p-6 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-surface text-ink shadow-xl border border-line md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 rounded-full border border-line bg-panel text-muted hover:text-ink hover:border-ink transition"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Left: High-res Cover Display */}
            <div className="relative flex flex-1 flex-col items-center justify-center bg-panel p-6 sm:p-10 min-h-87.5 md:min-h-130">
              <Image
                src={
                  modalSide === "back" && modalBook.backImage
                    ? modalBook.backImage
                    : modalBook.image
                }
                alt={`${modalSide === "back" ? "Back cover" : "Cover"} of ${modalBook.title}`}
                fill
                priority
                className="object-contain drop-shadow-[0_12px_20px_rgba(164,150,132,0.35)]"
                sizes="(max-width: 768px) 90vw, 480px"
              />

              {/* Front/Back toggle in modal */}
              {modalBook.backImage && (
                <div className="mt-4 flex rounded-full border border-line bg-panel p-1 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setModalSide("front")}
                    className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider transition ${
                      modalSide === "front"
                        ? "bg-accent text-white"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    Front Cover
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalSide("back")}
                    className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider transition ${
                      modalSide === "back"
                        ? "bg-accent text-white"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    Back Cover (Magezi Muliro Edition)
                  </button>
                </div>
              )}
            </div>

            {/* Right: Book Details & Inquiry */}
            <div className="flex w-full flex-col justify-between border-t border-line bg-panel p-6 md:w-90 md:border-l md:border-t-0">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    {modalBook.category}
                  </span>
                  <span className="text-xs text-muted">
                    {modalBook.year}
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-normal leading-snug text-ink">
                  {modalBook.title}
                </h3>

                {modalBook.edition && (
                  <p className="mt-1 text-xs font-medium text-accent">
                    {modalBook.edition}
                  </p>
                )}

                {modalBook.coauthor && (
                  <p className="mt-1 text-xs italic text-muted">
                    {modalBook.coauthor}
                  </p>
                )}

                <p className="mt-4 text-xs leading-relaxed text-muted">
                  {modalBook.description}
                </p>

                <div className="mt-6 space-y-2 border-t border-line pt-4 text-xs text-muted">
                  {modalBook.publisher && (
                    <p>
                      <strong className="text-ink">Publisher:</strong>{" "}
                      {modalBook.publisher}
                    </p>
                  )}
                  {modalBook.isbn && (
                    <p>
                      <strong className="text-ink">ISBN:</strong>{" "}
                      {modalBook.isbn}
                    </p>
                  )}
                  {modalBook.pages && (
                    <p>
                      <strong className="text-ink">Length:</strong>{" "}
                      {modalBook.pages}
                    </p>
                  )}
                  {!modalBook.isForthcoming && (
                    <p className="pt-1 text-[11px] font-medium text-navy">
                      <strong className="text-ink">Where to buy:</strong>{" "}
                      Aristoc &amp; Uganda Bookshop, Kampala, Uganda
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-line flex flex-col gap-2">
                <Link
                  href={`/contact?topic=books&title=${encodeURIComponent(modalBook.title)}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-4 py-2.5 text-xs font-semibold text-ink hover:bg-gold-soft transition"
                >
                  Enquire about this volume ↗
                </Link>
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex w-full items-center justify-center rounded-md border border-line bg-panel px-4 py-2 text-xs font-semibold text-ink hover:border-ink transition"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Cross-link to Articles */}
      <section className="bg-header px-6 py-16 text-ink sm:px-10 lg:px-[5.5vw] lg:py-20">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Beyond Monographs
            </p>
            <h2 className="mt-3 font-serif text-3xl font-normal text-ink sm:text-4xl">
              Explore 65+ Journal Articles &amp; Book Chapters
            </h2>
            <p className="mt-2 text-xs text-muted">
              Commentaries on the Rome Statute, Cardozo review essays, and UN
              reports.
            </p>
          </div>
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-xs font-semibold text-white transition hover:bg-accent"
          >
            Open Writing Archive →
          </Link>
        </div>
      </section>
    </main>
  );
}
