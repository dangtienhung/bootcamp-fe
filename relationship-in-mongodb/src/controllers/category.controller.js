import { HTTP_STATUS } from '../common/http-status.common.js';
import Category from '../schemas/category.schema.js';
import { handleAsync } from '../utils/trycatch.js';

// tạo danh mục
export const createCategory = handleAsync(async (req, res) => {
	const body = req.body;
	const category = await Category.create(body);

	if (!category) {
		return res
			.status(HTTP_STATUS.BAD_REQUEST)
			.json({ message: 'create category failed' });
	}

	return res.status(HTTP_STATUS.CREATED).json({
		message: 'create category successfully',
		data: category,
	});
});

// lấy ra danh sách danh mục
export const getCategoty = handleAsync(async (req, res) => {
	const params = req.query;
	console.log('🚀 ~ getCategoty ~ params:', params);

	const { _page = 1, _limit = 10, q } = params;

	const options = {
		page: _page,
		limit: _limit,
		populate: [{ path: 'productIds', select: '-categoryId -category' }],
		// select: '-productIds',
	};

	const query = q
		? {
				$and: [
					// $and là toán tử logic trong mongodb để tìm kiếm theo nhiều điều kiện
					{
						$or: [
							{ nameCategory: { $regex: new RegExp(q), $options: 'i' } }, // regex là biểu thức chính quy dungf để tìm kiếm theo chuỗi
							{ image: { $regex: new RegExp(q), $options: 'i' } },
						],
					},
				],
		  }
		: {};

	const category = await Category.paginate(query, options);
	if (!category) {
		return res
			.status(HTTP_STATUS.BAD_REQUEST)
			.json({ message: 'get category failed' });
	}

	return res.status(HTTP_STATUS.OK).json({
		message: 'get category sucessfully',
		...category,
	});
});

// lấy ra danh sách danh mục theo id
export const getCategotyById = handleAsync(async (req, res) => {
	const { id } = req.params;
	const category = await Category.findById(id).populate({
		path: 'productIds',
		select: '-categoryId -category',
	});

	if (!category) {
		return res
			.status(HTTP_STATUS.BAD_REQUEST)
			.json({ message: 'get category failed' });
	}

	return res.status(HTTP_STATUS.OK).json({
		message: 'get category sucessfully',
		data: category,
	});
});

// xóa danh mục
export const deleteCategory = handleAsync(async (req, res) => {
	const { id } = req.params;
	const category = await Category.findByIdAndDelete(id);

	if (!category) {
		return res
			.status(HTTP_STATUS.BAD_REQUEST)
			.json({ message: 'delete category failed' });
	}

	return res.status(HTTP_STATUS.OK).json({
		message: 'delete category sucessfully',
		data: category,
	});
});

// cập nhật danh mục
export const updateCategoryById = handleAsync(async (req, res) => {
	const { id } = req.params;
	const body = req.body;
	const category = await Category.findByIdAndUpdate(id, body, { new: true });

	if (!category) {
		return res
			.status(HTTP_STATUS.BAD_REQUEST)
			.json({ message: 'update category failed' });
	}

	return res.status(HTTP_STATUS.OK).json({
		message: 'update category sucessfully',
		data: category,
	});
});
