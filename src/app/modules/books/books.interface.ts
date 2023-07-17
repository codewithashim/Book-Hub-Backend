import { Model } from 'mongoose';

export type IUser = {
  userName: string;
  userProfile: string;
};

export type IReview = {
  user: IUser;
  comment: string;
};

export type IBook = Document & {
  status: string;
  title: string;
  description: string;
  author: string;
  genre: string;
  publicationYear: string;
  image: string;
  reviews: IReview[];
};

export type BookModel = Model<IBook, Record<string, unknown>>;
