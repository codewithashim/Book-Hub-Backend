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

export const BookRoutes = router;
