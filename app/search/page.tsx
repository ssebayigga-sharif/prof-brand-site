import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { searchBooks } from "../lib/books";
import { searchPublications } from "../lib/data/publications";
import { PublicationItemCard } from "../components/ui/publication-item";

export const metadata: Metadata = {
  title: "Search Archive | Judge Daniel David Ntanda Nsereko",
  description: "Search books, articles, chapters, cases, and lectures from the archive of Judge Daniel David Ntanda Nsereko.",
};

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim();

  const matchingBooks = searchBooks(query);
  const matchingPubs = searchPublications(query);
  const totalResults = (query ? matchingBooks.length : 0) + (query ? matchingPubs.length : 0);

  return (
    <main className="min-h-[calc(100svh-5rem)] bg-[#faf6ef] text-[#17201f]">
      {/* Search Header Banner */}
      <section className="bg-[#17201f] px-6 pb-16 pt-28 text-[#fff8ed] sm:px-10 lg:px-[5.5vw] lg:pb-20 lg:pt-36">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e6c66a]">
            Search the Archive
          </p>
          <h1 className="mt-4 font-serif text-4xl font-normal leading-tight tracking-normal sm:text-6xl lg:text-7xl">
            Find a Book, Article, or <em className="text-[#e6c66a] not-italic">Key Doctrine</em>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-[#d8e0dc]">
            Query across treatises, journal articles, Rome Statute commentaries, criminal casebooks, and international trial decisions.
          </p>

          <form
            role="search"
            action="/search"
            method="get"
            className="mt-8 flex max-w-2xl items-center rounded-full border border-[#a9b8b3]/30 bg-[#24312f] p-2 pl-6 shadow-xl focus-within:border-[#e6c66a]"
          >
            <label className="sr-only" htmlFor="archive-search">
              Search archive
            </label>
            <input
              id="archive-search"
              name="q"
              type="search"
              defaultValue={query}
              placeholder="Try: immunity, aggression, victims, Botswana, Rome Statute..."
              className="min-w-0 flex-1 bg-transparent py-2 text-sm text-[#fff8ed] outline-none placeholder:text-[#a9b8b3]"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#e6c66a] px-6 py-2.5 text-xs font-semibold text-[#17201f] transition hover:bg-[#f0d882]"
            >
              Search ↗
            </button>
          </form>

          <div className="mt-6 flex flex-wrap gap-2 text-xs text-[#a9b8b3]">
            <span>Suggested keywords:</span>
            {["immunity", "aggression", "victims", "Botswana", "admissibility", "Uganda", "Rwanda"].map((term) => (
              <Link
                key={term}
                href={`/search?q=${term}`}
                className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] text-[#e6c66a] hover:bg-white/20"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="px-6 py-16 sm:px-10 lg:px-[5.5vw] lg:py-24">
        <div className="flex flex-col justify-between gap-4 border-b border-[#d9d1c4] pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c64e38]">
              {query ? "Search Results" : "Complete Collection"}
            </p>
            <h2 className="mt-2 font-serif text-3xl font-normal text-[#17201f] sm:text-4xl">
              {query
                ? `${totalResults} result${totalResults === 1 ? "" : "s"} for “${query}”`
                : "Archive Publications"}
            </h2>
          </div>
          {query && (
            <Link
              href="/search"
              className="text-xs font-semibold uppercase text-[#c64e38] underline underline-offset-4"
            >
              Clear Search
            </Link>
          )}
        </div>

        {/* Matching Books */}
        {matchingBooks.length > 0 && (
          <div className="mt-12">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-serif text-2xl text-[#17201f]">
                Books &amp; Monographs ({matchingBooks.length})
              </h3>
              <Link
                href="/books"
                className="text-xs font-semibold uppercase tracking-wider text-[#c64e38] hover:underline"
              >
                All Books →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {matchingBooks.map((book) => (
                <article
                  key={book.id}
                  className="flex flex-col justify-between overflow-hidden rounded-lg border border-[#d9d1c4] bg-white shadow-sm transition hover:border-[#c64e38] hover:shadow-md"
                >
                  <div>
                    <div className="relative aspect-4/5 w-full bg-gradient-to-b from-[#212f2d] via-[#172220] to-[#0f1715] p-5 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={book.image}
                          alt={`Cover of ${book.title}`}
                          fill
                          className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-[#c64e38]">
                        <span>{book.category}</span>
                        <span>{book.year}</span>
                      </div>
                      <h4 className="mt-3 font-serif text-xl font-normal text-[#17201f]">
                        {book.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-[#66706b]">
                        {book.description}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-[#d9d1c4] bg-[#faf6ef] p-4">
                    <Link
                      href={`/contact?topic=books&title=${encodeURIComponent(book.title)}`}
                      className="inline-flex w-full items-center justify-center rounded-md border border-[#17201f] bg-white px-3 py-1.5 text-xs font-semibold text-[#17201f] hover:bg-[#17201f] hover:text-white transition"
                    >
                      Enquire about title ↗
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Matching Publications (Articles, Chapters, Papers) */}
        {matchingPubs.length > 0 && (
          <div className="mt-16">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-serif text-2xl text-[#17201f]">
                Articles, Book Chapters &amp; Papers ({matchingPubs.length})
              </h3>
              <Link
                href="/writing"
                className="text-xs font-semibold uppercase tracking-wider text-[#c64e38] hover:underline"
              >
                Browse Full Bibliography →
              </Link>
            </div>

            <div className="divide-y divide-[#d9d1c4] rounded-lg border border-[#d9d1c4] bg-white px-6">
              {matchingPubs.map((pub) => (
                <PublicationItemCard key={pub.id} publication={pub} />
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {query && totalResults === 0 && (
          <div className="mt-12 rounded-lg border border-dashed border-[#d9d1c4] bg-white p-16 text-center">
            <h3 className="font-serif text-3xl text-[#17201f]">No Records Found</h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-[#66706b]">
              No books, articles, or chapters matched &quot;{query}&quot;. Try broader terms like &quot;ICC&quot;, &quot;criminal&quot;, &quot;treaty&quot;, or browse the full writing archive.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/books"
                className="rounded-md bg-[#17201f] px-5 py-2.5 text-xs font-semibold text-white"
              >
                Browse All Books
              </Link>
              <Link
                href="/writing"
                className="rounded-md border border-[#17201f] px-5 py-2.5 text-xs font-semibold text-[#17201f]"
              >
                Open Writing Archive
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
