import { type NextRequest, NextResponse } from "next/server";
import { authRoutes, publicRoutes } from "./lib/constants";

export async function middleware(request: NextRequest) {

    const { pathname, origin } = request.nextUrl;

    let token = request.cookies.get("session")?.value;

    const isPublicRoute = publicRoutes.includes(pathname);

    const isAuthRoute = authRoutes.includes(pathname);

    if (isPublicRoute) {

        if (token) {

            return Response.redirect(new URL(`${origin}`, request.url));

        }

        return null;

    }

    if (!token && isAuthRoute) {

        return NextResponse.redirect(new URL(`${publicRoutes}`, request.url));

    }

};

export const config = {
    matcher: ["/", "/login"]
};