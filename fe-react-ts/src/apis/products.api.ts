import { IProduct } from '../interfaces/product.interface';
import { instance } from './instance';

// instance = localhost:3000/products
// lấy ra tất cả sản phẩm
export const getAllProducts = async () => {
	return await instance.get('/products');
};

// lấy ra sản phẩm theo id
export const getProductById = async (id: string) => {
	return await instance.get(`/products/${id}`);
};

// tạo mới sản phẩm
export const createProduct = async (product: Omit<IProduct, 'id'>) => {
	return await instance.post('/products', product);
};

// cập nhật sản phẩm
export const updateProduct = async (product: IProduct) => {
	return await instance.put(`/products/${product.id}`, product);
};

// xóa sản phẩm
export const deleteProduct = async (id: number) => {
	return await instance.delete(`/products/${id}`);
};
