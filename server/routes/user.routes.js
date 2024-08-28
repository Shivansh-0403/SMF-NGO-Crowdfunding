import { Router } from "express";
// import { upload } from "../middlewares/multer.middleware.js";
const router = Router()

import { registerUser } from "../controllers/user.controller.js";
import { loginUser } from "../controllers/user.controller.js";
import { logoutUser } from "../controllers/user.controller.js";
import { forgotPassword } from "../controllers/user.controller.js";
import { resetPassword } from "../controllers/user.controller.js";

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(logoutUser)
router.route("/forgot-password").post(forgotPassword)
router.route("/reset-password/:id/:token").post(resetPassword)

export default router