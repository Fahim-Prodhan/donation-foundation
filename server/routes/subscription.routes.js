import express from 'express';
import { createSubscription,handleConfirmSubscription,findUserActiveSubscription , cancelSubscription,cancel} from '../controllers/subscription.controller.js';
import protectRoute from "../middleware/protectRoute.js";



const router = express.Router();

router.post('/subscribe', protectRoute, createSubscription)
router.post('/confirm-subscribe', protectRoute, handleConfirmSubscription)
router.get('/find-subscription', protectRoute, findUserActiveSubscription)
router.post('/cancel-subscription', protectRoute, cancelSubscription)
router.post('/cancel', cancel)


export default router