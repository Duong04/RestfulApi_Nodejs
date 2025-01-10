import express from 'express';
import AuthController from '../app/controllers/auth.controller';
import { validateRegister } from '../app/validator/register.validator';
import { validateLogin } from '../app/validator/login.validator';

const router = express.Router();

router.post('/register', validateRegister, AuthController.register);
router.post('/login', validateLogin, AuthController.login);


export default router;