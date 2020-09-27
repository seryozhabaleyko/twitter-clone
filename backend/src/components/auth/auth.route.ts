import express from 'express';
import { loginController, registerController } from './auth.controller';

const router = express.Router();

export const loginRoute = router.post('/login', loginController);
export const registerRoute = router.post('/register', registerController);
