// routes/blogRoutes.js

import express from 'express';
import {getCheckoutSession ,handleSuccess} from '../controllers/donate.controller.js'
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.post('/cheakout',protectRoute,getCheckoutSession);
router.post('/success',handleSuccess );


export default router;
