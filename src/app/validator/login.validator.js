import { body } from 'express-validator';

export const validateLogin = [
    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Email invalid'),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('Password is required')
];