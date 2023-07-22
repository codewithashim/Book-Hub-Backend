import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { IBook, IBooksFilters } from './books.interface';
import { Book } from './books.model';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { iBookSearchableFields } from './books.constant';
import { SortOrder } from 'mongoose';
import { IGenericResponse } from '../../../interfaces/common';

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

const getAllBook = async (
  filters: IBooksFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IBook[]>> => {
  const { limit, page, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: iBookSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i', 
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};


  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Book.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Book.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};




export const BookService = {
  createBook,
  getAllBook,
};
