import { User } from "../types/user.type";
import mongoose, { Document, Schema } from "mongoose";

interface UserModel extends User {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model<UserModel & Document>("UserInstance", userSchema);
