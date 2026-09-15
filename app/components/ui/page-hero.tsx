import React from "react";

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
  dark = true,
}: PageHeroProps) {
  return (
    <section
      className={`relative px-6 pb-16 pt-28 sm:px-10 lg:px-[5.5vw] lg:pb-24 lg:pt-36 ${
        dark ? "bg-[#17201f] text-[#fff8ed]" : "bg-[#faf6ef] text-[#17201f]"
      }`}
    >
      <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
        <div>
          <div className="flex items-center gap-3">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                dark ? "text-[#e6c66a]" : "text-[#c64e38]"
              }`}
            >
              {eyebrow}
            </p>
            {badge && (
              <span
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                  dark
                    ? "bg-[#e6c66a]/20 text-[#e6c66a]"
                    : "bg-[#c64e38]/15 text-[#c64e38]"
                }`}
              >
                {badge}
              </span>
            )}
          </div>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl font-normal leading-[1.05] tracking-normal sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p
            className={`mt-7 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${
              dark ? "text-[#d8e0dc]" : "text-[#66706b]"
            }`}
          >
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>

        {(asideTitle || asideText) && (
          <div
            className={`self-end border-l pl-6 lg:mb-2 ${
              dark ? "border-[#a9b8b3]/30" : "border-[#d9d1c4]"
            }`}
          >
            {asideTitle && (
              <p
                className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                  dark ? "text-[#e6c66a]" : "text-[#c64e38]"
                }`}
              >
                {asideTitle}
              </p>
            )}
            {asideText && (
              <p
                className={`mt-4 font-serif text-lg leading-7 sm:text-xl ${
                  dark ? "text-[#fff8ed]" : "text-[#17201f]"
                }`}
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
