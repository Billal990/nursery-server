import { Router } from 'express';
import { productControllers } from './product.controller';
import { productValidations } from './product.validation';
import { validateRequest } from '../../utils/validateRequest';

const router = Router();

router.get('/', productControllers.getAllProducts);
router.get('/:id', productControllers.getSingleProduct);
router.post(
  '/',
  validateRequest(productValidations.createProductValidationSchema),
  productControllers.createProduct,
);
router.put(
  '/:id',
  validateRequest(productValidations.updateProductValidationSchema),
  productControllers.updateProduct,
);
router.delete('/:id', productControllers.deleteProduct);

export const productRoutes = router;
