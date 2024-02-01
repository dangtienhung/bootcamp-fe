import { Outlet, createBrowserRouter } from 'react-router-dom';

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
				element: <div>ProductCreatePage</div>,
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
