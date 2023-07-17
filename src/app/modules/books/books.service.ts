import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { IBook } from './books.interface';
import { Book } from './books.model';

const createBook = async (payload: IBook): Promise<IBook> => {
  try {
    const book = new Book(payload);
    await book.save();
    return book;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

export const BookService = {
  createBook,
};
