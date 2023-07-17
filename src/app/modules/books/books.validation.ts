import { z } from 'zod';

const userZodSchema = z.object({
  userName: z.string(),
  userProfile: z.string().url(),
});

const reviewZodSchema = z.object({
  user: userZodSchema,
  comment: z.string(),
});

const bookZodSchema = z.object({
  status: z.string().optional(),
  title: z.string(),
  description: z.string(),
  author: z.string(),
  genre: z.string(),
  publicationYear: z.string(),
  image: z.string().url(),
  reviews: z.array(reviewZodSchema).optional(),
});

const createBookZodSchema = z.object({
  body: bookZodSchema,
});

export const createBookValidator = {
  createBookZodSchema,
};
