import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IBook } from './books.interface';
import { BookService } from './books.service';
import { iBookFilterableFields } from './books.constant';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

const createBook: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const bookData = req.body;
    const result = await BookService.createBook(bookData);
    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book created successfully!',
      data: result,
    });
  }
);

const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, iBookFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await BookService.getAllBook(filters, paginationOptions);

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingelBook = catchAsync(async (req: Request, res: Response) => {
  const bookId = req.params.id;
  const result = await BookService.getSingleBook(bookId);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book fetched successfully',
    data: result,
  });
});

const updateBook: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const bookId = req.params.id;
    const bookData = req.body;
    const result = await BookService.updateBook(bookId, bookData);
    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book updated successfully!',
      data: result,
    });
  }
);

const deleteBooks: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const bookId = req.params.id;
    const result = await BookService.deleteBook(bookId);
    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book delete successfully!',
      data: result,
    });
  }
);

export const BookController = {
  createBook,
  getAllBook,
  getSingelBook,
  updateBook,
  deleteBooks,
};
