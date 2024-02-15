import {DasbboardPage, NotFoundPage, SigninPage} from '@/pages';

import {AdminLayout} from '@/layouts';
import {createBrowserRouter} from 'react-router-dom';

export const routers = createBrowserRouter([
	{
		path: '/signin',
		element: <SigninPage />,
	},
	{
		path: '/',
		element: <AdminLayout />,
		children: [
			{
				index: true,
				element: <DasbboardPage />,
			},
		],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);
