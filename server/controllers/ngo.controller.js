import { Ngo } from "../models/ngo.models.js"
import dotenv from "dotenv"
// import jwt from "jsonwebtoken"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
// import mongoose from "mongoose"
import { transporter } from "../utils/nodemailer.js"
import { User } from "../models/user.models.js"
// import bcrypt from "bcrypt"


dotenv.config({
    path: './.env'
})

const list_all = async (req, res) => {
    try {
        // const createdUser = await User.findById(user._id).select(
        //     "-password -refreshToken"
        // )

        const data = await Ngo.find().select(
            "-photos -email -address -contact -website"
        );
        // console.log(data);
        console.log("All done");
        res.status(200).json({
            statusCode: 200,
            data: data,
            message: "Data Sent"
        });
    } catch (error) {
        console.log("Error - No NGOs: ", error.message);
        res.status(500).json({
            statusCode: 500,
            message: "Error - No NGOs: " + error.message
        });
    }
}

const list_details = async (req, res) => {
    try {
        console.log(req.params);
        const { _id } = req.params;
        const ngo = await Ngo.findById(_id)

        // const data = await Ngo.find().select(
        //     "-photos -email -address -contact -website"
        // );
        // console.log(data);
        console.log("All done");
        res.status(200).json({
            statusCode: 200,
            data: ngo,
            message: "NGO Data Sent"
        });
    } catch (error) {
        console.log("Error - No NGOs: ", error.message);
        res.status(500).json({
            statusCode: 500,
            message: "Error - No NGOs: " + error.message
        });
    }
}

const registerNgo = async (req, res) => {
    try {
        console.log(req.body);
        const { name, owner, email, website, contact, address, city } = req.body;

        // for (const [key, value] of Object.entries(requiredFields)) {
        //     if (!value || value.trim() === "") {
        //         throw new Error(`The field '${key}' is required`);
        //     }
        // }

        // console.log("Yes");
        const ngoOwner = await User.findOne({ email });
        if (!ngoOwner){
            throw new Error('Email not found. Cannot Register!!');
        }
        // console.log("Yes");

        const existingUser = await Ngo.findOne({ email: ngoOwner});

        // console.log("Yes");
        if (existingUser){
            throw new Error('Email already exists');
        }

        // console.log("Yes");

        // if (!req.files) {
        //     throw new Error("Logo is required")
        // }

        // const logoLocalPath = req.file.path
        // console.log(req.file);
        // // const logoLocalPath = req.file.path

        // // if (!logoLocalPath) {
        // //     throw new Error("Logo is required")
        // // }

        // const logo = await uploadOnCloudinary(logoLocalPath)
        // console.log(logo)


        let logoUrl = "";
        if (req.files.logo && req.files.logo[0]) {
            const logoLocalPath = req.files.logo[0].path;
            const logo = await uploadOnCloudinary(logoLocalPath);
            logoUrl = logo.url;
        }

        // console.log("Yes");

        let photoUrls = [];
        if (req.files.photos && req.files.photos.length > 0) {
            for (let photo of req.files.photos) {
                const photoLocalPath = photo.path;
                const uploadedPhoto = await uploadOnCloudinary(photoLocalPath);
                photoUrls.push(uploadedPhoto.url); // Save Cloudinary URL
            }
        }

        // console.log("Yes");
        console.log(ngoOwner);

        // const requiredFields = { name, ngoOwner, owner, website, contact, address, location, logo: logo?.url || "", rating:0 };
        const requiredFields = {
            name,
            // email,
            email: ngoOwner,
            owner,
            website,
            contact,
            address,
            city,
            logo: logoUrl,
            photos: photoUrls, // Array of photo URLs
            rating: 0
        };

        // const user = await User.create({ username, email, fullname, avatar, password });
        // const org = await Ngo.create({
        // requiredFields,
        // rating: 0,
        // logo
        // photos
        // })

        const org = await Ngo.create(requiredFields)

        if (!org) {
            throw new Error('Ngo registration unsuccessful');
        }

        // const createdOrg = await Ngo.findById(org._id)

        console.log("All done");
        res.status(200).json({
            statusCode: 200,
            // data: createdOrg,
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
    list_details,
    registerNgo
}