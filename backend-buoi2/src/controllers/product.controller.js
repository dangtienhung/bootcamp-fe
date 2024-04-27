import { HTTP_STATUS } from '../common/http-status.common.js';
import Product from '../schemas/product.schema.js';

// tạo sản phẩm
export const createProduct = async (req, res) => {
	try {
		const body = req.body; // lấy dữ liệu từ người dùng gửi lên

		const newProduct = await Product.create(body); // tạo mới sản phẩm

		if (!newProduct) {
			return res
				.status(HTTP_STATUS.BAD_REQUEST)
				.json({ message: 'Create product failed' }); // trả về thông báo nếu tạo sản phẩm thất bại
		}

		return res.status(HTTP_STATUS.CREATED).json({
			// trả về thông báo nếu tạo sản phẩm thành công
			message: 'Create product successfully',
			data: newProduct,
		});
	} catch (error) {
		return res
			.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
			.json({ message: 'Internal server error' });
	}
};

// lấy danh sách sản phẩm
export const getProducts = async (req, res) => {
	try {
		const products = await Product.find(); // lấy tất cả sản phẩm

		if (!products) {
			return res
				.status(HTTP_STATUS.BAD_REQUEST)
				.json({ message: 'Get products failed' });
		}

		return res.status(HTTP_STATUS.OK).json({
			message: 'Get products successfully',
			data: products,
		});
	} catch (error) {
		// https status
		return res
			.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
			.json({ message: 'Internal server error' });
	}
};

// lấy sản phẩm theo id
export const getProductById = async (req, res) => {
	try {
		const productId = req.params.productId;

		const product = await Product.findById(productId);

		if (!product) {
			return res
				.status(HTTP_STATUS.BAD_REQUEST)
				.json({ message: 'Get product failed' });
		}

		return res.status(HTTP_STATUS.OK).json({
			message: 'Get product successfully',
			data: product,
		});
	} catch (error) {
		return res
			.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
			.json({ message: 'Internal server error' });
	}
};

// xoá sản phẩm theo id
export const deleteProductById = async (req, res) => {
	try {
		const productId = req.params.productId;

		const product = await Product.findByIdAndDelete(productId);

		if (!product) {
			return res
				.status(HTTP_STATUS.BAD_REQUEST)
				.json({ message: 'Delete product failed' });
		}

		return res.status(HTTP_STATUS.OK).json({
			message: 'Delete product successfully',
			data: product,
		});
	} catch (error) {
		return res
			.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
			.json({ message: 'Internal server error' });
	}
};

// method PUT: cập nhật sản phẩm theo id
export const updateProductById = async (req, res) => {
	try {
		const { productId } = req.params;
		const body = req.body;

		const product = await Product.findByIdAndUpdate(productId, body, {
			new: true,
		});

		if (!product) {
			return res
				.status(HTTP_STATUS.BAD_REQUEST)
				.json({ message: 'Update product failed' });
		}

		return res.status(HTTP_STATUS.OK).json({
			message: 'Update product successfully',
			data: product,
		});
	} catch (error) {
		return res
			.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
			.json({ message: 'Internal server error' });
	}
};
