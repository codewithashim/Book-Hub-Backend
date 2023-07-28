import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { BookRoutes } from '../modules/books/books.route';
import { WishlistRoutes } from '../modules/wishlist/wishlist.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/wishlist',
    route: WishlistRoutes,
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
