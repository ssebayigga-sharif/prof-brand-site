import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <span className="footer-kicker">Start a conversation</span>
        <a href="mailto:nserekoddn@gmail.com">nserekoddn@gmail.com</a>
      </div>
      <nav className="footer-nav" aria-label="Footer navigation">
        <span className="footer-kicker">Explore</span>
        <Link href="/">Home</Link>
        <Link href="/#about">About</Link>
        <Link href="/books">Books</Link>
        <Link href="/#writing">Writing</Link>
        <Link href="/speaking">Speaking</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/search">Search</Link>
      </nav>
      <p>© 2026 David Daniel Nsereko Ntanda.</p>
      <div className="footer-links">
        <Link href="/">Back to top ↑</Link>
        <Link href="/speaking">Speaking inquiries</Link>
      </div>
    </footer>
  );
}
