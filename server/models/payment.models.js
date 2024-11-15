import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true,
    },
    payment_id: {
        type: String,
        required: true,
    },
    signature: {
        type: String,
        required: true,
    },
    // sender: {
    //     type: String,
    //     required: true
    // },
    // receiver: {
    //     type: String,
    //     required: true
    // }
});

export const Payment = mongoose.model("Payment", paymentSchema);