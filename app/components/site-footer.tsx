import Link from "next/link";
import { books } from "../lib/books";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e3e4e8] bg-[#e4e6e9] px-6 py-16 text-[#17201f] sm:px-10 lg:px-[5.5vw] lg:py-20">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Col 1: Brand & Bio */}
        <div className="lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c64e38]">
            Public Archive
          </p>
          <h2 className="mt-4 font-serif text-2xl font-normal leading-tight text-[#17201f]">
            Judge Daniel David Ntanda Nsereko
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-[#66706b]">
            International jurist, former Judge at the ICC and Special Tribunal
            for Lebanon, and Professor of Law with over 50 years of legal
            service.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5 text-[10px] text-[#66706b]">
            <span className="rounded bg-white px-2 py-0.5 border border-[#d9d1c4]">
              ICC Appeals
            </span>
            <span className="rounded bg-white px-2 py-0.5 border border-[#d9d1c4]">
              STL Hague
            </span>
            <span className="rounded bg-white px-2 py-0.5 border border-[#d9d1c4]">
              Univ. of Botswana
            </span>
            <span className="rounded bg-white px-2 py-0.5 border border-[#d9d1c4]">
              Makerere
            </span>
          </div>
        </div>

        {/* Col 2: Navigation (All Primary Navlinks) */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c64e38]">
            Explore
          </p>
          <nav
            className="mt-4 flex flex-col space-y-2.5 text-xs text-[#66706b]"
            aria-label="Footer navigation"
          >
            <Link href="/" className="transition hover:text-[#c64e38]">
              Home / Overview
            </Link>
            <Link href="/career" className="transition hover:text-[#c64e38]">
              Full Career &amp; CV
            </Link>
            <Link href="/books" className="transition hover:text-[#c64e38]">
              Books &amp; Monographs
            </Link>
            <Link href="/writing" className="transition hover:text-[#c64e38]">
              Writing &amp; Scholarship
            </Link>
            <Link href="/speaking" className="transition hover:text-[#c64e38]">
              Speaking &amp; Lectures
            </Link>
            <Link href="/contact" className="transition hover:text-[#c64e38]">
              Contact the Judge
            </Link>
            <Link href="/search" className="transition hover:text-[#c64e38]">
              Search the Archive
            </Link>
            <Link
              href="/account"
              className="text-[#c64e38] transition hover:underline"
            >
              Member Account Portal →
            </Link>
          </nav>
        </div>

        {/* Col 3: Publications & Key Works */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c64e38]">
            Featured Monographs
          </p>
          <nav
            className="mt-4 flex flex-col space-y-2 text-xs text-[#66706b]"
            aria-label="Monographs navigation"
          >
            <Link href="/books" className="hover:text-[#c64e38] transition">
              To The Hague from Nabinene
            </Link>
            <Link href="/books" className="hover:text-[#c64e38] transition">
              Eddundiro Lya Bawansolo
            </Link>
            <Link href="/books" className="hover:text-[#c64e38] transition">
              Eddembe Lyaffe (Our Rights)
            </Link>
            <Link href="/books" className="hover:text-[#c64e38] transition">
              English - Luganda Law Dictionary
            </Link>
            <Link href="/books" className="hover:text-[#c64e38] transition">
              Constitutional Law in Botswana
            </Link>
            <Link href="/books" className="hover:text-[#c64e38] transition">
              Criminal Law in Uganda
            </Link>
            <Link
              href="/books"
              className="text-[#c64e38] font-medium transition hover:underline pt-1"
            >
              Browse all {books.length} publications →
            </Link>
          </nav>
        </div>

        {/* Col 4: Contact & Inquiries */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c64e38]">
            Correspondence
          </p>
          <p className="mt-4 text-xs text-[#66706b]">
            For academic inquiries, speaking invitations, or book
            collaborations:
          </p>
          <Link
            href="/contact"
            className="mt-3 inline-block font-serif text-base sm:text-lg text-[#17201f] underline decoration-[#c64e38] underline-offset-4 transition hover:text-[#c64e38]"
          >
            Email Judge Nsereko →
          </Link>
          <p className="mt-1 text-[11px] text-[#9aa19d]">
            (Verified member sign-in required)
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs text-[#66706b]">
            <Link href="/contact" className="hover:text-[#c64e38] transition">
              Send a message via web form →
            </Link>
            <Link href="/speaking" className="hover:text-[#c64e38] transition">
              Submit a speaking inquiry →
            </Link>
            <Link
              href="/auth/sign-in"
              className="hover:text-[#c64e38] transition"
            >
              Sign in to member portal →
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#d3d4d8] pt-8 text-xs text-[#66706b] sm:flex-row">
        <p>
          © {currentYear} Judge Daniel David Ntanda Nsereko. All rights
          reserved.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="#about" className="hover:text-[#17201f] transition">
            Back to top ↑
          </Link>
          <Link href="/account" className="hover:text-[#17201f] transition">
            Account Portal
          </Link>
          <Link href="/search" className="hover:text-[#17201f] transition">
            Search
          </Link>
        </div>
      </div>
    </footer>
  );
}
