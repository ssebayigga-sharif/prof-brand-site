import React from "react";

interface TimelineItemProps {
  period: string;
  role: string;
  institution?: string;
  location?: string;
  description?: string;
  cases?: string[];
  badge?: string;
}

export function TimelineItem({
  period,
  role,
  institution,
  location,
  description,
  cases,
  badge,
}: TimelineItemProps) {
  return (
    <div className="grid gap-4 border-b border-[#d9d1c4] py-8 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-10">
      <div>
        <span className="inline-block font-sans text-xs font-semibold uppercase tracking-wider text-[#c64e38]">
          {period}
        </span>
        {badge && (
          <span className="mt-2 block w-fit rounded-full bg-[#16404d]/10 px-2.5 py-0.5 text-[10px] font-medium uppercase text-[#16404d]">
            {badge}
          </span>
        )}
      </div>
      <div>
        <h3 className="font-serif text-2xl font-normal leading-snug text-[#17201f] sm:text-3xl">
          {role}
        </h3>
        {(institution || location) && (
          <p className="mt-2 text-sm font-medium text-[#16404d]">
            {institution}
            {institution && location && " · "}
            {location}
          </p>
        )}
        {description && (
          <p className="mt-3 text-sm leading-relaxed text-[#66706b]">
            {description}
          </p>
        )}
        {cases && cases.length > 0 && (
          <div className="mt-4 rounded-md border border-[#d9d1c4] bg-[#faf6ef] p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#17201f]">
              Key Judgments & Appeals
            </p>
            <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-[#66706b]">
              {cases.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#c64e38] font-bold">›</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
