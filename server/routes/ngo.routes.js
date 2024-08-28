import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router()

import { list_all } from "../controllers/ngo.controller.js";

// router.route("/register").post(upload.single("avatar"), registerUser)
// router.route("/login").post(loginUser)
// router.route("/reset-password/:id/:token").post(resetPassword)

router.route("/ngo-listings").get()

export default router