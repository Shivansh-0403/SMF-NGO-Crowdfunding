import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config({
    path: './.env'
})
const transporter = nodemailer.createTransport({
    // service: "Gmail",
    service: 'gmail',
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
    },
});

export { transporter }