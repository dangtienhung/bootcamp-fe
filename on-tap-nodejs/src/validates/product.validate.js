import joi from 'joi';

export const createProductValidate = joi.object({
	name: joi.string().required().messages({
		'string.base': 'Tên sản phẩm phải là chuỗi',
		'string.empty': 'Tên sản phẩm không được để trống',
		'any.required': 'Tên sản phẩm là bắt buộc',
	}),
	price: joi.number().required().messages({
		'number.base': 'Giá sản phẩm phải là số',
		'number.empty': 'Giá sản phẩm không được để trống',
		'any.required': 'Giá sản phẩm là bắt buộc',
	}),
	description: joi.string().allow('').messages({
		'string.base': 'Mô tả sản phẩm phải là chuỗi',
	}),
	image: joi.string().required().messages({
		'string.base': 'Ảnh sản phẩm phải là chuỗi',
		'string.empty': 'Ảnh sản phẩm không được để trống',
		'any.required': 'Ảnh sản phẩm là bắt buộc ahihiihi',
	}),
	category: joi.string().required().messages({
		'string.base': 'Danh mục sản phẩm phải là chuỗi',
		'string.empty': 'Danh mục sản phẩm không được để trống',
		'any.required': 'Danh mục sản phẩm là bắt buộc',
	}),
	quantity: joi.number().required().messages({
		'number.base': 'Số lượng sản phẩm phải là số',
		'number.empty': 'Số lượng sản phẩm không được để trống',
		'any.required': 'Số lượng sản phẩm là bắt buộc',
	}),
});
