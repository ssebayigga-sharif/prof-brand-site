import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  // Protected pages restricted to logged-in members only
  const protectedRoutes = ["/account", "/contact"];
  const isProtected = protectedRoutes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );

  if (isProtected && !user) {
    const signUpUrl = new URL("/auth/sign-up", request.url);
    signUpUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(signUpUrl);
  }

  // Strictly protect contact API from unauthenticated email dispatch
  if (pathname.startsWith("/api/contact") && !user) {
    return NextResponse.json(
      {
        ok: false,
        error: "Authentication required to contact Professor Nsereko.",
      },
      { status: 401 },
    );
  }

  // Redirect authenticated members away from sign-in/up pages
  if (user && (pathname === "/auth/sign-in" || pathname === "/auth/sign-up")) {
    const nextPath = request.nextUrl.searchParams.get("next") || "/account";
    return NextResponse.redirect(new URL(nextPath, request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
