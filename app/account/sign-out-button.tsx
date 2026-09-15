"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "../lib/supabase/client";

export default function SignOutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function signOut() {
    setLoading(true);
    setError(null);

    const { error: signOutError } = await createClient().auth.signOut();

    if (signOutError) {
      setError("We could not sign you out. Please try again.");
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <button
        className="inline-flex items-center justify-center rounded-full border border-[#1d2524] px-6 py-3 text-sm font-medium text-[#1d2524] transition hover:-translate-y-0.5 hover:bg-[#1d2524] hover:text-[#f5ecdd] focus:outline-none focus:ring-2 focus:ring-[#c64e38] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        type="button"
        onClick={signOut}
        disabled={loading}
      >
        {loading ? "Signing out..." : "Sign out"}
      </button>
      {error && (
        <p className="text-sm text-[#c64e38]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
