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
    <article className="group border-b border-[#d9d1c4] py-6 transition duration-200 hover:bg-[#faf6ef]/70">
      <div className="flex flex-wrap items-center gap-3 text-xs">
        <span className="font-semibold text-[#c64e38]">
          {publication.year}
        </span>
        <span className="text-[#a9b8b3]">·</span>
        <span className="rounded-full bg-[#16404d]/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[#16404d]">
          {typeLabels[publication.type]}
        </span>
        {publication.topic && (
          <>
            <span className="text-[#a9b8b3]">·</span>
            <span className="text-[#66706b]">{publication.topic}</span>
          </>
        )}
      </div>

      <h3 className="mt-3 font-serif text-xl font-normal leading-snug text-[#17201f] transition group-hover:text-[#c64e38] sm:text-2xl">
        {publication.title}
      </h3>

      {publication.coauthor && (
        <p className="mt-1 text-xs italic text-[#66706b]">
          {publication.coauthor}
        </p>
      )}

      <p className="mt-2 text-sm leading-relaxed text-[#66706b]">
        {publication.citation}
      </p>
    </article>
  );
}
