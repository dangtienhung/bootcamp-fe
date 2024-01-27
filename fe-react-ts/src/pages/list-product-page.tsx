import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

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

	const [lists, setLists] = useState<IProduct[]>([]);

	const handleDeleteProduct = async (idProduct: number) => {
		try {
			const response = await fetch(
				`http://localhost:3000/products/${idProduct}`,
				{
					method: 'DELETE',
				}
			);
			const products = await response.json();
			console.log('🚀 ~ handleDeleteProduct ~ products:', products);
			const newLists = lists.filter((value) => value.id !== idProduct);
			setLists(newLists);
		} catch (error) {
			console.log('🚀 ~ handleDeleteProduct ~ error:', error);
		}
	};

	return (
		<div className="">
			{lists.map((value) => {
				return (
					<div
						key={value.id}
						className="mb-10 border  boder-b border-b-red-400 flex items-center justify-between"
					>
						<div>
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

						<div>
							<Link
								to={`/edit-product/${value.id}`}
								className="bg-blue-400 py-2 px-4 rounded"
							>
								EDIT
							</Link>
							<button
								onClick={() => handleDeleteProduct(value.id)}
								className="bg-red-400 py-2 px-4 rounded"
							>
								DELETE
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default ListProductPage;
