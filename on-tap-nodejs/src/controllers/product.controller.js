import { httpStatus } from '../configs/http-status.config.js';
import { createProductModel } from '../models/product.model.js';
import { messageResponse } from '../utils/message.util.js';
import { createProductValidate } from '../validates/product.validate.js';

export const createProduct = async (req, res) => {
	try {
		const body = req.body;

		// validate
		const error = createProductValidate.validate(body, {
			abortEarly: false,
		});
		if (error) {
			if (error.error) {
				const message = error.error.details.map((item) => ({
					message: item.message,
					name: item.context.label,
				}));
				return messageResponse({
					res,
					success: false,
					status: httpStatus.BAD_REQUEST,
					message: message,
				});
			}
		}

		// tạo product
		const product = await createProductModel(body);

		if (!product) {
			return messageResponse({
				res,
				success: false,
				status: httpStatus.BAD_REQUEST,
				message: 'Tạo product không thành công!',
			});
		}

		return messageResponse({
			res,
			status: httpStatus.CREATED, // 201
			message: 'Tạo product thành công!',
			success: true,
			data: product,
		});
	} catch (error) {
		return messageResponse({
			res,
			status: httpStatus.INTERNAL_SERVER_ERROR,
			message: 'Internal Server Error',
			success: false,
			data: error,
		});
	}
};

// crud users (name, email, password, role('admin'|'staff'|'customer'), phone, address)
