import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  //  console.log("Cookies in request:", req.cookies.getAll()); // Debugging: See all cookies

  const authToken = req.cookies.get("authToken"); // Use correct cookie name

  // Redirect if accessing /dashboard without being authenticated
  if (req.nextUrl.pathname.startsWith("/dashboard") && !authToken) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
 
  if (req.nextUrl.pathname.startsWith("/auth") && authToken) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
//   else
//  if (req.nextUrl.pathname.startsWith("/auth") && !authToken) {
//      return NextResponse.redirect(new URL("/auth/login", req.url));
//    }

  return NextResponse.next();
}

// Apply middleware only to protected routes
export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};
