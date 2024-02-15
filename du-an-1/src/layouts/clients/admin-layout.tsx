import {Header, Sidebar} from '.';

import {Outlet} from 'react-router-dom';

export const AdminLayout = () => {
	return (
		<div className="flex flex-col">
			<Header />
			<div className="grid grid-cols-12 px-20">
				<div className="col-span-3">
					<Sidebar />
				</div>
				<div className="col-span-9">
					<Outlet />
				</div>
			</div>
		</div>
	);
};
