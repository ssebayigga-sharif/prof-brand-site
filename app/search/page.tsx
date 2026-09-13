import Link from "next/link";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

const searchableContent = [
  {
    title: "About David",
    href: "/#about",
    description: "Professor, author, and cultural critic.",
  },
  {
    title: "Books",
    href: "/books",
    description: "Explore David's published books and ideas.",
  },
  {
    title: "Writing",
    href: "/#writing",
    description: "Essays and reflections on public life.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Speaking invitations and general inquiries.",
  },
];

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = query
    ? searchableContent.filter((item) =>
        `${item.title} ${item.description}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      )
    : [];

  return (
    <main
      className="inner-page search-page"
      aria-labelledby="search-page-title"
    >
      <section className="inner-page-hero">
        <p className="eyebrow">Search</p>
        <h1 id="search-page-title">
          {query ? `Results for “${query}”` : "Search the site"}
        </h1>
        <p className="hero-summary">
          {query
            ? `${results.length} result${results.length === 1 ? "" : "s"} found.`
            : "Enter a search term above to explore the site."}
        </p>
      </section>
      {results.length > 0 && (
        <section className="search-results" aria-label="Search results">
          {results.map((result) => (
            <Link
              className="search-result"
              href={result.href}
              key={result.href}
            >
              <div>
                <h2>{result.title}</h2>
                <p>{result.description}</p>
              </div>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </section>
      )}
      {query && results.length === 0 && (
        <p className="search-empty">
          No matching pages yet. Try a broader search.
        </p>
      )}
    </main>
  );
}
