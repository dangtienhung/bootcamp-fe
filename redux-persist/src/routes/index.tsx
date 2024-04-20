import AuthenPage from '@/pages/auth';
import HomePage from '@/pages/home-page';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/login',
		element: <AuthenPage />,
	},
]);

export default routes;
