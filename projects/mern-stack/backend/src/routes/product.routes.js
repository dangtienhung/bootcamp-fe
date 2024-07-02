import { checkPermission } from '../middlewares/check-permission.middleware.js';
import express from 'express';
import { productController } from '../controllers/product.controller.js';
import { productMiddleware } from '../middlewares/product.middleware.js';
import { verifyToken } from '../middlewares/verify-token.middleware.js';
import { wrapRequestHandler } from '../utils/handlers.util.js';

const router = express.Router();

router.post(
  '/product',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(productMiddleware),
  wrapRequestHandler(productController.addProduct),
);

// router to get all products
router.get('/products', wrapRequestHandler(productController.getAllProduct));
// router to get product by id
router.get('/product/:id', wrapRequestHandler(productController.getProductById));
// router get product with status
router.get('/products/status', wrapRequestHandler(productController.getProductWithStatus));

export default router;
