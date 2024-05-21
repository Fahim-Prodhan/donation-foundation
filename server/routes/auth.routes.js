import express from "express";
import { login, logout, signup, forgotPass, resetpass, verifyOTP,resendOTP,getUserById } from "../controllers/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forgot-password", forgotPass);
router.post("/reset-password", resetpass);
router.post("/verify-otp",protectRoute, verifyOTP);
router.post("/resend-otp",protectRoute, resendOTP);
router.get('/user/:id', getUserById);

export default router;
