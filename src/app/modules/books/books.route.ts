import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './books.controller';
import { createBookValidator } from './books.validation';

const router = express.Router();
router.post(
  '/create-book',
  validateRequest(createBookValidator.createBookZodSchema),
  BookController.createBook
);
router.get('/', BookController.getAllBook);
router.get('/:id', BookController.getSingelBook);
router.patch('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBooks);

export const BookRoutes = router;
