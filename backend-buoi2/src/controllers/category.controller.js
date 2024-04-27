import Category from '../schemas/category.schema.js';
import { HTTP_STATUS } from '../common/http-status.common.js';

// tạo ra danh mục sản phẩm
export const createCategory = async (req, res) => {
	try {
		const body = req.body;
		const newCategory = await Category.create(body);

		if (!newCategory) {
			return res
				.status(HTTP_STATUS.BAD_REQUEST)
				.json({ message: 'create faild' });
		}

		return res.status(HTTP_STATUS.CREATED).json({
			message: 'create successfully',
			data: newCategory,
		});
	} catch (error) {
		return res
			.status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
			.json({ message: 'Internal server error' });
	}
};
