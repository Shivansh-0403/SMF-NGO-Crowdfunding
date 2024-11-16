import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    razorpay_order_id: { type: String, required: true },
    razorpay_payment_id: { type: String },
    razorpay_signature: { type: String },
    amount: { type: Number, required: true },
    user: {
        name: String,
        email: String,
    },
    ngo: {
        _id: String,
        name: String,
        email: String,
    },
    payment_status: { type: String, default: "Pending" },
    createdAt: { type: Date, default: Date.now },
});

export const Payment = mongoose.model("Payment", paymentSchema);
