import Logo from '../../../../public/logo.svg';
import {UserCircleIcon} from '@/components/icons/user-icon';

export const Header = () => {
	return (
		<div className="py-4 border-b border-gray px-20">
			<div className="flex items-center justify-between">
				<img
					src={Logo}
					alt=""
					className="w-[150px]"
				/>

				<div className="bg-red text-white flex items-center gap-4 w-fit p-2 rounded-md">
					<UserCircleIcon />
					<span>User ABC</span>
				</div>
			</div>
		</div>
	);
};
