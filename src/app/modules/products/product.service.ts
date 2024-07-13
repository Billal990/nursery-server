import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import { TProduct } from './product.interface';
import { Product } from './product.schema';

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  // check if product exists
  if(!result){
    throw new AppError(httpStatus.NOT_FOUND, 'This product does not exists.');
  }
  return result;
};

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  // check if product exists
  const isProductExist = await Product.findById(id);
  if (!isProductExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This product does not exists.');
  }

  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  // check if product exists
  const isProductExist = await Product.findById(id);
  if (!isProductExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This product does not exists.');
  }

  const result = await Product.findByIdAndDelete(id, { new: true });
  return result;
};

export const productServices = {
  getAllProductsFromDB,
  getSingleProductFromDB,
  createProductIntoDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
