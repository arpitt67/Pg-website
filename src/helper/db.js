// import { User } from "@/models/user";
// import mongoose from "mongoose";

// export const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_DB_URL, {
//             dbName: "pg_manager",
//         });

//         console.log(" DB connected...");
//         console.log("Host:", conn.connection.host);
//         console.log("DB Name:", conn.connection.name);


//         // testing of user creation..
//         // const uuser = new User({

//         //     "name": "SL Khan",
//         //     "email": "admin@gmail.com",
//         //     "password": "admin",
//         //     "is_admin": true
//         // });
//         // await uuser.save();
//         // console.log("user is creayed ..");



//     } catch (error) {
//         console.log("Not connected with DB");
//         console.error(error.message);
//     }
// };

import mongoose from "mongoose";
import { User } from "@/models/user";
import { Room } from "@/models/room"; // optional, just ensures schema is loaded

export const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            // Already connected
            return;
        }

        const conn = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "pg_manager",
        });

        console.log("✅ DB connected...");
        console.log("Host:", conn.connection.host);
        console.log("DB Name:", conn.connection.name);

        // ✅ Example: create admin user (uncomment once to test)
        // const uuser = new User({
        //     name: "SL Khan",
        //     email: "admin@gmail.com",
        //     password: "admin",
        //     is_admin: true
        // });
        // await uuser.save();
        // console.log("Admin user created!");

    } catch (error) {
        console.log("❌ Not connected with DB");
        console.error(error.message);
    }
};
