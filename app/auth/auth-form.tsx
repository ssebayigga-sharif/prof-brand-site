"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "../lib/supabase/client";

type AuthMode = "sign-in" | "sign-up";

export default function AuthForm({
  mode,
  nextPath = "/account",
  initialError,
}: {
  mode: AuthMode;
  nextPath?: string;
  initialError?: string;
}) {
  const isSignIn = mode === "sign-in";
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(initialError ?? null);
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const supabase = createClient();
    const result = isSignIn
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName.trim() },
            emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(nextPath)}`,
          },
        });

    if (result.error) {
      setError(result.error.message);
      setLoading(false);
      return;
    }

    if (isSignIn) {
      router.push(nextPath);
      router.refresh();
      return;
    }

    if (result.data.session) {
      router.push(nextPath);
      router.refresh();
      return;
    }

    setMessage(
      "Your account registration is received. Please check your email to verify your address. You will be returned here automatically after verification.",
    );
    setPassword("");
    setLoading(false);
  }

  return (
    <main className="min-h-[calc(100svh-5rem)] bg-background px-6 py-20 text-ink sm:px-10 lg:px-[5.5vw] lg:py-28">
      <div className="mx-auto max-w-lg rounded-xl border border-line bg-panel p-8 shadow-sm sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {isSignIn ? "Member Portal" : "New Account"}
        </p>
        <h1 className="mt-3 font-serif text-3xl font-normal leading-tight text-ink sm:text-4xl">
          {isSignIn ? "Sign In to the Archive" : "Join the Community"}
        </h1>
        <p className="mt-3 text-xs leading-relaxed text-muted">
          {isSignIn
            ? "Sign in to access your saved references, communicate with the archive, and view your profile."
            : "Create a free account to join the mailing list for forthcoming treatises and academic updates."}
        </p>

        <form className="mt-8 space-y-5" onSubmit={submit}>
          {!isSignIn && (
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted">
              Full Name
              <input
                className="mt-1.5 w-full rounded-md border border-line bg-header px-4 py-2.5 text-xs text-ink outline-none transition focus:border-accent focus:bg-panel focus:ring-2 focus:ring-accent/20"
                type="text"
                autoComplete="name"
                required
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder="e.g. Eleanor Vance"
              />
            </label>
          )}

          <label className="block text-xs font-semibold uppercase tracking-wider text-muted">
            Email Address
            <input
              className="mt-1.5 w-full rounded-md border border-line bg-header px-4 py-2.5 text-xs text-ink outline-none transition focus:border-accent focus:bg-panel focus:ring-2 focus:ring-accent/20"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@institution.org"
            />
          </label>

          <label className="block text-xs font-semibold uppercase tracking-wider text-muted">
            Password
            <input
              className="mt-1.5 w-full rounded-md border border-line bg-header px-4 py-2.5 text-xs text-ink outline-none transition focus:border-accent focus:bg-panel focus:ring-2 focus:ring-accent/20"
              type="password"
              autoComplete={isSignIn ? "current-password" : "new-password"}
              minLength={6}
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          {error && (
            <div
              className="rounded-md border border-red-200 bg-red-50 p-3 text-xs text-red-800"
              role="alert"
            >
              {error}
            </div>
          )}

          {message && (
            <div
              className="rounded-md border border-green-200 bg-green-50 p-3 text-xs text-green-800"
              role="status"
            >
              {message}
            </div>
          )}

          <button
            className="w-full rounded-md bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-wider text-inverse transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Authenticating..."
              : isSignIn
                ? "Sign In"
                : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-muted">
          {isSignIn ? "Need an account?" : "Already registered?"}{" "}
          <Link
            className="font-semibold text-accent underline underline-offset-4"
            href={`${isSignIn ? "/auth/sign-up" : "/auth/sign-in"}?next=${encodeURIComponent(nextPath)}`}
          >
            {isSignIn ? "Create one here" : "Sign in here"}
          </Link>
        </p>
      </div>
    </main>
  );
}
