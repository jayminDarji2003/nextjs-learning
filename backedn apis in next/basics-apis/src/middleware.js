import { NextResponse } from "next/server";

// middleware provides
/*
    1. redirect of url
    2. url re-writes
*/

// way 1 of adding middleware
// export function middleware(request) {
//     return NextResponse.redirect(new URL("/", request.url))
// }

// export const config = {
//     matcher: "/profile"  // this will tell where to add middleware
// }


// way 2 of adding middleware
export function middleware(request) {
    if (request.nextUrl.pathname === "/profile") {
        return NextResponse.redirect(new URL("/", request.url))  // here we are simple adding redirection
    }

    if (request.nextUrl.pathname === "/time") {
        return NextResponse.rewrite(new URL("/hello", request.url)) // here we are not changing the url but changing the content of the page
    }
}
