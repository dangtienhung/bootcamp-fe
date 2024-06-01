import Product from '../schemas/product.schema.js';

export const createProductModel = async (body) => {
	const result = await Product.create(body);
	return result;
};
