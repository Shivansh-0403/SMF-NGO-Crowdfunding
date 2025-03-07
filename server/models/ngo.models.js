import mongoose, { Schema } from "mongoose";

const ngoSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is Mandatory"],
            index: true
        },
        owner: {
            type: String,
            // required: true
        },
        logo: {
            type: String,   // Cloudinary URL
            // required: true,
        },
        // email: {
        //     type: Schema.Types.ObjectId,
        //     ref: "User",
            // required: [true, "Email is Required"],
        //     // unique: true,
        // },
        email: {
            type: String,
            required: [true, "Email is Required"],
        },
        website: {
            type: String,
            // required: true,
        },
        contact: {
            type: String,
            required: [true, "Contact Info Required"],
        },
        address: {
            type: String,
            required: [true, "Complete Address Required"],
        },
        city: {
            type: String
        },
        rating: {
            type: Number,
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