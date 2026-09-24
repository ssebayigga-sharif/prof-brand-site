"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auth subscription
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user?.email) {
        setUserEmail(data.user.email);
        setDisplayName(
          data.user.user_metadata?.full_name || data.user.email.split("@")[0],
        );
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user?.email ?? null);
      setDisplayName(
        session?.user?.user_metadata?.full_name ||
          (session?.user?.email ? session.user.email.split("@")[0] : null),
      );
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUserDropdownOpen(false);
    router.push("/");
    router.refresh();
  };

  const userInitial = displayName
    ? displayName.charAt(0).toUpperCase()
    : userEmail
      ? userEmail.charAt(0).toUpperCase()
      : "U";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex h-20 w-full items-center justify-between border-b border-[#e3e4e8] bg-white px-6 backdrop-blur-md transition-all sm:px-10 lg:px-[5.5vw]">
        {/* Brand */}
        <Link
          className="group flex items-center gap-3.5 focus-visible:outline-none"
          href="/"
          aria-label="Judge Daniel David Ntanda Nsereko"
        >
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#e3e4e8] bg-[#f3f4f6] shadow-sm transition duration-300 group-hover:border-[#c64e38]">
            <Image
              src="/prof.png"
              alt="Judge Nsereko"
              fill
              className="object-cover object-top"
              sizes="44px"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-base font-normal tracking-tight text-[#17201f] transition group-hover:text-[#c64e38] sm:text-lg">
              Daniel David Ntanda Nsereko
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#9aa19d]">
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
                    ? "text-[#c64e38]"
                    : "text-[#66706b] hover:text-[#c64e38]"
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
            className="flex items-center rounded-full border border-[#d9d1c4] bg-[#f3f4f6] px-3.5 py-1.5 shadow-inner transition focus-within:border-[#c64e38] focus-within:ring-2 focus-within:ring-[#c64e38]/20"
          >
            <label htmlFor="desktop-site-search" className="sr-only">
              Search the site
            </label>
            <input
              id="desktop-site-search"
              name="q"
              type="search"
              placeholder="Search archive..."
              className="w-28 bg-transparent text-xs text-[#17201f] outline-none placeholder:text-[#9aa19d] xl:w-36"
            />
            <button
              type="submit"
              aria-label="Submit search"
              className="ml-1 text-xs text-[#c64e38] transition hover:translate-x-0.5 hover:text-[#a83d2c]"
            >
              ↗
            </button>
          </form>

          {/* Account Icon / Dropdown */}
          {userEmail ? (
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setUserDropdownOpen(true)}
              onMouseLeave={() => setUserDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setUserDropdownOpen((open) => !open)}
                aria-expanded={userDropdownOpen}
                aria-haspopup="true"
                aria-label="Account details"
                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d1c4] bg-[#f3f4f6] text-xs font-bold text-[#c64e38] shadow-sm transition hover:border-[#c64e38] hover:bg-[#c64e38] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c64e38] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {userInitial}
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              </button>

              {/* Account Dropdown Card */}
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-xl border border-[#d9d1c4] bg-white p-4 text-[#17201f] shadow-xl z-50">
                  <div className="border-b border-[#d9d1c4] pb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6c66a] text-sm font-bold text-[#17201f]">
                        {userInitial}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-semibold text-[#17201f]">
                          {displayName || "Member"}
                        </p>
                        <p className="truncate text-[11px] text-[#9aa19d]">
                          {userEmail}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2.5 flex items-center gap-1 text-[10px] font-medium text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Authenticated Member
                    </div>
                  </div>

                  <div className="py-2 space-y-1">
                    <Link
                      href="/account"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center justify-between rounded-md px-3 py-2 text-xs text-[#66706b] transition hover:bg-[#faf6ef] hover:text-[#c64e38]"
                    >
                      <span>Account Portal</span>
                      <span>↗</span>
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center justify-between rounded-md px-3 py-2 text-xs text-[#66706b] transition hover:bg-[#faf6ef] hover:text-[#c64e38]"
                    >
                      <span>Direct Message Judge</span>
                      <span>↗</span>
                    </Link>
                  </div>

                  <div className="border-t border-[#d9d1c4] pt-2">
                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs text-red-700 transition hover:bg-red-50 hover:text-red-800"
                    >
                      <span>Sign out</span>
                      <span>⎋</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/auth/sign-in"
                className="text-xs font-medium text-[#66706b] transition hover:text-[#c64e38]"
              >
                Sign in
              </Link>
              <Link
                href="/auth/sign-up"
                className="rounded-full border border-[#17201f] px-3.5 py-1.5 text-xs font-semibold text-[#17201f] transition hover:bg-[#17201f] hover:text-white"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu trigger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[#d9d1c4] text-[#17201f] transition hover:border-[#c64e38] hover:text-[#c64e38] lg:hidden"
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
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed top-20 right-0 z-50 flex h-[calc(100dvh-5rem)] w-full max-w-sm flex-col justify-between border-l border-[#d9d1c4] bg-white p-6 text-[#17201f] shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "visible translate-x-0"
            : "invisible pointer-events-none translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          <form
            role="search"
            action="/search"
            method="get"
            className="flex items-center rounded-full border border-[#d9d1c4] bg-[#f3f4f6] px-4 py-2"
          >
            <label htmlFor="mobile-site-search" className="sr-only">
              Search the site
            </label>
            <input
              id="mobile-site-search"
              name="q"
              type="search"
              placeholder="Search books, articles, cases..."
              className="w-full bg-transparent text-sm text-[#17201f] outline-none placeholder:text-[#9aa19d]"
            />
            <button
              type="submit"
              aria-label="Search"
              className="text-sm font-semibold text-[#c64e38]"
            >
              ↗
            </button>
          </form>

          <nav
            className="flex flex-col divide-y divide-[#d9d1c4]"
            aria-label="Mobile Navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-3.5 font-serif text-2xl font-normal transition hover:text-[#c64e38]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-[#d9d1c4] pt-6">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            {userEmail ? (
              <div className="flex w-full items-center justify-between">
                <Link
                  href="/account"
                  onClick={() => setMenuOpen(false)}
                  className="font-medium text-[#c64e38]"
                >
                  My Account ({userEmail.split("@")[0]})
                </Link>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="text-xs text-red-700 underline"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/auth/sign-in"
                  onClick={() => setMenuOpen(false)}
                  className="text-[#66706b] hover:text-[#c64e38]"
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/sign-up"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border border-[#c64e38] px-3 py-1 text-xs font-semibold text-[#c64e38]"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
          <p className="mt-4 text-xs text-[#9aa19d]">
            Judge Daniel David Ntanda Nsereko · Public Archive
          </p>
        </div>
      </div>
    </>
  );
}
