import { deleteProduct, getAllProducts } from '../apis/products.api';
import { useEffect, useState } from 'react';

import { IProduct } from '../interfaces/product.interface';
import { Link } from 'react-router-dom';

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
				const response = await getAllProducts();
				console.log('🚀 ~ fetchData ~ response:', response);
				setLists(response.data);
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
			await deleteProduct(idProduct);
			const newLists = lists.filter((value) => value.id !== idProduct);
			setLists(newLists);
		} catch (error) {
			console.log('🚀 ~ handleDeleteProduct ~ error:', error);
		}
	};

	// fetch api => axios

	// cal api Promise
	getAllProducts()
		.then((response) => {
			console.log('🚀 ~ getAllProducts ~ response:', response);
		})
		.catch((error) => {
			console.log('🚀 ~ getAllProducts ~ error:', error);
		});

	return (
		<div className="">
			{lists &&
				lists.length > 0 &&
				lists.map((value) => {
					return (
						<div
							key={value.id}
							className="flex items-center justify-between mb-10 border boder-b border-b-red-400"
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
									className="px-4 py-2 bg-blue-400 rounded"
								>
									EDIT
								</Link>
								<button
									onClick={() => handleDeleteProduct(value.id)}
									className="px-4 py-2 bg-red-400 rounded"
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
