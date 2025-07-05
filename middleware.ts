import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAdmin = request.cookies.get("admin")?.value === "true";
  const { pathname } = request.nextUrl;

  if (pathname === "/" && isAdmin) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (pathname !== "/" && !isAdmin) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard"],
};
