import { IProduct } from '../../interfaces/product.interface';
import { addProduct } from '../../apis/product.api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CreateProductPage = () => {
	const navigate = useNavigate();

	const initialProduct: Omit<IProduct, 'id'> = {
		name: '',
		price: 0,
		quantity: 0,
		images: [],
		description: '',
		category: '',
	};

	const [newProduct, setNewProduct] =
		useState<Omit<IProduct, 'id'>>(initialProduct);

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setNewProduct({
			...newProduct,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			console.log(newProduct);
			const images = [newProduct.images];
			await addProduct({
				...newProduct,
				images: images,
			});
			navigate('/products');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="flex-1 p-5">
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="mb-6">
					<label htmlFor="email" className="block mb-2 font-medium">
						Tên sản phẩm
					</label>
					<input
						type="text"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Tên sản phẩm"
						name="name"
						value={newProduct.name}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="email" className="block mb-2 font-medium">
						Giá của sản phẩm
					</label>
					<input
						type="number"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Giá sản phẩm"
						name="price"
						value={newProduct.price}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="email" className="block mb-2 font-medium">
						Số lượng sản phẩm
					</label>
					<input
						type="number"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Số lượng sản phẩm"
						name="quantity"
						value={newProduct.quantity}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="email" className="block mb-2 font-medium">
						Danh mục sản phẩm
					</label>
					<input
						type="text"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Danh mục sản phẩm"
						name="category"
						value={newProduct.category}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="email" className="block mb-2 font-medium">
						Link ảnh sản phẩm
					</label>
					<input
						type="text"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Link ảnh sản phẩm"
						name="images"
						value={newProduct.images}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="email" className="block mb-2 font-medium">
						Mô tả sản phẩm
					</label>
					<textarea
						placeholder="Mô tả sản phẩm"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						cols={30}
						name="description"
						rows={10}
						value={newProduct.description}
						onChange={(e) => handleChange(e)}
					></textarea>
				</div>

				<button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
					Thêm sản phẩm
				</button>
			</form>
		</div>
	);
};

export default CreateProductPage;
