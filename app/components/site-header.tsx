"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClient } from "../lib/supabase/client";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Career & CV", href: "/career" },
  { label: "Books", href: "/books" },
  { label: "Writing", href: "/writing" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const pathname = usePathname();

  // Check auth state for header display
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user?.email) {
        setUserEmail(data.user.email);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user?.email ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex h-20 w-full items-center justify-between border-b border-[#f5ecdd]/15 bg-[#17201f]/95 px-6 backdrop-blur-md transition-all sm:px-10 lg:px-[5.5vw]">
        {/* Brand */}
        <Link
          className="group flex items-center gap-3.5 focus-visible:outline-none"
          href="/"
          aria-label="Judge Daniel David Ntanda Nsereko"
        >
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#e6c66a]/50 bg-[#24312f] shadow-sm transition duration-300 group-hover:border-[#e6c66a]">
            <Image
              src="/prof.png"
              alt="Judge Nsereko"
              fill
              className="object-cover object-top"
              sizes="44px"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base font-normal tracking-tight text-[#fff8ed] transition group-hover:text-[#e6c66a] sm:text-lg">
              Daniel David Ntanda Nsereko
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#a9b8b3]">
              Judge · Professor · Author
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-6 xl:gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith("/#")
                ? false
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-semibold uppercase tracking-[0.12em] transition duration-200 ${
                  isActive
                    ? "text-[#e6c66a]"
                    : "text-[#d8e0dc] hover:text-[#e6c66a]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Header Search & Account */}
        <div className="hidden items-center gap-4 lg:flex">
          <form
            role="search"
            action="/search"
            method="get"
            className="flex items-center rounded-full border border-[#a9b8b3]/30 bg-[#24312f]/80 px-3.5 py-1.5 shadow-inner transition focus-within:border-[#e6c66a] focus-within:ring-2 focus-within:ring-[#e6c66a]/20"
          >
            <label htmlFor="desktop-site-search" className="sr-only">
              Search the site
            </label>
            <input
              id="desktop-site-search"
              name="q"
              type="search"
              placeholder="Search archive..."
              className="w-28 bg-transparent text-xs text-[#fff8ed] outline-none placeholder:text-[#a9b8b3] xl:w-36"
            />
            <button
              type="submit"
              aria-label="Submit search"
              className="ml-1 text-xs text-[#e6c66a] transition hover:translate-x-0.5 hover:text-[#f0d882]"
            >
              ↗
            </button>
          </form>

          {userEmail ? (
            <Link
              href="/account"
              className="rounded-full border border-[#e6c66a]/50 bg-[#e6c66a]/10 px-3.5 py-1.5 text-xs font-semibold text-[#e6c66a] transition hover:bg-[#e6c66a] hover:text-[#17201f]"
            >
              Account
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/auth/sign-in"
                className="text-xs font-medium text-[#d8e0dc] transition hover:text-[#e6c66a]"
              >
                Sign in
              </Link>
              <Link
                href="/auth/sign-up"
                className="rounded-full border border-[#e6c66a] px-3.5 py-1.5 text-xs font-semibold text-[#e6c66a] transition hover:bg-[#e6c66a] hover:text-[#17201f]"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu trigger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[#a9b8b3]/30 text-[#fff8ed] transition hover:border-[#e6c66a] hover:text-[#e6c66a] lg:hidden"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <span className="text-xl leading-none">✕</span>
          ) : (
            <span className="text-xl leading-none">☰</span>
          )}
        </button>
      </header>

      {/* Mobile Drawer Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        id="mobile-navigation"
        className={`fixed top-20 right-0 z-50 flex h-[calc(100dvh-5rem)] w-full max-w-sm flex-col justify-between border-l border-[#a9b8b3]/20 bg-[#16404d] p-6 text-[#fff8ed] shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          <form
            role="search"
            action="/search"
            method="get"
            className="flex items-center rounded-full border border-[#a9b8b3]/30 bg-[#24312f] px-4 py-2"
          >
            <label htmlFor="mobile-site-search" className="sr-only">
              Search the site
            </label>
            <input
              id="mobile-site-search"
              name="q"
              type="search"
              placeholder="Search books, articles, cases..."
              className="w-full bg-transparent text-sm text-[#fff8ed] outline-none placeholder:text-[#a9b8b3]"
            />
            <button
              type="submit"
              aria-label="Search"
              className="text-sm font-semibold text-[#e6c66a]"
            >
              ↗
            </button>
          </form>

          <nav className="flex flex-col divide-y divide-[#a9b8b3]/20" aria-label="Mobile Navigation">
            {navigation.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-3.5 font-serif text-2xl font-normal transition hover:text-[#e6c66a]"
              >
                <span>{item.label}</span>
                <span className="font-sans text-xs font-semibold text-[#e6c66a]">
                  0{idx + 1}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-[#a9b8b3]/20 pt-6">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            {userEmail ? (
              <Link
                href="/account"
                onClick={() => setMenuOpen(false)}
                className="font-medium text-[#e6c66a]"
              >
                My Account ({userEmail.split("@")[0]})
              </Link>
            ) : (
              <>
                <Link
                  href="/auth/sign-in"
                  onClick={() => setMenuOpen(false)}
                  className="text-[#d8e0dc] hover:text-[#e6c66a]"
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/sign-up"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border border-[#e6c66a] px-3 py-1 text-xs font-semibold text-[#e6c66a]"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
          <p className="mt-4 text-xs text-[#a9b8b3]">
            Judge Daniel David Ntanda Nsereko · Public Archive
          </p>
        </div>
      </div>
    </>
  );
}
