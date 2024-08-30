import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router()

import { list_all, registerNgo } from "../controllers/ngo.controller.js";

// router.route("/register").post(upload.single("avatar"), registerUser)
// router.route("/login").post(loginUser)
// router.route("/reset-password/:id/:token").post(resetPassword)

router.route("/all-ngos").get(list_all)
router.route("/register-ngo").post(registerNgo)

export default router