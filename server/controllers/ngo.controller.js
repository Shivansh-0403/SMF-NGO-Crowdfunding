import { Ngo } from "../models/ngo.models.js"
import dotenv from "dotenv"
// import jwt from "jsonwebtoken"
// import { uploadOnCloudinary } from "../utils/cloudinary.js"
// import mongoose from "mongoose"
// import { transporter } from "../utils/nodemailer.js"
// import bcrypt from "bcrypt"

dotenv.config({
    path: './.env'
})

const list_all = async (req, res) => {
    try {
        // const createdUser = await User.findById(user._id).select(
        //     "-password -refreshToken"
        // )

        const data = await Ngo.find();
        console.log(data);
        console.log("All done");
        res.status(200).json({
            statusCode: 200,
            data: data,
            message: "User registration successful"
        });
    } catch (error) {
        console.log("Error registering user: ", error.message);
        res.status(500).json({
            statusCode: 500,
            message: "Error registering user: " + error.message
        });
    }
}

const registerNgo = async (req, res) => {
    
}

export {
    list_all
}