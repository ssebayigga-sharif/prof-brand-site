import { NextResponse } from "next/server";
import { createClient } from "../../lib/supabase/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const requestedPath = requestUrl.searchParams.get("next");
  const nextPath =
    requestedPath?.startsWith("/") && !requestedPath.startsWith("//")
      ? requestedPath
      : "/account";

  if (!code) {
    return NextResponse.redirect(
      new URL(
        `/auth/sign-in?next=${encodeURIComponent(nextPath)}&error=${encodeURIComponent("The verification link is missing or invalid. Please request a new sign-in link.")}`,
        request.url,
      ),
    );
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(
      new URL(
        `/auth/sign-in?next=${encodeURIComponent(nextPath)}&error=${encodeURIComponent("This verification link has expired or was already used. Please sign in or request a new link.")}`,
        request.url,
      ),
    );
  }

  return NextResponse.redirect(new URL(nextPath, request.url));
}
