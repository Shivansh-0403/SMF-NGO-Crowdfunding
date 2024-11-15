import express from "express";
import { checkout, paymentVerification, getRazorpayKey } from "../controllers/payment.controller.js";

const router = express.Router();

router.route("/checkout").post(checkout);
router.route("/paymentverification").post(paymentVerification);
router.route("/getkey").get(getRazorpayKey);

export default router;