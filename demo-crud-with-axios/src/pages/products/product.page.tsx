import { deleteProduct, getAllProducts } from '../../apis/product.api';
import { useEffect, useState } from 'react';

import { IProduct } from '../../interfaces/product.interface';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
	const [products, setProducts] = useState<IProduct[]>([]);
	console.log('🚀 ~ ProductsPage ~ products:', products);

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
			<table className="table-auto">
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Images</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{products &&
						products.length > 0 &&
						products.map((product) => (
							<tr key={product.id}>
								<td>{product.id}</td>
								<td>{product.name}</td>
								<td>{product.price}</td>
								<td>{product.quantity}</td>
								<td>
									<img
										src={product.images[0]}
										alt=""
										className="h-[100px] w-[100px]"
									/>
								</td>
								<td>
									<button onClick={() => handleDeleteProduct(product.id)}>
										xóa
									</button>
									<Link to={`/products/edit/${product.id}`}>Edit</Link>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default ProductsPage;
