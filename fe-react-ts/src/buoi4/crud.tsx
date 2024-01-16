// https://github.com/dangtienhung/bootcamp-react.git

import { useState } from 'react';

interface Product {
	id: number;
	name: string;
	price: number;
}

const CrudBuoi4 = () => {
	const arrayData: Product[] = [
		{ id: 1, name: 'iphone', price: 1000 },
		{ id: 2, name: 'sam sung', price: 2000 },
	];

	const [nameProduct, setNameProduct] = useState<string>('');
	const [priceProduct, setPriceProduct] = useState<number>(0);
	const [products, setProducts] = useState<Product[]>(arrayData);

	/* tạo sự kiện on change input */
	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setNameProduct(value);
	};

	const handleOnChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
		const price = event.target.valueAsNumber;
		setPriceProduct(price);
	};
	/* tạo sự kiện add product */
	const handleAddProduct = () => {
		const newProduct: Product = {
			id: Math.random(),
			name: nameProduct,
			price: priceProduct,
		};
		const newData = [...products, newProduct];
		setProducts(newData);
	};

	return (
		<div className="h-screen bg-gray-100 flex justify-center items-center">
			<div className="w-[500px] bg-white">
				<h1 className="text-lg text-center">thêm - sửa - xóa</h1>

				<div className="w-full flex items-center gap-4">
					<div className="flex items-center justify-between gap-4 w-full">
						<input
							type="text"
							className="border border-gray-200 rounded py-2 px-2 w-full"
							placeholder="Nhập tên sản phẩm"
							value={nameProduct}
							onChange={(event) => handleOnChange(event)}
						/>
						<input
							type="number"
							className="border border-gray-200 rounded py-2 px-2 w-full"
							placeholder="Nhập giá sản phẩm"
							value={priceProduct}
							onChange={(event) => handleOnChangePrice(event)}
						/>
					</div>
					<button
						onClick={() => handleAddProduct()}
						className="bg-blue-500 rounded text-white py-2 px-2"
					>
						Thêm
					</button>
				</div>

				<div className="flex flex-col gap-2 mt-10">
					{products.map((data) => (
						<div key={data.id} className="flex items-center px-4">
							<div className="flex-1">
								<h2>{data.name}</h2>
								<p>${data.price}</p>
							</div>
							<div className="flex items-center gap-3">
								<button className="bg-blue-500 rounded text-white py-2 px-2">
									Sửa
								</button>
								<button className="bg-red-500 rounded text-white py-2 px-2">
									Xóa
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CrudBuoi4;
