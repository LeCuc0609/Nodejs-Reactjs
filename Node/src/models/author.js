import { string } from "joi";
import mongoose from "mongoose";
const authorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: "member",
    }
})
export default mongoose.model('Author', authorSchema)