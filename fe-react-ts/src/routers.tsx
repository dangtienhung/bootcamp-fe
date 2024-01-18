import AddProductPage from './pages/add-product-page';
import EditProductPage from './pages/edit-product-page';
import LayoutDefault from './layouts/LayoutDefault';
import ListProductPage from './pages/list-product-page';
import { createBrowserRouter } from 'react-router-dom';

// cách 1
// <BrowserRouter>
// 	<Routes>
// 		<Route path="/" element={<LayoutDefault />}>
// 			<Route path="/" element={<ListProductPage />} />
// 			<Route path="/add-product" element={<AddProductPage />} />
// 			<Route path="/edit-product" element={<EditProductPage />} />
// 		</Route>
// 	</Routes>
// </BrowserRouter>

// cách 2
export const router = createBrowserRouter([
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
