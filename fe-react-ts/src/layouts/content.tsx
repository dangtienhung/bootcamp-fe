import { Outlet } from 'react-router-dom';

const Content = () => {
	return (
		<div className="p-10">
			<Outlet />
		</div>
	);
};

export default Content;
