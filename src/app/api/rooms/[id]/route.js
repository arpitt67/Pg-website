import { connectDB } from "@/helper/db"; // or "@/lib/connectDB"
import { Room } from "@/models/room";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
    try {
        await connectDB();
        const { id } = params;
        const body = await req.json();

        const updatedRoom = await Room.findByIdAndUpdate(id, body, { new: true });
        if (!updatedRoom) return NextResponse.json({ success: false, error: "Room not found" }, { status: 404 });

        return NextResponse.json({ success: true, data: updatedRoom });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    try {
        await connectDB();
        const { id } = params;

        const deletedRoom = await Room.findByIdAndDelete(id);
        if (!deletedRoom) return NextResponse.json({ success: false, error: "Room not found" }, { status: 404 });

        return NextResponse.json({ success: true, data: deletedRoom });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
