// children: nhận giá trị từ component cha truyền vào

import { useState } from 'react';

interface IProduct {
	id: number;
	name: string;
	price: number;
}

const Buoi5 = () => {
	const productsArray = [
		{ id: 1, name: 'iphone', price: 1000 },
		{ id: 2, name: 'iphone 2', price: 2000 },
		{ id: 3, name: 'iphone 3', price: 3000 },
	];
	const [products, setproducts] = useState<IProduct[]>(productsArray);
	return (
		<div className="">
			{products.map((value, index) => {
				return (
					<div
						className="bg-blue-200 mb-5 p-2 rounded flex items-center gap-2"
						key={index}
					>
						<div>{value.id}</div>
						<div>{value.name}</div>
						<div>{value.price}</div>
					</div>
				);
			})}
		</div>
	);
};

export default Buoi5;
