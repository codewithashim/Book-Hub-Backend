import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { createUserValidator } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(createUserValidator.createUserZodSchema),
  UserController.createUser
);

router.get('/email/:email', UserController.getUserByEmail);
router.get('/id/:id', UserController.getUserById);
router.get('/', UserController.getAllUsers);

export const UserRoutes = router;
