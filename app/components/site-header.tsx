"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Books", href: "/books" },
  { label: "Writing", href: "/writing" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Dr. David Daniel Nsereko">
          <Image
            className={`menu-icon ${menuOpen ? "is-open" : ""}`}
            src="/prof.png"
            alt=""
            width={50}
            height={50}
          />
        </Link>
        <span className="brand-copy">
          <strong>David Daniel Nsereko</strong>
          <span>Professor, author &amp; Judge</span>
        </span>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <form
          className="header-search"
          role="search"
          action="/search"
          method="get"
        >
          <label htmlFor="site-search">Search the site</label>
          <input id="site-search" name="q" type="search" placeholder="Search" />
          <button type="submit" aria-label="Submit search">
            ↗
          </button>
        </form>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-button-label">Menu</span>
          <span className="menu-glyph" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </header>

      <div
        className={`mobile-drawer ${menuOpen ? "is-open" : ""}`}
        id="mobile-navigation"
      >
        <form
          className="drawer-search"
          role="search"
          action="/search"
          method="get"
        >
          <label htmlFor="mobile-site-search">Search the site</label>
          <input
            id="mobile-site-search"
            name="q"
            type="search"
            placeholder="Search the archive"
          />
          <button type="submit" aria-label="Submit search">
            ↗
          </button>
        </form>
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <p>Ideas in public, books in hand.</p>
      </div>
    </>
  );
}
