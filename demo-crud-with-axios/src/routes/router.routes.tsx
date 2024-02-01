import { Outlet, createBrowserRouter } from 'react-router-dom';

import CreateProductPage from '../pages/products/create-product.page';
import EditProductPage from '../pages/products/edit-product.page';
import LayoutClient from '../layouts/clients/layout-client';
import ProductsPage from '../pages/products/product.page';

export const router = createBrowserRouter([
	{
		path: '/products',
		element: <LayoutClient />,
		children: [
			{
				index: true,
				element: <ProductsPage />,
			},
			{
				path: 'create',
				element: <CreateProductPage />,
			},
			{
				path: 'edit/:id',
				element: <EditProductPage />,
			},
		],
	},
	{
		path: '/users',
		element: (
			<div>
				<Outlet />
			</div>
		),
		children: [
			{
				index: true,
				element: <div>UsersListPage</div>,
			},
			{
				path: 'info',
				element: (
					<div>
						<Outlet />
					</div>
				),
				children: [
					{
						path: 'edit',
						element: <div>UsersEditPage</div>,
					},
				],
			},
		],
	},
]);
