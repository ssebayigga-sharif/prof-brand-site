import React from "react";
import { theme } from "@/app/lib/theme";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  badge?: string;
  asideTitle?: string;
  asideText?: string;
  children?: React.ReactNode;
  dark?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  description,
  badge,
  asideTitle,
  asideText,
  children,
  dark = false,
}: PageHeroProps) {
  const eyebrowColor = dark ? theme.gold : theme.accent;
  const bodyColor = dark ? "text-[#d8e0dc]" : theme.textMuted;

  return (
    <section
      className={`relative border-b ${theme.border} px-6 pb-10 pt-16 sm:px-10 lg:px-[5.5vw] lg:pb-14 lg:pt-24 ${
        dark
          ? `${theme.surfaceDark} ${theme.textInverse}`
          : `${theme.surface} ${theme.textPrimary}`
      }`}
    >
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowColor}`}
            >
              {eyebrow}
            </p>
            {badge && (
              <span
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                  dark
                    ? "bg-[#e6c66a]/20 text-[#e6c66a]"
                    : `${theme.accentBg}/15 ${theme.accent}`
                }`}
              >
                {badge}
              </span>
            )}
          </div>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-normal leading-[1.05] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p
            className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${bodyColor}`}
          >
            {description}
          </p>
          {children && <div className="mt-6">{children}</div>}
        </div>

        {(asideTitle || asideText) && (
          <div
            className={`self-end border-l pl-6 lg:mb-2 ${dark ? "border-[#a9b8b3]/30" : theme.border}`}
          >
            {asideTitle && (
              <p
                className={`text-xs font-semibold uppercase tracking-[0.16em] ${eyebrowColor}`}
              >
                {asideTitle}
              </p>
            )}
            {asideText && (
              <p
                className={`mt-4 font-serif text-lg leading-7 sm:text-xl ${dark ? theme.textInverse : theme.textPrimary}`}
              >
                {asideText}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
