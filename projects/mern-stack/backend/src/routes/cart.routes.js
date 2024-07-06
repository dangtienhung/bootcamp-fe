import express from 'express';
import { cartController } from '../controllers/cart.controller.js';
import { addToCartMiddleware } from '../middlewares/cart.middleware.js';
import { verifyToken } from '../middlewares/verify-token.middleware.js';
import { wrapRequestHandler } from '../utils/handlers.util.js';

const router = express.Router();

router.post(
  '/cart',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(addToCartMiddleware),
  wrapRequestHandler(cartController.addCart),
);

export default router;
