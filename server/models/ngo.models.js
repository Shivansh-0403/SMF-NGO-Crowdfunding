import mongoose, { Schema } from "mongoose";

const ngoSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            index: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        logo: {
            type: String,   // Cloudinary URL
            // required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        website: {
            type: String,
            // required: true,
        },
        contact: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        rating: {
            type: float,
            // required: true
        },
        photos: {
            type: Array
        }
    },
    {
        timestamps: true
    }
)

export const Ngo = mongoose.model("Ngo", ngoSchema)