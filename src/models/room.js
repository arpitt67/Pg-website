import mongoose, { Schema, model, models } from "mongoose";

const RoomSchema = new Schema({
    roomType: {
        type: String,
        required: true,
        enum: [
            "1 Seater Cooler",
            "2 Seater Cooler",
            "2 Seater AC",
            "3 Seater Cooler",
            "3 Seater AC"
        ],
    },
    buildingName: {
        type: String,
        required: true,
    },
    floor: {
        type: Number,
        required: true,
        min: 0,
    },
    bedsAvailable: {
        type: Number,
        required: true,
        min: 0, // cannot be negative
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export const Room = models.Room || model("Room", RoomSchema);
