import express from 'express';
import AuthController from '../app/controllers/auth.controller';
import { validateRegister } from '../app/validator/register.validator';
import { validateLogin } from '../app/validator/login.validator';
import { auth } from '../app/middleware/auth.middleware';

const router = express.Router();

router.post('/register', validateRegister, AuthController.register);
router.post('/login', validateLogin, AuthController.login);
router.post('/logout', auth, AuthController.logout);


export default router;