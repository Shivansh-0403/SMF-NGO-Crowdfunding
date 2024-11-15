import { instance } from "../index.js";
import crypto from "crypto";
import { Payment } from "../models/payment.models.js";

export const checkout = async (req, res) => {
    try {
        const options = {
            amount: Number(req.body.amount) * 100, // Razorpay expects amount in paise
            currency: "INR",
        };
        
        const order = await instance.orders.create(options);
        console.log(order);
        
        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        console.error("Error in checkout:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

export const paymentVerification = async (req, res) => {
    try {
        const { order_id, payment_id, signature } = req.body;
        console.log(req.body);

        const body = order_id + "|" + payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
            .update(body.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === signature;

        if (isAuthentic) {
            await Payment.create({
                order_id,
                payment_id,
                signature,
            });

            res.redirect(
                `http://localhost:5173/payment-success?reference=${payment_id}`
            );
        } else {
            res.status(400).json({
                success: false,
                message: "Payment verification failed",
            });
        }
    } catch (error) {
        console.error("Error in payment verification:", error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

export const getRazorpayKey = async (req, res) => {
    try {
        res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
    } catch (error) {
        console.error("Error in getRazorpayKey:", error.message);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};
