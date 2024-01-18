import { IProduct } from '../../pages/list-product-page';

interface IProductItemProps {
	product: IProduct;
	children: React.ReactNode;
}

// props: nhận giá trị từ component cha truyền vào
const ProductItem = ({ product, children }: IProductItemProps) => {
	if (product.id === 1) {
		return 'abacb';
	}
	return (
		<div>
			<div className="bg-blue-200 mb-5 p-2 rounded flex items-center gap-2 justify-between">
				<div className="flex items-center gap-2">
					<div>{product.id}</div>
					<div>{product.name}</div>
					<div>{product.price}</div>
				</div>
				<div className="flex items-center gap-2">
					<button className="bg-green-500 px-2 py-1 rounded text-white">
						Edit
					</button>
					<button className="bg-red-500 px-2 py-1 rounded text-white">
						Delete
					</button>
				</div>
			</div>
			{children}
		</div>
	);
};

export default ProductItem;
