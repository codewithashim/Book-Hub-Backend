import { Schema, model } from 'mongoose';
import { BookModel, IBook, IReview } from './books.interface';

const reviewSchema = new Schema<IReview, Record<string, never>>(
  {
    user: {
      userName: { type: String, required: true },
      userProfile: { type: String, required: true },
    },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

const bookSchema = new Schema<IBook, Record<string, never>>(
  {
    status: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publicationYear: { type: String, required: true },
    image: { type: String, required: true },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Books = model<IBook, BookModel>('Books', bookSchema);
