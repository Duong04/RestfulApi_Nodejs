import { body } from 'express-validator';
import User from '../models/user.model';

export const validateRegister = [
    body('fullname')
        .trim()
        .notEmpty()
        .withMessage('Fullname name is required'),
    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Email invalid')
        .custom(async (email) => {
            const existingUser = await User.findOne({email});
            if (existingUser) {
                throw new Error('Email is already in use');
            }
            return true;
        }),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 7 }),
];