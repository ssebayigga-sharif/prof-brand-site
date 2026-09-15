import Link from "next/link";
import { PERSONAL_DATA } from "../lib/data/cv-data";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#f5ecdd]/10 bg-[#16404d] px-6 py-16 text-[#fff8ed] sm:px-10 lg:px-[5.5vw] lg:py-20">
      <div className="grid gap-12 lg:grid-cols-4">
        {/* Col 1: Brand & Bio */}
        <div className="lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e6c66a]">
            Public Archive
          </p>
          <h2 className="mt-4 font-serif text-2xl font-normal leading-tight text-[#fff8ed]">
            Judge Daniel David Ntanda Nsereko
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-[#b8c5c1]">
            International jurist, former Judge at the ICC and Special Tribunal for Lebanon, and Professor of Law with over 50 years of legal service.
          </p>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e6c66a]">
            Explore
          </p>
          <nav className="mt-4 flex flex-col space-y-2.5 text-xs text-[#d8e0dc]" aria-label="Footer navigation">
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
            <Link href="/search" className="transition hover:text-[#e6c66a]">
              Search the Archive
            </Link>
          </nav>
        </div>

        {/* Col 3: Research & Scholarship */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e6c66a]">
            Key Disciplines
          </p>
          <ul className="mt-4 space-y-2 text-xs text-[#b8c5c1]">
            <li>International Criminal Law</li>
            <li>Admissibility &amp; Complementarity</li>
            <li>Victims of Crime &amp; Abuse of Power</li>
            <li>Constitutional Law in Botswana &amp; Uganda</li>
            <li>Indigenous African Languages &amp; Law</li>
            <li>Crime of Aggression</li>
          </ul>
        </div>

        {/* Col 4: Contact & Inquiries */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e6c66a]">
            Correspondence
          </p>
          <p className="mt-4 text-xs text-[#b8c5c1]">
            For academic inquiries, speaking invitations, or book collaborations:
          </p>
          <a
            href={`mailto:${PERSONAL_DATA.email}`}
            className="mt-3 inline-block font-serif text-lg text-[#fff8ed] underline decoration-[#e6c66a] underline-offset-4 transition hover:text-[#e6c66a]"
          >
            {PERSONAL_DATA.email}
          </a>
          <div className="mt-6 flex flex-col gap-2 text-xs text-[#d8e0dc]">
            <Link href="/contact" className="hover:text-[#e6c66a]">
              Send a message via web form →
            </Link>
            <Link href="/speaking" className="hover:text-[#e6c66a]">
              Submit a speaking inquiry →
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#fff8ed]/10 pt-8 text-xs text-[#a9b8b3] sm:flex-row">
        <p>© {new Date().getFullYear()} Judge Daniel David Ntanda Nsereko. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#about" className="hover:text-[#fff8ed]">
            Back to top ↑
          </Link>
          <Link href="/account" className="hover:text-[#fff8ed]">
            Account Portal
          </Link>
        </div>
      </div>
    </footer>
  );
}
