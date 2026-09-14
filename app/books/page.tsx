import type { Metadata } from "next";
import BooksCatalogue from "./books-catalogue";

export const metadata: Metadata = {
  title: "Books | David Daniel Nsereko",
  description:
    "Books by Professor Daniel David Ntanda Nsereko, including works on constitutional and criminal law.",
};

export default function BooksPage() {
  return <BooksCatalogue />;
}
