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
    <div className="grid gap-4 border-b border-line py-8 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-10">
      <div>
        <span className="inline-block font-sans text-xs font-semibold uppercase tracking-wider text-accent">
          {period}
        </span>
        {badge && (
          <span className="mt-2 block w-fit rounded-full bg-navy/10 px-2.5 py-0.5 text-[10px] font-medium uppercase text-navy">
            {badge}
          </span>
        )}
      </div>
      <div>
        <h3 className="font-serif text-2xl font-normal leading-snug text-ink sm:text-3xl">
          {role}
        </h3>
        {(institution || location) && (
          <p className="mt-2 text-sm font-medium text-navy">
            {institution}
            {institution && location && " · "}
            {location}
          </p>
        )}
        {description && (
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {description}
          </p>
        )}
        {cases && cases.length > 0 && (
          <div className="mt-4 rounded-md border border-line bg-surface p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink">
              Key Judgments & Appeals
            </p>
            <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-muted">
              {cases.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent font-bold">›</span>
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
