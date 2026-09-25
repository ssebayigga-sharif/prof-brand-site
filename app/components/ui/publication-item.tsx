import React from "react";
import type { PublicationItem as PubType } from "@/app/lib/data/publications";

interface PublicationItemProps {
  publication: PubType;
}

export function PublicationItemCard({ publication }: PublicationItemProps) {
  const typeLabels: Record<PubType["type"], string> = {
    chapter: "Book Chapter",
    article: "Peer-Refereed Article",
    conference: "Conference Paper / Lecture",
    review: "Book Review",
  };

  return (
    <article className="group border-b border-line py-6 transition duration-200 hover:bg-surface/70">
      <div className="flex flex-wrap items-center gap-3 text-xs">
        <span className="font-semibold text-accent">
          {publication.year}
        </span>
        <span className="text-faint-2">·</span>
        <span className="rounded-full bg-navy/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-navy">
          {typeLabels[publication.type]}
        </span>
        {publication.topic && (
          <>
            <span className="text-faint-2">·</span>
            <span className="text-muted">{publication.topic}</span>
          </>
        )}
      </div>

      <h3 className="mt-3 font-serif text-xl font-normal leading-snug text-ink transition group-hover:text-accent sm:text-2xl">
        {publication.title}
      </h3>

      {publication.coauthor && (
        <p className="mt-1 text-xs italic text-muted">
          {publication.coauthor}
        </p>
      )}

      <p className="mt-2 text-sm leading-relaxed text-muted">
        {publication.citation}
      </p>
    </article>
  );
}
