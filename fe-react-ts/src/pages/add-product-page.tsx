import { AxiosError } from 'axios';
import { createProduct } from '../apis/products.api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface IProduct {
	id: number;
	name: string;
	price: number;
}

const AddProductPage = () => {
	// router navigate
	const router = useNavigate();

	const [nameProduct, setNameProduct] = useState<string>('');
	const [priceProduct, setPriceProduct] = useState<number>(0);

	const handleNameProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNameProduct(event.target.value);
	};

	const handlePriceProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPriceProduct(event.target.valueAsNumber);
	};

	const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			// omit: bỏ đi 1 thuộc tính nào đó của 1 object
			const newProduct: Omit<IProduct, 'id'> = {
				name: nameProduct,
				price: priceProduct,
			};
			await createProduct(newProduct);
			toast.success('Wow so easy!');
			// sau khi gửi dữ liệu thành công thì sẽ chuyển hướng về trang list-product
			router('/');
		} catch (error) {
			console.log('🚀 ~ handleSubmitForm ~ error:', error);
			toast.error((error as AxiosError).message);
		}
	};

	return (
		<div className="h-screen bg-gray-300 flex justify-center items-center">
			<div className="flex flex-col items-center gap-4">
				<h2 className="text-2xl font-bold">Thêm sản phẩm</h2>
				<form
					onSubmit={(event) => handleSubmitForm(event)}
					className="flex flex-col items-center gap-4 bg-white shadow-md rounded-lg p-4 w-[500px]"
				>
					<input
						type="text"
						className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
						placeholder="name product"
						value={nameProduct}
						onChange={(event) => handleNameProduct(event)}
					/>
					<input
						type="number"
						className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
						placeholder="price product"
						value={priceProduct}
						onChange={(event) => handlePriceProduct(event)}
					/>
					<button className="bg-blue-500 text-white p-2 w-full rounded-lg hover:bg-purple-500">
						Thêm sản phẩm
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddProductPage;
