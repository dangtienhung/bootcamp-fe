import { IProduct } from '../../../interfaces/product.interface';

interface IHandleChange {
	event:
		| React.ChangeEvent<HTMLInputElement>
		| React.ChangeEvent<HTMLTextAreaElement>;
	newProduct: Omit<IProduct, 'id'>;
	setNewProduct: React.Dispatch<React.SetStateAction<Omit<IProduct, 'id'>>>;
}

export const handleChange = ({
	event,
	newProduct,
	setNewProduct,
}: IHandleChange) => {
	setNewProduct({
		...newProduct,
		[event.target.name]: event.target.value,
	});
};
