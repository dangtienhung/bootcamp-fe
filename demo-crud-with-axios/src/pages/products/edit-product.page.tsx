import { useNavigate, useParams } from 'react-router-dom';

import { updateProduct } from '../../apis/product.api';

const EditProductPage = () => {
	const navigate = useNavigate();

	const { id } = useParams();

	const newProduct = {
		id: Number(id),
		name: 'test proudct update',
		price: 100,
		quantity: 10,
		images: ['https://via.placeholder.com/150'],
		description: 'test description',
		category: 'test category update',
	};

	const handleUpdateProduct = async () => {
		try {
			if (!id) return;
			const response = await updateProduct(newProduct);
			console.log('🚀 ~ handleUpdateProduct ~ response:', response);
			navigate('/products');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<button
			className="py-2 px-4 rounded bg-purple-500 text-white"
			onClick={() => handleUpdateProduct()}
		>
			Edit Product
		</button>
	);
};

export default EditProductPage;
