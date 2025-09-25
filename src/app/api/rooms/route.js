// // import { connectDB } from "@/lib/connectDB";
// const { connectDB } = require("@/helper/db");
// // import { Room } from "@/models/room";
// import { Room } from "@/models/room";  // ✅ match the export exactly

// import { NextResponse } from "next/server";

// export async function GET() {

//     try {
//         await connectDB();
//         const rooms = await Room.find({});
//         return NextResponse.json({ success: true, data: rooms });
//     } catch (err) {
//         return NextResponse.json({ success: false, error: err.message }, { status: 500 });
//     }
// }

// export async function POST(req) {
//     try {
//         await connectDB();
//         const body = await req.json();
//         const newRoom = new Room(body);
//         await newRoom.save();
//         return NextResponse.json({ success: true, data: newRoom });
//     } catch (err) {
//         return NextResponse.json({ success: false, error: err.message }, { status: 500 });
//     }
// }


// import { connectDB } from "@/lib/connectDB";
// import { Room } from "@/models/room";

// import { connectDB } from "@/lib/connectDB";
import { connectDB } from "@/helper/db";

import { Room } from "@/models/room";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await connectDB();

        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page")) || 1; // default page 1
        const limit = parseInt(searchParams.get("limit")) || 10; // default 10 rooms per page
        const skip = (page - 1) * limit;

        const totalRooms = await Room.countDocuments();
        const rooms = await Room.find({}).skip(skip).limit(limit);

        return NextResponse.json({
            success: true,
            data: rooms,
            totalRooms,
            page,
            totalPages: Math.ceil(totalRooms / limit)
        });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();
        const newRoom = new Room(body);
        await newRoom.save();
        return NextResponse.json({ success: true, data: newRoom });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}

