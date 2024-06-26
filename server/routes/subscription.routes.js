import express from 'express';
import { createSubscription,handleConfirmSubscription } from '../controllers/subscription.controller.js';
import protectRoute from "../middleware/protectRoute.js";



const router = express.Router();

router.post('/subscribe', protectRoute, createSubscription)
router.post('/confirm-subscribe', protectRoute, handleConfirmSubscription)


export default router