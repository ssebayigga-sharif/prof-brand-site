import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <span className="footer-kicker">Start a conversation</span>
        <a href="mailto:hello@amaraokafor.com">hello@amaraokafor.com</a>
      </div>
      <p>© 2026 Amara Okafor</p>
      <div className="footer-links">
        <Link href="/">Back to top ↑</Link>
        <a href="/contact#speaking">Speaking inquiries</a>
      </div>
    </footer>
  );
}
