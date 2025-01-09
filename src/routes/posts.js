import express from 'express';
import PostController from '../app/controllers/post.controller';

const router = express.Router();

router.get('/', PostController.all);
router.post('/', PostController.create);
router.get('/:id', PostController.findById);
router.put('/:id', PostController.update);
router.delete('/:id', PostController.delete);

export default router;