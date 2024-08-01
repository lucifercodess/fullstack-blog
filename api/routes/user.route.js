import express from 'express';
import { userController } from '../controllers/user.controller.js';

const router = express.Router();


router.get("/test",userController);
router.get('/',(req,res)=>res.send('home'))

export default router;