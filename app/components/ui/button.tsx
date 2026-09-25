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
    "bg-gold text-ink shadow-sm hover:-translate-y-0.5 hover:bg-gold-soft focus-visible:ring-gold",
  secondary:
    "border border-ink text-ink hover:-translate-y-0.5 hover:bg-ink hover:text-inverse focus-visible:ring-ink",
  dark:
    "bg-surface-dark text-inverse hover:-translate-y-0.5 hover:bg-header focus-visible:ring-ink",
  red:
    "bg-accent text-inverse hover:-translate-y-0.5 hover:bg-accent-deep focus-visible:ring-accent",
  "outline-light":
    "border border-faint-2 text-ink hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-white focus-visible:ring-accent",
  ghost:
    "text-ink hover:text-accent hover:bg-ink/10 focus-visible:ring-accent",
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
