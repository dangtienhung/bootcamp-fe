import { IProduct } from '../../../interfaces/product.interface';

interface IinitialInputData {
	newProduct: Omit<IProduct, 'id'>;
}

// initproduct state
export const initialProduct: Omit<IProduct, 'id'> = {
	name: '',
	price: 0,
	quantity: 0,
	images: [],
	description: '',
	category: '',
};

//
export const initialInputData = ({ newProduct }: IinitialInputData) => {
	const initial = [
		{
			id: 'name',
			name: 'name',
			title: 'Tên sản phẩm',
			value: newProduct.name,
			placeholder: 'Tên sản phẩm',
			className: 'boder border-red-500',
		},
		{
			id: 'price',
			name: 'price',
			title: 'Giá của sản phẩm',
			value: newProduct.price,
			placeholder: 'Giá sản phẩm',
			className: '',
		},
		{
			id: 'quantity',
			name: 'quantity',
			title: 'Số lượng sản phẩm',
			value: newProduct.quantity,
			placeholder: 'Số lượng sản phẩm',
			className: '',
		},
		{
			id: 'description',
			name: 'description',
			title: 'Mô tả sản phẩm',
			value: newProduct.description,
			placeholder: 'Mô tả sản phẩm',
			className: 'boder border-red-500',
		},
		{
			id: 'category',
			name: 'category',
			title: 'Danh mục sản phẩm',
			value: newProduct.category,
			placeholder: 'Danh mục sản phẩm',
			className: '',
		},
		{
			id: 'images',
			name: 'images',
			title: 'Link ảnh sản phẩm',
			value: newProduct.images,
			placeholder: 'Link ảnh sản phẩm',
			className: '',
		},
	];
	return initial;
};
