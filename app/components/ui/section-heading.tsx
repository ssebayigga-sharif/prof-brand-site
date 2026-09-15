import React from "react";

interface SectionHeadingProps {
  index?: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  index,
  title,
  description,
  dark = false,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      } ${className}`}
    >
      {index && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.16em] mb-3 ${
            dark ? "text-[#e6c66a]" : "text-[#c64e38]"
          }`}
        >
          {index}
        </p>
      )}
      <h2
        className={`font-serif text-3xl font-normal leading-tight tracking-normal sm:text-4xl lg:text-5xl ${
          dark ? "text-[#fff8ed]" : "text-[#17201f]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${
            dark ? "text-[#d8e0dc]" : "text-[#66706b]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
