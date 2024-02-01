import { IProduct } from '../interfaces/product.interface';
import { instances } from './instances';

// lấy ra tất cả các dữ liệu có trong database
export const getAllProducts = async () => {
	return await instances.get('/products');
};

// xóa một sản phẩm
export const deleteProduct = async (id: number) => {
	return await instances.delete(`/products/${id}`);
};

// thêm một sản phẩm mới
export const addProduct = async (product: Omit<IProduct, 'id'>) => {
	return await instances.post('/products', product);
};

// cập nhật một sản phẩm
export const updateProduct = async (product: IProduct) => {
	return await instances.put(`/products/${product.id}`, product);
};
