// import { NextResponse } from "next/server";

// export async function POST() {
//     // You can clear cookies, sessions, tokens, etc.
//     // For demo purposes, just send a success response
//     const response = NextResponse.json({ success: true });
//     response.cookies.set("token", "", { maxAge: 0 }); // Optional: clear auth token
//     return response;
// }


import { NextResponse } from "next/server";

export async function POST() {
    // Create response JSON
    const response = NextResponse.json({ success: true, message: "Logged out successfully" });

    // Clear the JWT cookie by setting it with maxAge 0 (expires immediately)
    response.cookies.set("loginToken", "", {
        maxAge: 0,
        path: "/",         // Important: cookie path should match login cookie path
        httpOnly: true,    // Same flags as when you set it
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
    });



    return response;
}
