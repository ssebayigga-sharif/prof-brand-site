import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100svh-5rem)] items-center bg-background px-6 py-24 text-ink sm:px-10 lg:px-[5.5vw]">
      <div className="mx-auto w-full max-w-3xl border-t-2 border-accent pt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Archive / 404
        </p>
        <h1 className="mt-4 max-w-2xl font-serif text-5xl font-normal leading-tight sm:text-7xl">
          This page is not in the record.
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
          The address may be outdated, or the page may have moved to another
          part of the archive.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.12em]">
          <Link
            href="/"
            className="rounded-md bg-ink px-5 py-3 text-inverse transition hover:bg-accent"
          >
            Return home
          </Link>
          <Link
            href="/search"
            className="rounded-md border border-ink px-5 py-3 text-ink transition hover:border-accent hover:text-accent"
          >
            Search the archive
          </Link>
        </div>
      </div>
    </main>
  );
}
