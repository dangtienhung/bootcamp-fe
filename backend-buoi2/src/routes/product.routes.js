import {
	createProduct,
	deleteProductById,
	getProductById,
	getProducts,
	updateProductById,
} from '../controllers/product.controller.js';

import express from 'express';

const router = express.Router();

// app.use() - Middleware: app.use() => có thể sử dụng middleware
// app.get() - GET: app.get() => có thể lấy dữ liệu từ server
// app.post() - POST: app.post() => có thể thêm dữ liệu vào server
// app.put() - PUT: app.put() => có thể cập nhật dữ liệu trên server
// app.delete() - DELETE: app.delete() => có thể xóa dữ liệu trên server
// app.patch() - DELETE: app.delete() => có thể xóa dữ liệu trên server

// routers

// POST /api/products
router.post('/products', createProduct);
// GET /api/products
router.get('/products', getProducts);
// GET /api/products/:id
router.get('/products/:productId', getProductById);
// DELETE /api/products/:productId
router.delete('/products/:productId', deleteProductById);
// PUT /api/products/:productId
router.put('/products/:productId', updateProductById);
router.patch('/products/:productId', updateProductById);

export default router;
