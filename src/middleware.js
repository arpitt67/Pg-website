// import { NextResponse } from 'next/server'

// export function middleware(request) {
//     console.log("middleware called..." + request.nextUrl.pathname);

//     const token = request.cookies.get("loginToken")?.value;

//     // If no token and user tries to access protected route, redirect to login
//     if (!token) {
//         return NextResponse.redirect(new URL("/login", request.url));
//     }

//     // Otherwise, allow
//     return NextResponse.next();
// }

// export const config = {
//     matcher: ['/admin/dashboard'],
// }



import { NextResponse } from 'next/server'

export function middleware(request) {
    console.log("middleware called..." + request.nextUrl.pathname);

    const token = request.cookies.get("loginToken")?.value;

    // Protect only DELETE and PUT methods on /api/rooms/:id
    const url = request.nextUrl;
    const pathname = url.pathname;

    // Regex to match /api/rooms/:id
    const roomsIdRegex = /^\/api\/rooms\/[^\/]+$/;

    if (roomsIdRegex.test(pathname) && (request.method === "DELETE" || request.method === "PUT")) {
        if (!token) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    // Also protect admin dashboard
    if (pathname === "/admin/dashboard" && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/admin/dashboard',
        '/api/rooms/:path*' // match all rooms api routes, we'll filter by method in middleware
    ],
}
