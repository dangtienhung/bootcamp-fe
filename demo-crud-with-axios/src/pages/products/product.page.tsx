import { deleteProduct, getAllProducts } from '../../apis/product.api';
import { useEffect, useState } from 'react';

import { IProduct } from '../../interfaces/product.interface';
import { Link } from 'react-router-dom';
import ProductLine from './components/product-line';

const ProductsPage = () => {
	const [products, setProducts] = useState<IProduct[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getAllProducts();
				setProducts(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProducts();
	}, []);

	const handleDeleteProduct = async (id: number) => {
		try {
			await deleteProduct(id);
			// filter lại mảng products
			const newProducts = products.filter((product) => product.id !== id);
			setProducts(newProducts);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="h-full w-full">
			<div className="flex items-center my-10 px-5">
				<Link to={`/products/create`}>
					<button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
						<div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full" />
						<span className="relative text-black group-hover:text-white">
							Add Product
						</span>
					</button>
				</Link>
			</div>

			<div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
				<table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
					<thead className="bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-4 font-medium text-gray-900">
								Product Name
							</th>
							<th scope="col" className="px-6 py-4 font-medium text-gray-900">
								Price
							</th>
							<th scope="col" className="px-6 py-4 font-medium text-gray-900">
								Quantity
							</th>
							<th
								scope="col"
								className="px-6 py-4 font-medium text-gray-900 text-right"
							></th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-100 border-t border-gray-100">
						{products &&
							products.length > 0 &&
							products.map((product) => (
								<ProductLine
									product={product}
									key={product.id}
									handleDeleteProduct={handleDeleteProduct}
								/>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ProductsPage;
