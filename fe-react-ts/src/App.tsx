import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AddProductPage from './pages/add-product-page';
import EditProductPage from './pages/edit-product-page';
import LayoutDefault from './layouts/LayoutDefault';
import ListProductPage from './pages/list-product-page';

const App = () => {
	// cách 2
	const router = createBrowserRouter([
		{
			path: '/',
			element: <LayoutDefault />,
			children: [
				{
					path: '/',
					element: <ListProductPage />,
				},
				{
					path: '/add-product',
					element: <AddProductPage />,
				},
				{
					path: '/edit-product',
					element: <EditProductPage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
