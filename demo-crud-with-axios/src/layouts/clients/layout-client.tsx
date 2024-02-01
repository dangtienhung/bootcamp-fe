import HeaderClient from './header-client';
import { Outlet } from 'react-router-dom';
import SidebarClient from './sidebar-client';

const LayoutClient = () => {
	return (
		<div>
			{/* header */}
			<HeaderClient />
			<div className="flex">
				<SidebarClient />
				<Outlet />
			</div>
		</div>
	);
};

export default LayoutClient;
