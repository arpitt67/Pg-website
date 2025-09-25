// import mongoose, { Schema } from "mongoose";
import mongoose, { Schema, models, model } from "mongoose";
// import { unique } from "next/dist/build/utils";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,

    },
    password: {
        type: String,
        require: [true, " password required!"],
    },
    is_admin: {
        type: Boolean,
        require: true,
    }

});

export const User = mongoose.models.users || mongoose.model("users", UserSchema);