import express from 'express';
import { createSubscription } from '../controllers/subscription.controller.js';
import protectRoute from "../middleware/protectRoute.js";



const router = express.Router();

router.post('/subscribe', protectRoute, createSubscription)


export default router