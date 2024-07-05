// export { default } from "next-auth/middleware";

// export const config = { matcher: ["/"] };




import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.url;

//   if (url.includes("login")) {
//     return NextResponse.redirect(new URL('/', req.url));
//   }

if (req.url === '/login?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F') {
    // Redirect to the new URL
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login"],
};