import { Ngo } from "../models/ngo.models.js"
import dotenv from "dotenv"
// import jwt from "jsonwebtoken"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
// import mongoose from "mongoose"
import { transporter } from "../utils/nodemailer.js"
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
    try {
        console.log(req.body);
        const { name, email, owner, website, contact, address, location } = req.body;

        const requiredFields = { name, email, owner, website, contact, address, location };

        for (const [key, value] of Object.entries(requiredFields)) {
            if (!value || value.trim() === "") {
                throw new Error(`The field '${key}' is required`);
            }
        }

        const existingUser = await Ngo.findOne({ email });

        if (existingUser) {
            throw new Error('Email already exists');
        }

        // if (!req.files) {
        //     throw new Error("Avatar is required")
        // }

        // const avatarLocalPath = req.files?.avatar[0]?.path
        // console.log(req.file);
        // const avatarLocalPath = req.file.path

        // if (!avatarLocalPath) {
        //     throw new Error("Avatar file is required")
        // }

        // const avatar = await uploadOnCloudinary(avatarLocalPath)
        // console.log(avatar)
        // const user = await User.create({ username, email, fullname, avatar, password });
        const org = await Ngo.create({
            requiredFields,
            rating: 0,
            // logo,
            // photos
        })

        if (!org) {
            throw new Error('Ngo registration unsuccessful');
        }

        const createdOrg = await Ngo.findById(org._id)

        console.log("All done");
        res.status(200).json({
            statusCode: 200,
            data: createdOrg,
            message: "NGO registration successful"
        });
    } catch (error) {
        console.log("Error registering NGO: ", error.message);
        res.status(500).json({
            statusCode: 500,
            message: "Error registering NGO: " + error.message
        });
    }
}

export {
    list_all,
    registerNgo
}