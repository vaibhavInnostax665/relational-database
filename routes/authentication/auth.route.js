import express  from 'express';
import { loginController, logoutController, signupController } from '../../controllers/authentication.controller.js';



const router = express.Router();

router.post("/login",loginController);
router.post("/signup",signupController);
router.get('/logout',logoutController);

export default router;