import type { Metadata } from "next";
import AuthForm from "../auth-form";

export const metadata: Metadata = {
  title: "Sign in | David Daniel Nsereko",
  description: "Sign in to access books and contact the professor.",
};

export default function SignInPage() {
  return <AuthForm mode="sign-in" />;
}
