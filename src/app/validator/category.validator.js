import { body } from 'express-validator';

export const validateCategory = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Category name is required'),
    body('description')
        .trim()
        .notEmpty()
        .withMessage('Description is required'),
];