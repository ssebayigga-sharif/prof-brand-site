"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { books } from "@/app/lib/books";
import {
  CHAPTERS_IN_BOOKS,
  JOURNAL_ARTICLES,
  CONFERENCE_PAPERS,
  BOOK_REVIEWS,
  ALL_PUBLICATIONS,
  type PublicationItem,
} from "@/app/lib/data/publications";
import { PublicationItemCard } from "@/app/components/ui/publication-item";

type TabType = "all" | "books" | "articles" | "chapters" | "conferences";

const topics = [
  "All Topics",
  "International Criminal Law",
  "Human Rights",
  "Constitutional Law",
  "Victims & Justice",
  "African Jurisprudence",
];

export default function WritingExplorer() {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPublications = useMemo(() => {
    let list: PublicationItem[] = [];

    if (activeTab === "all") {
      list = ALL_PUBLICATIONS;
    } else if (activeTab === "articles") {
      list = JOURNAL_ARTICLES;
    } else if (activeTab === "chapters") {
      list = CHAPTERS_IN_BOOKS;
    } else if (activeTab === "conferences") {
      list = [...CONFERENCE_PAPERS, ...BOOK_REVIEWS];
    }

    if (selectedTopic !== "All Topics") {
      list = list.filter((item) => item.topic === selectedTopic);
    }

    const q = searchQuery.trim().toLowerCase();
    if (!q) return list;

    return list.filter((item) =>
      [item.title, item.source, item.citation, item.year, item.coauthor ?? ""].some(
        (val) => val.toLowerCase().includes(q)
      )
    );
  }, [activeTab, selectedTopic, searchQuery]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 lg:px-[5.5vw]">
      {/* Controls Bar: Tabs, Search, Topic Filter */}
      <div className="flex flex-col gap-6 border-b border-line pb-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: `All Publications (${ALL_PUBLICATIONS.length})` },
            { id: "books", label: `Books & Monographs (${books.length})` },
            { id: "articles", label: `Journal Articles (${JOURNAL_ARTICLES.length})` },
            { id: "chapters", label: `Book Chapters (${CHAPTERS_IN_BOOKS.length})` },
            { id: "conferences", label: `Conferences & Lectures (${CONFERENCE_PAPERS.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                activeTab === tab.id
                  ? "bg-ink text-inverse shadow-sm"
                  : "border border-line bg-surface text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search & Topic Filters */}
        <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
          <div className="relative">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by title, journal, topic, year, or keyword..."
              className="w-full rounded-lg border border-line bg-panel px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-3 text-xs text-muted hover:text-ink"
              >
                Clear ✕
              </button>
            )}
          </div>

          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="rounded-lg border border-line bg-panel px-4 py-3 text-xs font-medium text-ink outline-none transition focus:border-accent"
          >
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Content Rendering based on Tab */}
      {activeTab === "books" ? (
        <div className="mt-10">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-serif text-2xl text-ink">
              Books, Monographs &amp; Lexicons ({books.length})
            </h3>
            <Link
              href="/books"
              className="text-xs font-semibold uppercase tracking-wider text-accent hover:underline"
            >
              View Catalogue Cards →
            </Link>
          </div>
          <div className="divide-y divide-line">
            {books.map((b) => (
              <article key={b.id} className="py-6">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="font-semibold text-accent">{b.year}</span>
                  <span className="text-faint-2">·</span>
                  <span className="rounded-full bg-navy/10 px-2.5 py-0.5 text-[10px] font-medium uppercase text-navy">
                    {b.category}
                  </span>
                  {b.edition && (
                    <span className="text-xs italic text-muted">({b.edition})</span>
                  )}
                </div>
                <h4 className="mt-2 font-serif text-2xl text-ink">
                  {b.title}
                </h4>
                {b.coauthor && (
                  <p className="mt-1 text-xs text-muted">{b.coauthor}</p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {b.description}
                </p>
                <div className="mt-2 text-xs text-faint-2">
                  {b.publisher} {b.isbn && `· ISBN: ${b.isbn}`} {b.pages && `· ${b.pages}`}
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8">
          <div className="mb-6 flex items-center justify-between text-xs text-muted">
            <span>
              Showing {filteredPublications.length} publication{filteredPublications.length === 1 ? "" : "s"}
              {searchQuery && ` matching "${searchQuery}"`}
              {selectedTopic !== "All Topics" && ` in ${selectedTopic}`}
            </span>
          </div>

          {filteredPublications.length > 0 ? (
            <div className="divide-y divide-line">
              {filteredPublications.map((pub) => (
                <PublicationItemCard key={pub.id} publication={pub} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-line bg-surface p-12 text-center">
              <p className="font-serif text-2xl text-ink">No publications found</p>
              <p className="mt-2 text-xs text-muted">
                Try adjusting your search terms or clearing the topic filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTopic("All Topics");
                }}
                className="mt-4 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
