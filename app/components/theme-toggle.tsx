"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function getInitialTheme(): "light" | "dark" {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* ignore storage failures */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    if (next === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    root.style.colorScheme = next;

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore storage failures */
    }

    setTheme(next);
  }

  const isDark = theme === "dark";
  const label = isDark
    ? "Switch to light mode"
    : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-header text-sm leading-none text-ink transition hover:border-accent hover:text-accent"
    >
      {/* Sun when dark (tap to go light), moon when light (tap to go dark) */}
      <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
    </button>
  );
}