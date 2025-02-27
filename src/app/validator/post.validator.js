import { body } from 'express-validator';

export const validateCategory = [
    body('title')
        .trim()
        .notEmpty()
        .withMessage('Title is required'),
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
    body('status')
        .trim()
        .isIn(['active', 'inactive', 'draft'])
        .withMessage('Status must be one of: active, inactive, draft'),
    body('category')
        .trim()
        .exists()
        .notEmpty()
        .withMessage('Category_id is required'),
];