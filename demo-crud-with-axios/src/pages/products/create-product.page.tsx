/* eslint-disable @typescript-eslint/no-explicit-any */

import { initialInputData, initialProduct } from './utils/init';

import FormGroup from '../../components/forms/form-group';
import FormInput from '../../components/forms/form-input';
import { IProduct } from '../../interfaces/product.interface';
import { addProduct } from '../../apis/product.api';
import { handleChange } from './utils/handleChangeInput';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CreateProductPage = () => {
	const navigate = useNavigate();

	const [newProduct, setNewProduct] =
		useState<Omit<IProduct, 'id'>>(initialProduct);
	const initial = initialInputData({ newProduct });

	const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleChange({ event, newProduct, setNewProduct });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const images = [newProduct.images] as any;
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
				{initial.map((inputItem, index) => (
					<FormGroup title={inputItem.title} id={inputItem.id} key={index}>
						<FormInput
							name={inputItem.name}
							value={inputItem.value as string | number}
							placeholder={inputItem.placeholder}
							handleChange={(e) => handleChangeInput(e)}
							className={inputItem.className}
						/>
					</FormGroup>
				))}

				<button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
					Thêm sản phẩm
				</button>
			</form>
		</div>
	);
};

export default CreateProductPage;
