import {NotFoundPage, SigninPage} from '@/pages';

import {createBrowserRouter} from 'react-router-dom';

export const routers = createBrowserRouter([
	{
		path: '/signin',
		element: <SigninPage />,
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);
