import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface IProduct {
	id: number;
	name: string;
	price: number;
}

const EditProductPage = () => {
	const router = useNavigate();
	// useParams: lấy params từ url
	const { id: idParam } = useParams();

	const [productDetail, setProductDetail] = useState<Omit<IProduct, 'id'>>({
		name: '',
		price: 0,
	});

	console.log('🚀 ~ EditProductPage ~ productDetail:', productDetail);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://localhost:3000/products/${idParam}`,
					{
						method: 'GET',
					}
				);
				const product = await response.json();
				setProductDetail(product);
			} catch (error) {
				console.log('🚀 ~ fetchData ~ error:', error);
			}
		};
		fetchData();
	}, []);

	const handleNameProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setProductDetail({
			...productDetail,
			name: value,
		});
	};
	const handlePriceProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.valueAsNumber;
		setProductDetail({
			...productDetail,
			price: value,
		});
	};

	const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			// omit: bỏ đi 1 thuộc tính nào đó của 1 object
			const newProduct: IProduct = {
				id: Number(idParam),
				name: productDetail.name,
				price: productDetail.price,
			};
			console.log('🚀 ~ handleSubmitForm ~ newProduct:', newProduct);
			const response = await fetch(
				`http://localhost:3000/products/${idParam}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json', // kiểu dữ liệu gửi lên server
					},
					body: JSON.stringify(newProduct),
				}
			);
			await response.json();
			// sau khi gửi dữ liệu thành công thì sẽ chuyển hướng về trang list-product
			router('/');
		} catch (error) {
			console.log('🚀 ~ handleSubmitForm ~ error:', error);
		}
	};

	return (
		<div className="h-screen bg-gray-300 flex justify-center items-center">
			<div className="flex flex-col items-center gap-4">
				<h2 className="text-2xl font-bold">Sửa sản phẩm</h2>
				<form
					onSubmit={(event) => handleSubmitForm(event)}
					className="flex flex-col items-center gap-4 bg-white shadow-md rounded-lg p-4 w-[500px]"
				>
					<input
						type="text"
						className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
						placeholder="name product"
						value={productDetail.name}
						onChange={(event) => handleNameProduct(event)}
					/>
					<input
						type="number"
						className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
						placeholder="price product"
						value={productDetail.price}
						onChange={(event) => handlePriceProduct(event)}
					/>
					<button className="bg-blue-500 text-white p-2 w-full rounded-lg hover:bg-purple-500">
						Sửa sản phẩm
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditProductPage;
