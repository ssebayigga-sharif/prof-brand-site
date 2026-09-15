import Link from "next/link";
import React from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "dark"
  | "red"
  | "ghost"
  | "outline-light";

export type ButtonSize = "sm" | "md" | "lg";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
}

type AsButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type AsLinkProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = AsButtonProps | AsLinkProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#e6c66a] text-[#17201f] shadow-sm hover:-translate-y-0.5 hover:bg-[#f0d882] focus-visible:ring-[#e6c66a]",
  secondary:
    "border border-[#17201f] text-[#17201f] hover:-translate-y-0.5 hover:bg-[#17201f] hover:text-[#fff8ed] focus-visible:ring-[#17201f]",
  dark:
    "bg-[#17201f] text-[#fff8ed] hover:-translate-y-0.5 hover:bg-[#263533] focus-visible:ring-[#17201f]",
  red:
    "bg-[#c64e38] text-[#fff9ee] hover:-translate-y-0.5 hover:bg-[#a83d2c] focus-visible:ring-[#c64e38]",
  "outline-light":
    "border border-[#a9b8b3] text-[#fff8ed] hover:-translate-y-0.5 hover:border-[#fff8ed] hover:bg-[#fff8ed] hover:text-[#17201f] focus-visible:ring-[#e6c66a]",
  ghost:
    "text-[#17201f] hover:text-[#c64e38] hover:bg-black/5 focus-visible:ring-[#c64e38]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs font-medium min-h-8",
  md: "px-5 py-2.5 text-sm font-semibold min-h-11",
  lg: "px-7 py-3.5 text-base font-semibold min-h-12",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
