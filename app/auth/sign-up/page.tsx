import type { Metadata } from "next";
import AuthForm from "../auth-form";

export const metadata: Metadata = {
  title: "Sign up | David Daniel Nsereko",
  description: "Create an account to access books and contact the professor.",
};

export default function SignUpPage() {
  return <AuthForm mode="sign-up" />;
}
