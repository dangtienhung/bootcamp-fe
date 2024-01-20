import ProductItem from '../components/buoi5/product-item';
import { useState } from 'react';

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
	const coursesList: ICourse[] = [
		{
			id: 1,
			name: 'ReactJS',
			price: 100,
			description: 'ReactJS là một thư viện JavaScript',
			createAt: '2021-09-22',
		},
		{
			id: 2,
			name: 'NodeJS',
			price: 200,
			description: 'NodeJS là một thư viện JavaScript',
			createAt: '2021-09-22',
		},
		{
			id: 3,
			name: 'Angular',
			price: 300,
			description: 'Angular là một thư viện JavaScript',
			createAt: '2021-09-22',
		},
	];

	const [lists, setLists] = useState<ICourse[]>(coursesList);
	return (
		<div className="">
			{lists.map((value) => {
				return <ItemProduct product={value} key={value.id} />;
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
