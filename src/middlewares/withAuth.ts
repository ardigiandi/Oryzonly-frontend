import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

const onlyMentor = ["mentor"];
const onlyMember = ["member"];
const authPage = ["auth"];
const onlyAdmin = ["admin"];

export default function WithAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname.split("/")[1];

    // Check if the current page requires authentication
    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      // If no token and not on an auth page, redirect to login
      if (!token && !authPage.includes(pathname)) {
        const url = new URL("/auth/login", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      }

      // If token exists
      if (token) {
        // Redirect authenticated users away from auth pages
        if (authPage.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }

        // Redirect non-mentor users away from mentor-only pages
        if (token.role !== "mentor" && onlyMentor.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }

        // Redirect mentors away from member-only pages
        if (token.role === "mentor" && onlyMember.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }

        if (token.role !== "admin" && onlyAdmin.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }
      }
    }

    // Proceed with the original middleware if no redirects are needed
    return middleware(req, next);
  };
}
