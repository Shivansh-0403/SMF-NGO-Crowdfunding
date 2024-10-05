import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import { v2 as cloudinary } from "cloudinary"
const app = express()

dotenv.config({
    path: './.env'
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(cookieParser())

const allowedOrigins = [
    'http://localhost:5173',
    process.env.CORS_ORIGIN
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // Only if you're using credentials like cookies
}));


// console.log(process.env.CORS_ORIGIN);


// app.use(express.json({limit: "16kb"}))

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        console.log("MONGODB Connected..");
    } catch (error) {
        console.error("MONGODB connection FAILED ", error.message);
        process.exit(1);
    }
};

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error("MONGO db connection failed !!! ", err);
    });


import userRouter from './routes/user.routes.js'
import ngoRouter from './routes/ngo.routes.js'
app.use("/api/user", userRouter)
app.use("/api/ngo", ngoRouter)