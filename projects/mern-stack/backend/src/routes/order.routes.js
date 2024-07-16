import express from 'express';
import { orderController } from '../controllers/order.controller.js';
import { checkPermission } from '../middlewares/check-permission.middleware.js';
import { orderMiddleware } from '../middlewares/order.middleware.js';
import { verifyToken } from '../middlewares/verify-token.middleware.js';
import { wrapRequestHandler } from '../utils/handlers.util.js';

const router = express.Router();

// thêm mới đơn hàng
router.post(
  '/order',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(orderMiddleware),
  wrapRequestHandler(orderController.createOrder),
);

// lấy danh sách đơn hàng theo userId
router.get('/order/:userId', wrapRequestHandler(verifyToken), wrapRequestHandler(orderController.getOrdersByUserId));

// lấy danh sách đơn hàng
router.get(
  '/orders',
  wrapRequestHandler(verifyToken),
  wrapRequestHandler(checkPermission),
  wrapRequestHandler(orderController.getAllOrders),
);

export default router;
