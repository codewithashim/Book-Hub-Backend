import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { WishList } from './wishlist.model';
import { IWishList } from './wishlist.interface';

const addToWishlist = async (wishlist: IWishList): Promise<IWishList> => {
  try {
    const wishlistItem = new WishList(wishlist);
    await wishlistItem.save();
    return wishlistItem;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

const getWishlist = async (): Promise<IWishList[]> => {
  try {
    const wishlist = await WishList.find();
    return wishlist;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

const getWishlistById = async (id: string): Promise<IWishList> => {
  try {
    const wishlist = await WishList.findById(id);
    if (!wishlist) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Wishlist not found');
    }
    return wishlist;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

const updateWishlist = async (
  id: string,
  payload: IWishList
): Promise<IWishList> => {
  try {
    const result = await WishList.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
    if (!result) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Wishlist not found');
    }
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

const getWishlistByUserEmail = async (
  userEmail: string
): Promise<IWishList> => {
  try {
    const user = await WishList.findOne({ userEmail: userEmail });
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Wishlist not found');
    }
    return user;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

const deleteWishlist = async (id: string): Promise<IWishList> => {
  try {
    const result = await WishList.findByIdAndDelete(id);
    if (!result) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Wishlist not found');
    }
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

export const WishListService = {
  addToWishlist,
  getWishlist,
  getWishlistById,
  updateWishlist,
  getWishlistByUserEmail,
  deleteWishlist,
};
