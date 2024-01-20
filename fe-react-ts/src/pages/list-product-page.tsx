import { useEffect, useState } from 'react';

import ProductItem from '../components/buoi5/product-item';

export interface IProduct {
	id: number;
	name: string;
	price: number;
}

export interface ICourse {
	id: number;
	name: string;
	price: number;
	description: string;
	createAt: string;
}

const ListProductPage = () => {
	useEffect(() => {
		console.log('456');
		const fetchData = async () => {
			try {
				// call api thành công
				const response = await fetch('http://localhost:3000/products');
				const products = await response.json();
				setLists(products);
			} catch (error) {
				console.log('🚀 ~ fetchData ~ error:', error);
				// call api thất bại
			}
		};
		fetchData();
	}, []);

	console.log('123');
	const [lists, setLists] = useState<IProduct[]>([]);
	return (
		<div className="">
			{lists.map((value) => {
				return (
					<div
						key={value.id}
						className="mb-10 border  boder-b border-b-red-400"
					>
						<p>id:{value.id}</p>
						<p>
							name:
							{value.name}
						</p>
						<p>
							price:
							{value.price}
						</p>
					</div>
				);
			})}
		</div>
	);
};

interface ItemProductProps {
	product: ICourse;
}
const ItemProduct = ({ product }: ItemProductProps) => {
	return (
		<div>
			<div>{product.id}</div>
			<div>{product.name}</div>
			<div>{product.price}</div>
			<div>{product.description}</div>
			<div>{product.createAt}</div>
		</div>
	);
};

export default ListProductPage;
