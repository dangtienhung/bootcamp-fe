import 'react-toastify/dist/ReactToastify.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AddProductPage from './pages/add-product-page';
import CountBuoi5 from './components/buoi5/count';
import EditProductPage from './pages/edit-product-page';
import LayoutDefault from './layouts/LayoutDefault';
import ListProductPage from './pages/list-product-page';
import LoginPage from './pages/login-page';
import TestCss from './pages/test-css';
import { ToastContainer } from 'react-toastify';

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
					// path: '/edit-product/3',
					path: '/edit-product/:id',
					element: <EditProductPage />,
				},
				{
					path: '/count-number',
					element: <CountBuoi5 />,
				},
			],
		},
		{ path: '/login', element: <LoginPage /> },
		{
			path: '/ahihi',
			element: <TestCss />,
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
			<ToastContainer />
		</>
	);
};

export default App;
