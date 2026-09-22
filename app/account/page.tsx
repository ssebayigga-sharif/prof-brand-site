import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "../lib/supabase/server";
import { books } from "../lib/books";
import SignOutButton from "./sign-out-button";

export const metadata: Metadata = {
  title: "Your Account | Judge Daniel David Ntanda Nsereko",
  description:
    "Manage your account and profile for the Judge Nsereko public archive.",
};

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/sign-in?next=/account");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, avatar_url, created_at, updated_at")
    .eq("id", user.id)
    .maybeSingle();

  const displayName =
    profile?.full_name || user.user_metadata.full_name || "Archive Member";

  return (
    <main className="min-h-[calc(100svh-5rem)] bg-[#faf6ef] px-6 py-24 text-[#17201f] sm:px-10 lg:px-[5.5vw] lg:py-32">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c64e38]">
          Member Portal
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 border-b border-[#d9d1c4] pb-10 sm:flex-row sm:items-end">
          <div>
            <h1 className="font-serif text-4xl font-normal sm:text-6xl">
              Welcome,{" "}
              <em className="text-[#c64e38] not-italic">{displayName}</em>
            </h1>
            <p className="mt-3 text-sm text-[#66706b]">
              Your authenticated session is active. You have access to the
              archive community and direct communication.
            </p>
          </div>
          <div className="rounded-lg border border-[#d9d1c4] bg-white p-4 text-xs">
            <span className="font-semibold uppercase tracking-wider text-[#66706b]">
              Verified Account
            </span>
            <p className="mt-1 font-medium text-[#17201f]">{user.email}</p>
            <p className="mt-0.5 font-mono text-[10px] text-[#a9b8b3]">
              ID: {user.id.slice(0, 16)}...
            </p>
          </div>
        </div>

        {/* Quick Links Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <Link
            href="/books"
            className="group rounded-lg border border-[#d9d1c4] bg-white p-6 shadow-sm transition hover:border-[#c64e38] hover:shadow-md"
          >
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#c64e38]">
              Library
            </span>
            <h3 className="mt-2 font-serif text-xl text-[#17201f] group-hover:text-[#c64e38]">
              {books.length} Books &amp; Lexicons
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#66706b]">
              Browse monographs, Luganda translations, and constitutional law
              textbooks.
            </p>
            <span className="mt-4 inline-block text-xs font-medium text-[#16404d]">
              Open catalogue →
            </span>
          </Link>

          <Link
            href="/writing"
            className="group rounded-lg border border-[#d9d1c4] bg-white p-6 shadow-sm transition hover:border-[#c64e38] hover:shadow-md"
          >
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#c64e38]">
              Scholarship
            </span>
            <h3 className="mt-2 font-serif text-xl text-[#17201f] group-hover:text-[#c64e38]">
              65+ Articles &amp; Chapters
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#66706b]">
              Review peer-refereed publications and Commentary on the Rome
              Statute.
            </p>
            <span className="mt-4 inline-block text-xs font-medium text-[#16404d]">
              Explore writing →
            </span>
          </Link>

          <Link
            href="/contact"
            className="group rounded-lg border border-[#d9d1c4] bg-white p-6 shadow-sm transition hover:border-[#c64e38] hover:shadow-md"
          >
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#c64e38]">
              Direct Line
            </span>
            <h3 className="mt-2 font-serif text-xl text-[#17201f] group-hover:text-[#c64e38]">
              Contact the Judge
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#66706b]">
              Submit speaking invitations, research questions, or book requests.
            </p>
            <span className="mt-4 inline-block text-xs font-medium text-[#16404d]">
              Write message →
            </span>
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-[#d9d1c4] pt-8">
          <p className="text-xs text-[#66706b]">
            Account registered on{" "}
            {profile?.created_at
              ? new Date(profile.created_at).toLocaleDateString()
              : "recently"}
            .
          </p>
          <SignOutButton />
        </div>
      </div>
    </main>
  );
}
