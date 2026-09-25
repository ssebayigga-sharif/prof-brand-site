import Link from "next/link";
import { books } from "../lib/books";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line-grey bg-footer px-6 py-16 text-ink sm:px-10 lg:px-[5.5vw] lg:py-20">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Col 1: Brand & Bio */}
        <div className="lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Public Archive
          </p>
          <h2 className="mt-4 font-serif text-2xl font-normal leading-tight text-ink">
            Judge Daniel David Ntanda Nsereko
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            International jurist, former Judge at the ICC and Special Tribunal
            for Lebanon, and Professor of Law with over 50 years of legal
            service.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5 text-[10px] text-muted">
            <span className="rounded bg-panel px-2 py-0.5 border border-line">
              ICC Appeals
            </span>
            <span className="rounded bg-panel px-2 py-0.5 border border-line">
              STL Hague
            </span>
            <span className="rounded bg-panel px-2 py-0.5 border border-line">
              Univ. of Botswana
            </span>
            <span className="rounded bg-panel px-2 py-0.5 border border-line">
              Makerere
            </span>
          </div>
        </div>

        {/* Col 2: Navigation (All Primary Navlinks) */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Explore
          </p>
          <nav
            className="mt-4 flex flex-col space-y-2.5 text-xs text-muted"
            aria-label="Footer navigation"
          >
            <Link href="/" className="transition hover:text-accent">
              Home / Overview
            </Link>
            <Link href="/career" className="transition hover:text-accent">
              Full Career &amp; CV
            </Link>
            <Link href="/books" className="transition hover:text-accent">
              Books &amp; Monographs
            </Link>
            <Link href="/writing" className="transition hover:text-accent">
              Writing &amp; Scholarship
            </Link>
            <Link href="/speaking" className="transition hover:text-accent">
              Speaking &amp; Lectures
            </Link>
            <Link href="/contact" className="transition hover:text-accent">
              Contact the Judge
            </Link>
            <Link href="/search" className="transition hover:text-accent">
              Search the Archive
            </Link>
            <Link
              href="/account"
              className="text-accent transition hover:underline"
            >
              Member Account Portal →
            </Link>
          </nav>
        </div>

        {/* Col 3: Publications & Key Works */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Featured Monographs
          </p>
          <nav
            className="mt-4 flex flex-col space-y-2 text-xs text-muted"
            aria-label="Monographs navigation"
          >
            <Link href="/books" className="hover:text-accent transition">
              To The Hague from Nabinene
            </Link>
            <Link href="/books" className="hover:text-accent transition">
              Eddundiro Lya Bawansolo
            </Link>
            <Link href="/books" className="hover:text-accent transition">
              Eddembe Lyaffe (Our Rights)
            </Link>
            <Link href="/books" className="hover:text-accent transition">
              English - Luganda Law Dictionary
            </Link>
            <Link href="/books" className="hover:text-accent transition">
              Constitutional Law in Botswana
            </Link>
            <Link href="/books" className="hover:text-accent transition">
              Criminal Law in Uganda
            </Link>
            <Link
              href="/books"
              className="text-accent font-medium transition hover:underline pt-1"
            >
              Browse all {books.length} publications →
            </Link>
          </nav>
        </div>

        {/* Col 4: Contact & Inquiries */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Correspondence
          </p>
          <p className="mt-4 text-xs text-muted">
            For academic inquiries, speaking invitations, or book
            collaborations:
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-block font-serif text-base sm:text-lg text-ink underline decoration-accent underline-offset-4 transition hover:text-accent"
          >
            Email Judge Nsereko →
          </Link>
          <p className="mt-1 text-[11px] text-faint">
            (Verified member sign-in required)
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs text-muted">
            <Link href="/contact" className="hover:text-accent transition">
              Send a message via web form →
            </Link>
            <Link href="/speaking" className="hover:text-accent transition">
              Submit a speaking inquiry →
            </Link>
            <Link
              href="/auth/sign-in"
              className="hover:text-accent transition"
            >
              Sign in to member portal →
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line-grey-strong pt-8 text-xs text-muted sm:flex-row">
        <p>
          © {currentYear} Judge Daniel David Ntanda Nsereko. All rights
          reserved.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="#about" className="hover:text-ink transition">
            Back to top ↑
          </Link>
          <Link href="/account" className="hover:text-ink transition">
            Account Portal
          </Link>
          <Link href="/search" className="hover:text-ink transition">
            Search
          </Link>
        </div>
      </div>
    </footer>
  );
}
