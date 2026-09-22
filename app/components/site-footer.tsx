import Link from "next/link";
import { books } from "../lib/books";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#f5ecdd]/10 bg-[#16404d] px-6 py-16 text-[#fff8ed] sm:px-10 lg:px-[5.5vw] lg:py-20">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Col 1: Brand & Bio */}
        <div className="lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e6c66a]">
            Public Archive
          </p>
          <h2 className="mt-4 font-serif text-2xl font-normal leading-tight text-[#fff8ed]">
            Judge Daniel David Ntanda Nsereko
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-[#b8c5c1]">
            International jurist, former Judge at the ICC and Special Tribunal
            for Lebanon, and Professor of Law with over 50 years of legal
            service.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5 text-[10px] text-[#d8e0dc]">
            <span className="rounded bg-[#1e4e5d] px-2 py-0.5 border border-white/10">
              ICC Appeals
            </span>
            <span className="rounded bg-[#1e4e5d] px-2 py-0.5 border border-white/10">
              STL Hague
            </span>
            <span className="rounded bg-[#1e4e5d] px-2 py-0.5 border border-white/10">
              Univ. of Botswana
            </span>
            <span className="rounded bg-[#1e4e5d] px-2 py-0.5 border border-white/10">
              Makerere
            </span>
          </div>
        </div>

        {/* Col 2: Navigation (All Primary Navlinks) */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e6c66a]">
            Explore
          </p>
          <nav
            className="mt-4 flex flex-col space-y-2.5 text-xs text-[#d8e0dc]"
            aria-label="Footer navigation"
          >
            <Link href="/" className="transition hover:text-[#e6c66a]">
              Home / Overview
            </Link>
            <Link href="/career" className="transition hover:text-[#e6c66a]">
              Full Career &amp; CV
            </Link>
            <Link href="/books" className="transition hover:text-[#e6c66a]">
              Books &amp; Monographs
            </Link>
            <Link href="/writing" className="transition hover:text-[#e6c66a]">
              Writing &amp; Scholarship
            </Link>
            <Link href="/speaking" className="transition hover:text-[#e6c66a]">
              Speaking &amp; Lectures
            </Link>
            <Link href="/contact" className="transition hover:text-[#e6c66a]">
              Contact the Judge
            </Link>
            <Link href="/search" className="transition hover:text-[#e6c66a]">
              Search the Archive
            </Link>
            <Link
              href="/account"
              className="text-[#e6c66a] transition hover:underline"
            >
              Member Account Portal →
            </Link>
          </nav>
        </div>

        {/* Col 3: Publications & Key Works */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e6c66a]">
            Featured Monographs
          </p>
          <nav
            className="mt-4 flex flex-col space-y-2 text-xs text-[#b8c5c1]"
            aria-label="Monographs navigation"
          >
            <Link href="/books" className="hover:text-[#e6c66a] transition">
              To The Hague from Nabinene
            </Link>
            <Link href="/books" className="hover:text-[#e6c66a] transition">
              Eddundiro Lya Bawansolo
            </Link>
            <Link href="/books" className="hover:text-[#e6c66a] transition">
              Eddembe Lyaffe (Our Rights)
            </Link>
            <Link href="/books" className="hover:text-[#e6c66a] transition">
              English - Luganda Law Dictionary
            </Link>
            <Link href="/books" className="hover:text-[#e6c66a] transition">
              Constitutional Law in Botswana
            </Link>
            <Link href="/books" className="hover:text-[#e6c66a] transition">
              Criminal Law in Uganda
            </Link>
            <Link
              href="/books"
              className="text-[#e6c66a] font-medium transition hover:underline pt-1"
            >
              Browse all {books.length} publications →
            </Link>
          </nav>
        </div>

        {/* Col 4: Contact & Inquiries */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e6c66a]">
            Correspondence
          </p>
          <p className="mt-4 text-xs text-[#b8c5c1]">
            For academic inquiries, speaking invitations, or book
            collaborations:
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-block font-serif text-base sm:text-lg text-[#fff8ed] underline decoration-[#e6c66a] underline-offset-4 transition hover:text-[#e6c66a]"
          >
            Email Judge Nsereko →
          </Link>
          <p className="mt-1 text-[11px] text-[#8ea49d]">
            (Verified member sign-in required)
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs text-[#d8e0dc]">
            <Link href="/contact" className="hover:text-[#e6c66a] transition">
              Send a message via web form →
            </Link>
            <Link href="/speaking" className="hover:text-[#e6c66a] transition">
              Submit a speaking inquiry →
            </Link>
            <Link
              href="/auth/sign-in"
              className="hover:text-[#e6c66a] transition"
            >
              Sign in to member portal →
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#fff8ed]/10 pt-8 text-xs text-[#a9b8b3] sm:flex-row">
        <p>
          © {currentYear} Judge Daniel David Ntanda Nsereko. All rights
          reserved.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="#about" className="hover:text-[#fff8ed] transition">
            Back to top ↑
          </Link>
          <Link href="/account" className="hover:text-[#fff8ed] transition">
            Account Portal
          </Link>
          <Link href="/search" className="hover:text-[#fff8ed] transition">
            Search
          </Link>
        </div>
      </div>
    </footer>
  );
}
