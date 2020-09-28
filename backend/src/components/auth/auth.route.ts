import express from 'express';
import { loginController, registerController } from './auth.controller';
import { loginValidation, registerValidation } from './auth.validation';

const router = express.Router();

router.post('/login', loginValidation, loginController);
router.post('/register', registerValidation, registerController);

export default router;
