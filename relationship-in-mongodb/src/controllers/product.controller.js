import { isObjectIdOrHexString } from 'mongoose';
import { HTTP_STATUS } from '../common/http-status.common.js';
import Category from '../schemas/category.schema.js';
import Product from '../schemas/product.schema.js';
import { handleAsync } from '../utils/trycatch.js';

// tạo sản phẩm
export const createProduct = handleAsync(async (req, res) => {
	const body = req.body; // Lấy dữ liệu từ người dùng gửi lên

	const newProduct = await Product.create(body); // Tạo mới sản phẩm

	if (!newProduct) {
		return res
			.status(HTTP_STATUS.BAD_REQUEST)
			.json({ message: 'Create product failed' });
	}

	// check id category có tồn tại không
	const isExistCategory = await Category.findById({ _id: body.categoryId });

	if (!isExistCategory) {
		return res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'Category not found',
		});
	}
	// tiến hành thêm id product vào mảng productIds của category
	const category = await Category.findByIdAndUpdate(
		{ _id: body.categoryId },
		{ $addToSet: { productIds: newProduct._id } }, // thêm id product vào mảng productIds
		{ new: true }
	);

	if (!category) {
		return res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'Add product to category failed',
		});
	}

	return res.status(HTTP_STATUS.CREATED).json({
		message: 'Create product successfully',
		data: newProduct,
	});
});

// lấy ra danh sách sản phẩm
export const getProduct = handleAsync(async (req, res) => {
	const { _page = 1, _limit = 10, q } = req.query;

	const options = {
		page: _page,
		limit: _limit,
		populate: [{ path: 'categoryId', select: '-productIds' }],
	};

	let query = {};

	if (q) {
		query = {
			$and: [
				{
					$or: [{ name: { $regex: new RegExp(q), $options: 'i' } }],
				},
			],
		};
	}

	const products = await Product.paginate(query, options);

	if (!products) {
		return res
			.status(HTTP_STATUS.BAD_REQUEST)
			.json({ message: 'Get product failed' });
	}

	return res.status(HTTP_STATUS.OK).json({
		message: 'Get product sucessfully',
		...products,
	});
});

// lấy ra sản phẩm theo id
export const getProductById = handleAsync(async (req, res) => {
	const { id } = req.params;
	const product = await Product.findById(id).populate({
		path: 'categoryId',
		select: '-productIds',
	});

	if (!product) {
		return res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'Get product fail',
		});
	}
	return res
		.status(HTTP_STATUS.OK)
		.json({ message: 'Get product succesfully', data: product });
});

// xóa sản phẩm
export const deleteProduct = handleAsync(async (req, res) => {
	const { id } = req.params;

	// check đúng định object id không
	if (!isObjectIdOrHexString(id)) {
		return res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'Invalid id',
		});
	}

	// check id product có tồn tại không
	const isExitProduct = await Product.findById({ _id: id });
	if (!isExitProduct) {
		return res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'Product not found',
		});
	}

	// check id category có tồn tại không
	const isExistCategory = await Category.findById({
		_id: isExitProduct.categoryId,
	});

	if (!isExistCategory) {
		return res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'Category not found',
		});
	}
	// tiến hành xoá id product ra khỏi mảng productIds của category
	const category = await Category.findByIdAndUpdate(
		{ _id: isExistCategory._id },
		{ $pull: { productIds: isExitProduct._id } }, // xoá id product ra khỏi mảng productIds
		{ new: true }
	);

	if (!category) {
		return res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'Add product to category failed',
		});
	}

	// xoá sản phẩm theo id
	const product = await Product.findByIdAndDelete(id);

	if (!product) {
		return res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'Delete product fail',
		});
	}

	return res
		.status(HTTP_STATUS.OK)
		.json({ message: 'Delete product succesfully', data: product });
});

// method PUT: cập nhật sản phẩm theo id
export const updateProductById = handleAsync(async (req, res) => {
	const { id } = req.params;
	const body = req.body;

	// check đúng định object id không
	if (!isObjectIdOrHexString(id)) {
		return res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'Invalid id',
		});
	}

	// check id product có tồn tại không
	const isExitProduct = await Product.findById({ _id: id });
	if (!isExitProduct) {
		return res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'Product not found',
		});
	}

	// check id category có tồn tại không
	const isExistCategory = await Category.findById({
		_id: isExitProduct.categoryId,
	});

	if (!isExistCategory) {
		return res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'Category not found',
		});
	}
	// tiến hành xoá id product ra khỏi mảng productIds của category
	const category = await Category.findByIdAndUpdate(
		{ _id: isExistCategory._id },
		{ $pull: { productIds: isExitProduct._id } }, // xoá id product ra khỏi mảng productIds
		{ new: true }
	);

	if (!category) {
		return res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'Add product to category failed',
		});
	}

	// cập nhật sản phẩm theo id
	const product = await Product.findByIdAndUpdate(id, body, { new: true });

	if (!product) {
		return res
			.status(HTTP_STATUS.BAD_REQUEST)
			.json({ message: 'update product failed' });
	}

	// check id category có tồn tại không
	const isExistCategoryUpdate = await Category.findById({
		_id: body.categoryId,
	});

	if (!isExistCategoryUpdate) {
		return res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'Category not found',
		});
	}
	// tiến hành thêm id product vào mảng productIds của category
	const categoryUpdate = await Category.findByIdAndUpdate(
		{ _id: body.categoryId },
		{ $addToSet: { productIds: product._id } }, // thêm id product vào mảng productIds
		{ new: true }
	);

	if (!categoryUpdate) {
		return res.status(HTTP_STATUS.BAD_REQUEST).json({
			message: 'Add product to category failed',
		});
	}

	return res.status(HTTP_STATUS.OK).json({
		message: 'update product sucessfully',
		data: product,
	});
});

// get get category =>
/*
id: category
name: category
children: [
  {
    id: product,
    name: product
    price: product
  }
]
*/

// techlead/ pm
