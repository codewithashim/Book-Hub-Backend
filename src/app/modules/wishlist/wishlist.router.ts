import express from 'express';
import { WishlistController } from './wishlist.controller';
import { createBookValidator } from '../books/books.validation';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router();

router.post(
  '/add-to-wishlist',
  validateRequest(createBookValidator.createBookZodSchema),
  WishlistController.addToWishlist
);

router.get('/get-wishlist', WishlistController.getWishlist);

router.get('/get-wishlist/:id', WishlistController.getWishlistById);

router.patch('/update-wishlist/:id', WishlistController.updateWishlist);

router.get(
  '/get-wishlist-by-user-email/:userEmail',
  WishlistController.getWishlistByUserEmail
);

router.delete('/delete-wishlist/:id', WishlistController.deleteWishlist);

export const WishlistRoutes = router;
