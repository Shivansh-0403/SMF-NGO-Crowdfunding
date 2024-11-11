import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router()

import { list_all, registerNgo, list_details, list_user_ngos } from "../controllers/ngo.controller.js";

// router.route("/register").post(upload.single("avatar"), registerUser)
// router.route("/login").post(loginUser)
// router.route("/reset-password/:id/:token").post(resetPassword)

router.route("/list-ngos").get(list_all)
router.route("/list-details/:_id").get(list_details)
router.route("/list-ngos/:email").get(list_user_ngos)

// router.route("/register-ngo").post(upload.single("logo"), registerNgo)
router.route("/register-ngo").post(upload.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'photos', maxCount: 10 } // Adjust maxCount as needed
]), registerNgo);

export default router