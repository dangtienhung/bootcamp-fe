import ProductItem from '../components/buoi5/product-item';
import { useState } from 'react';

export interface IProduct {
	id: number;
	name: string;
	price: number;
}

const ListProductPage = () => {
	const productsArray = [
		{ id: 1, name: 'iphone', price: 1000 },
		{ id: 2, name: 'iphone 2', price: 2000 },
		{ id: 3, name: 'iphone 3', price: 3000 },
	];
	const [products] = useState<IProduct[]>(productsArray);
	return (
		<div className="mx-auto w-[500px] my-10">
			{products.map((value: IProduct, index: number) => {
				return (
					<ProductItem key={index} product={value}>
						dang tien hugn
					</ProductItem>
				);
			})}
		</div>
	);
};

export default ListProductPage;
