import { Model } from 'mongoose';

export type IReview = {
  userName?: string;
  userProfile?: string;
  comment: string;
};

export type IStatus = 'reading' | 'plan to read' | 'finish reading' | 'none';

export type IBook = Document & {
  status?: IStatus;
  title: string;
  description: string;
  author: string;
  genre: string;
  email: string;
  publicationYear: string;
  image: string;
  reviews?: IReview[];
};

export type BookModel = Model<IBook, Record<string, unknown>>;

export type IBooksFilters = {
  searchTerm?: string;
  genre?: string;
  title?: string;
  publicationYear?: string;
};
