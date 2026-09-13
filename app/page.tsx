export default function Home() {
  return (
    <main id="top">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-intro">
          <p className="eyebrow">Ideas for a more generous future</p>
          <h1 id="hero-title">
            Knowledge should <em>move</em> us.
          </h1>
          <p className="hero-summary">
            Prof. David Daniel Nsereko is a professor, cultural critic, and
            bestselling author exploring how we build better worlds together.
          </p>
          <a className="text-link" href="/books">
            Explore the work <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div
          className="hero-portrait"
          role="img"
          aria-label="Abstract portrait in warm red and blue tones"
        >
          <div className="portrait-sun" />
          <div className="portrait-figure" />
          <div className="portrait-shadow" />
          <span>01 / 04</span>
        </div>
      </section>

      <section className="intro-band" id="about" aria-labelledby="about-title">
        <p className="section-index">01 — About</p>
        <div>
          <h2 id="about-title">A life spent asking better questions.</h2>
          <p>
            From the lecture hall to the page, Prof. Nsereko makes complex ideas
            feel close to home. His work sits at the intersection of history,
            culture, and the choices that shape our shared lives.
          </p>
        </div>
      </section>

      <section
        className="books-section"
        id="books"
        aria-labelledby="books-title"
      >
        <div className="section-heading">
          <p className="section-index">02 — Selected books</p>
          <h2 id="books-title">On the shelf</h2>
        </div>
        <div className="book-list">
          <article className="book-item">
            <span className="book-year">2024</span>
            <div className="book-cover book-cover-red">
              <span>
                The work of
                <br />
                becoming
              </span>
            </div>
            <div>
              <h3>The Work of Becoming</h3>
              <p>On identity, change, and the stories we inherit.</p>
            </div>
            <span className="book-arrow" aria-hidden="true">
              ↗
            </span>
          </article>
          <article className="book-item">
            <span className="book-year">2021</span>
            <div className="book-cover book-cover-blue">
              <span>
                Small acts
                <br />
                of courage
              </span>
            </div>
            <div>
              <h3>Small Acts of Courage</h3>
              <p>Dispatches from a life of paying attention.</p>
            </div>
            <span className="book-arrow" aria-hidden="true">
              ↗
            </span>
          </article>
        </div>
      </section>

      <section
        className="quote-section"
        id="writing"
        aria-label="Featured quote"
      >
        <span className="quote-mark">“</span>
        <blockquote>
          We do not find our way forward alone. We make it, together.
        </blockquote>
        <cite>— The Work of Becoming</cite>
      </section>
    </main>
  );
}
