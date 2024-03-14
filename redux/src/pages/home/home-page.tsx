import { useGetAllProductsQuery } from '../../app/services/products.service';

const HomePage = () => {
	const {
		isError: errorProduct,
		isLoading: loadingProduct,
		data: products,
	} = useGetAllProductsQuery();

	if (loadingProduct) return <div>Loading...</div>;
	if (errorProduct) return <div>Error</div>;

	return (
		<div>
			<div className="">
				{products && products.length === 0 && <h2>No products found</h2>}
				{products &&
					products.length > 0 &&
					products.map((product) => (
						<div
							key={product.id}
							style={{
								display: 'flex',
								gap: '10px',
								alignItems: 'center',
							}}
						>
							<h2>Id: {product.id}</h2>
							<h2> - Name: {product.name}</h2>
							<h2> - Price: {product.price}</h2>
							<button>Delete Product</button>
							<button>Get Product By Id</button>
							<button>Edit Product</button>
						</div>
					))}
			</div>
		</div>
	);
};

export default HomePage;
