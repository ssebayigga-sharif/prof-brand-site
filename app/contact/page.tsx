export const metadata = {
  title: "Contact | David Daniel Nsereko",
  description: "Contact professor and author David Daniel Nsereko.",
};

export default function ContactPage() {
  return (
    <main className="inner-page" aria-labelledby="contact-page-title">
      <section className="inner-page-hero contact-hero">
        <p className="eyebrow">05 — Contact</p>
        <h1 id="contact-page-title">Let&apos;s start a conversation.</h1>
        <p className="hero-summary">
          For speaking invitations, teaching collaborations, or questions about
          the books, get in touch.
        </p>
      </section>
      <section className="contact-grid">
        <div>
          <p className="section-index">General inquiries</p>
          <a className="contact-email" href="mailto:hello@amaraokafor.com">
            hello@amaraokafor.com
          </a>
        </div>
        <div id="speaking">
          <p className="section-index">Speaking inquiries</p>
          <p className="contact-copy">
            David speaks on culture, education, public life, and the work of
            imagining a more generous future.
          </p>
          <a className="text-link" href="mailto:speaking@amaraokafor.com">
            Invite David to speak <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
