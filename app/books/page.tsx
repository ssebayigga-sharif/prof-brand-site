import type { Metadata } from "next";
import BooksCatalogue from "./books-catalogue";

export const metadata: Metadata = {
  title: "Books & Monographs | Judge Daniel David Ntanda Nsereko",
  description:
    "Explore the complete published library of Judge Daniel David Ntanda Nsereko: constitutional law treatises, criminal procedure casebooks, memoirs, and Luganda translations.",
};

export default function BooksPage() {
  return <BooksCatalogue />;
}
