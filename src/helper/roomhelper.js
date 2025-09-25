import { Room } from "@/models/room"; // import schema
import mongoose from "mongoose";

export const connectRoomDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "pg_manager",
        });

        console.log("✅ DB connected for Rooms...");
        console.log("Host:", conn.connection.host);
        console.log("DB Name:", conn.connection.name);

        // ✅ Example testing room creation (uncomment to test once)
        // const newRoom = new Room({
        //     roomType: "2 Seater AC",
        //     buildingName: "Block A",
        //     floor: 2,
        //     bedsAvailable: 2,   // 🔥 now required field
        // });
        // await newRoom.save();
        // console.log("Room created successfully!");

    } catch (error) {
        console.log("❌ Not connected with DB (Rooms)");
        console.error(error.message);
    }
};
