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

const getAllBook: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, iBookFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);

    const result = await BookService.getAllBook(filters, paginationOptions);

    sendResponse<IBook[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Books fetched successfully!',
      meta: result.meta,
      data: result.data,
    });
  }
);

export const BookController = {
  createBook,
  getAllBook,
};
