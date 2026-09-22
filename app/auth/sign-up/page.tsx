import type { Metadata } from "next";
import AuthForm from "../auth-form";

export const metadata: Metadata = {
  title: "Sign up | David Daniel Nsereko",
  description: "Create an account to access books and contact the professor.",
};

type SignUpPageProps = {
  searchParams: Promise<{ next?: string }>;
};

export default async function SignUpPage({ searchParams }: SignUpPageProps) {
  const { next = "/account" } = await searchParams;
  const nextPath =
    next.startsWith("/") && !next.startsWith("//") ? next : "/account";

  return <AuthForm mode="sign-up" nextPath={nextPath} />;
}
