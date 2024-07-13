import { z } from 'zod';

const createProductValidationSchema = z.object({
  title: z.string(),
  category: z.string(),
  image: z.string(),
  description: z.string(),
  stock: z.number(),
  price: z.number(),
});
const updateProductValidationSchema = createProductValidationSchema.partial();

export const productValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
