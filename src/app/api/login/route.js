import { User } from "@/models/user";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const { connectDB } = require("@/helper/db");

export async function GET(request) {
    console.log("db called");
    await connectDB();


}

// export async function POST(request) {


//     try {
//         await connectDB();
//         const { email, password } = await request.json();


//         const user = await User.findOne({ email });

//         if (!user) {
//             return NextResponse.json(
//                 { message: "User not found" },
//                 { status: 404 }
//             );
//         }


//         if (user.password !== password) {
//             return NextResponse.json(
//                 { message: "Invalid password" },
//                 { status: 401 }
//             );
//         }




//         const resp = NextResponse.json(
//             {
//                 success: true,
//                 message: "Login successful",
//                 user: {
//                     id: user._id,
//                     name: user.name,
//                     email: user.email,
//                     is_admin: user.is_admin,
//                 },
//                 redirectUrl,
//             },
//             { status: 200 }
//         );
//         // resp.cookies.set("loginToken", token, {
//         //     expiresIn: "1d",
//         //     httpOnly: true,

//         // });
//         return resp;
//     } catch (error) {
//         return NextResponse.json(
//             { message: "Server error", error: error.message },
//             { status: 500 }
//         );
//     }
// }


// export async function POST(req) {
//     try {
//         const { email, password } = await req.json();
//         console.log("📩 Incoming login request:", email);

//         await connectDB();
//         console.log("✅ DB Connected in API");

//         const user = await User.findOne({ email });
//         console.log("🔍 Found user:", user);

//         if (!user || user.password !== password) {
//             return NextResponse.json(
//                 { success: false, message: "Invalid email or password" },
//                 { status: 401 }
//             );
//         }

//         console.log("✅ Login success for:", user.email);

//         return NextResponse.json({ success: true, message: "Login successful" });
//     } catch (error) {
//         console.error("❌ API Login Error:", error);
//         return NextResponse.json(
//             { success: false, message: "Server error", error: error.message },
//             { status: 500 }
//         );
//     }
// }


// src/app/api/login/route.js

// import { NextResponse } from "next/server";
// import { User } from "@/models/user";
// import { connectDB } from "@/helper/db";


export async function POST(request) {
    try {
        // Step 1: Connect to DB
        await connectDB();

        // Step 2: Parse request body
        const { email, password } = await request.json();
        console.log("📩 Login attempt from:", email);

        // Step 3: Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { success: false, message: "User not found" },
                { status: 404 }
            );
        }

        // Step 4: Check password (Plaintext — not secure, consider hashing in future)
        if (user.password !== password) {
            return NextResponse.json(
                { success: false, message: "Invalid password" },
                { status: 401 }
            );
        }

        // Step 5: Generate JWT token
        const token = jwt.sign(
            {
                _id: user._id,
                email: user.email,
                is_admin: user.is_admin,
            },
            process.env.JWT_KEY,
            { expiresIn: "1d" }
        );

        console.log("✅ JWT Token generated:", token);

        // Step 6: Determine redirect URL based on role
        const redirectUrl = user.is_admin ? "/adminDash" : "/emplDash";

        // Step 7: Return success response with token in cookie
        const response = NextResponse.json(
            {
                success: true,
                message: "Login successful",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    is_admin: user.is_admin,
                },
                redirectUrl,
            },
            { status: 200 }
        );

        // Step 8: Set the cookie (httpOnly for security)
        response.cookies.set("loginToken", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
        });

        return response;
    } catch (error) {
        console.error("❌ Login Error:", error.message);
        return NextResponse.json(
            { success: false, message: "Server error", error: error.message },
            { status: 500 }
        );
    }
}
