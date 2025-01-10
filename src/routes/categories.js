import express from 'express';
import CategoryController from '../app/controllers/category.controller';
import { validateCategory } from '../app/validator/category.validator';
import { auth } from '../app/middleware/auth.middleware';

const router = express.Router();

router.get('/', auth, CategoryController.all);
router.post('/', validateCategory, CategoryController.create);
router.get('/:id', CategoryController.findById);
router.put('/:id', CategoryController.update);
router.delete('/:id', CategoryController.delete);

export default router;