import ProductsPage from '../pages/products/product.page';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/products',
		element: <ProductsPage />,
	},
]);
