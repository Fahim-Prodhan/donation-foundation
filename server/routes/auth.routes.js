import express from "express";
import { login, logout,changePassword, signup, forgotPass, resetpass, verifyOTP,resendOTP,getUserById,getAllUsers, getCountUser,UpdateRole,UpdateActiveStatus } from "../controllers/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forgot-password", forgotPass);
router.post("/reset-password", resetpass);
router.post("/verify-otp",protectRoute, verifyOTP);
router.post("/resend-otp",protectRoute, resendOTP);
router.get('/user/:id', getUserById);
router.get('/users', getAllUsers);
router.get('/userCount', getCountUser);
router.patch('/updateRole/:id',verifyAdmin, UpdateRole);
router.patch('/updateStatus/:id',verifyAdmin, UpdateActiveStatus)
router.post("/change-password", protectRoute, changePassword);

export default router;
