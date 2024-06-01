import {
	createCategory,
	getAllCategories,
	updateCategory,
} from '../controllers/category.controller.js';

import express from 'express';
import { isObjectIdOrHexString } from 'mongoose';
import { httpStatus } from '../configs/http-status.config.js';
import Category from '../schemas/category.schema.js';

const router = express.Router();

// api/v1/category
router.get('/category', getAllCategories);

// create category
router.post('/category', createCategory);

// update category
router.put('/category/:categoryId', updateCategory);

// get one category
router.get('/category/:categoryId', async (req, res) => {
	try {
		const id = req.params.categoryId;

		// check id category
		if (!isObjectIdOrHexString(id)) {
			return res.status(httpStatus.BAD_REQUEST).json({
				// 400
				message: 'Id không hợp lệ',
				success: false,
			});
		}

		const category = await Category.findById(id);

		if (!category) {
			return res.status(httpStatus.NOT_FOUND).json({
				// 404
				message: 'Không tìm thấy category',
				success: false,
			});
		}

		return res.status(httpStatus.OK).json({
			message: 'get category',
			success: true,
			data: category,
		});
	} catch (error) {
		return res
			.status(httpStatus.INTERNAL_SERVER_ERROR) // 500
			.json({ message: 'Internal Server Error', success: false, data: error });
	}
});

// delete category
router.delete('/category/:categoryId', async (req, res) => {
	try {
		const id = req.params.categoryId;

		// check id category
		if (!isObjectIdOrHexString(id)) {
			return res.status(httpStatus.BAD_REQUEST).json({
				// 400
				message: 'Id không hợp lệ',
				success: false,
			});
		}

		const category = await Category.findByIdAndDelete(id);

		if (!category) {
			return res.status(httpStatus.NOT_FOUND).json({
				// 404
				message: 'Không tìm thấy category',
				success: false,
			});
		}

		return res.status(httpStatus.OK).json({
			message: 'Xóa category thành công!',
			success: true,
			data: category,
		});
	} catch (error) {
		return res
			.status(httpStatus.INTERNAL_SERVER_ERROR) // 500
			.json({ message: 'Internal Server Error', success: false, data: error });
	}
});

export default router;

// cách nối dữ liệu từ nhiều file
// phân trang dữ liệu
// query dữ liệu
// verify user
// upload
// validate dữ liệu đầu vào
// jwt
