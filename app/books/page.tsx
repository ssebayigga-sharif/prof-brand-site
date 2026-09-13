export const metadata = {
  title: "Books | David Daniel Nsereko",
  description: "Books by professor and author David Daniel Nsereko.",
};

const books = [
  {
    year: "2024",
    title: "The Work of Becoming",
    description: "On identity, change, and the stories we inherit.",
    coverClass: "book-cover-red",
    cover: ["The work of", "becoming"],
  },
  {
    year: "2021",
    title: "Small Acts of Courage",
    description: "Dispatches from a life of paying attention.",
    coverClass: "book-cover-blue",
    cover: ["Small acts", "of courage"],
  },
];

export default function BooksPage() {
  return (
    <main className="inner-page" aria-labelledby="books-page-title">
      <section className="inner-page-hero">
        <p className="eyebrow">02 — Selected books</p>
        <h1 id="books-page-title">On the shelf</h1>
        <p className="hero-summary">
          Books about becoming, belonging, and the small choices that shape a
          life in public.
        </p>
      </section>
      <section
        className="books-section books-page-list"
        aria-label="Published books"
      >
        <div className="book-list">
          {books.map((book) => (
            <article className="book-item" key={book.title}>
              <span className="book-year">{book.year}</span>
              <div className={`book-cover ${book.coverClass}`}>
                <span>
                  {book.cover[0]}
                  <br />
                  {book.cover[1]}
                </span>
              </div>
              <div>
                <h2>{book.title}</h2>
                <p>{book.description}</p>
              </div>
              <span className="book-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>
      <section
        className="quote-section books-page-quote"
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
