import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
            index: true
        },
        contact: {
            type: String,
            // required: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 12)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)