import { instances } from './instances';

// lấy ra tất cả các dữ liệu có trong database
export const getAllProducts = async () => {
	return await instances.get('/products');
};
