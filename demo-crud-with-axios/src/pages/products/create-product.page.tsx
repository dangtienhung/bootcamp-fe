import { addProduct } from '../../apis/product.api';
import { useNavigate } from 'react-router-dom';

const CreateProductPage = () => {
	const navigate = useNavigate();

	const newProduct = {
		name: 'test proudct',
		price: 100,
		quantity: 10,
		images: ['https://via.placeholder.com/150'],
		description: 'test description',
		category: 'test category',
	};

	const handleCreateProduct = async () => {
		try {
			const response = await addProduct(newProduct);
			console.log('🚀 ~ handleCreateProduct ~ response:', response);
			navigate('/products');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<button
				className="py-2 px-4 rounded bg-purple-500 text-white"
				onClick={() => handleCreateProduct()}
			>
				CreateProductPage
			</button>
		</div>
	);
};

export default CreateProductPage;
