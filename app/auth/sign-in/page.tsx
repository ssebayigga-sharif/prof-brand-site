import type { Metadata } from "next";
import AuthForm from "../auth-form";

export const metadata: Metadata = {
  title: "Sign in | David Daniel Nsereko",
  description: "Sign in to access books and contact the professor.",
};

type SignInPageProps = {
  searchParams: Promise<{ next?: string; error?: string }>;
};

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const { next = "/account", error } = await searchParams;
  const nextPath =
    next.startsWith("/") && !next.startsWith("//") ? next : "/account";

  return <AuthForm mode="sign-in" nextPath={nextPath} initialError={error} />;
}
