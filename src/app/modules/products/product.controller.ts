import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { productServices } from './product.service';

const getAllProducts = catchAsync(async (req, res) => {
  const result = await productServices.getAllProductsFromDB();
  sendResponse(res, {
    message: 'Retrieved products successfully.',
    success: true,
    data: result,
    statusCode: httpStatus.OK,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.getSingleProductFromDB(id);
  sendResponse(res, {
    message: 'Retrieved product successfully.',
    success: true,
    data: result,
    statusCode: httpStatus.OK,
  });
});

const createProduct = catchAsync(async (req, res) => {
  const result = await productServices.createProductIntoDB(req.body);
  sendResponse(res, {
    message: 'Created product successfully.',
    success: true,
    data: result,
    statusCode: httpStatus.OK,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.updateProductIntoDB(id, req.body);
  sendResponse(res, {
    message: 'Updated product successfully.',
    success: true,
    data: result,
    statusCode: httpStatus.OK,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.deleteProductFromDB(id);
  sendResponse(res, {
    message: 'Deleted product successfully.',
    success: true,
    data: result,
    statusCode: httpStatus.OK,
  });
});

export const productControllers = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
