import { instance } from "../index.js";
import crypto from "crypto";
import { Payment } from "../models/payment.models.js";

export const checkout = async (req, res) => {
    try {
        const { amount, user, ngo } = req.body;

        const options = {
            amount: Number(amount) * 100,
            currency: "INR",
        };

        const order = await instance.orders.create(options);

        await Payment.create({
            razorpay_order_id: order.id,
            amount,
            user,
            ngo,
        });

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
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
            .update(body.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            await Payment.findOneAndUpdate(
                { razorpay_order_id },
                {
                    razorpay_payment_id,
                    razorpay_signature,
                    payment_status: "Successful",
                },
                { new: true }
            );

            res.redirect(
                `http://localhost:5173/payment-success?reference=${razorpay_payment_id}`
            );
        } else {
            await Payment.findOneAndUpdate(
                { razorpay_order_id },
                {
                    razorpay_payment_id,
                    razorpay_signature,
                    payment_status: "Unsuccessful",
                },
                { new: true }
            );

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

export const getUserTxnHistory = async (req, res) => {
    try {
        const { email } = req.params

        const data = await Payment.find({ "user.email": email }).select("-razorpay_signature -razorpay_order_id");

        // console.log(data);
        console.log("User Transactions Sent");
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