import express from 'express';
import { createPayment,successTransaction } from '../controllers/payment.controller.js';
import protectRoute from "../middleware/protectRoute.js";


const router = express.Router();

router.post('/create-payment',protectRoute, createPayment)
router.post('/pay-success',successTransaction)


export default router