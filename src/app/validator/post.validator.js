import { body } from 'express-validator';

export const validateCategory = [
    body('title')
        .trim()
        .notEmpty()
        .withMessage('Title is required')
        .trim(),
    body('description')
        .trim()
        .notEmpty()
        .withMessage('Description is required'),
    body('content')
        .trim()
        .notEmpty()
        .withMessage('Content is required'),
    body('image')
        .trim()
        .notEmpty()
        .withMessage('Image is required'),
    body('category_id')
        .trim()
        .notEmpty()
        .withMessage('Category_id is required'),
];