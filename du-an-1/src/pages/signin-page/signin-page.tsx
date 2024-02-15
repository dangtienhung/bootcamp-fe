import {Button, Input} from '@/components';

import Logo from '../../../public/logo.svg';

const SigninPage = () => {
	return (
		<div className="h-screen flex items-center justify-center">
			<div className="flex flex-col gap-[50px] max-w-[576px] w-full">
				<img
					src={Logo}
					alt=""
					className="w-[250px] mx-auto"
				/>

				<div className="rounded-tl-xl rounded-br-xl bg-gray-l1 py-[30px] w-full flex flex-col gap-10">
					<div className="relative text-center">
						<h2 className="w-full mx-auto font-semibold text-xl">Welcome to Location Panel</h2>
					</div>

					<div className="w-[450px] mx-auto flex flex-col gap-10">
						<div className="bg-red-l1 text-white text-sm font-medium text-center p-2.5 rounded-md">
							Please login with your Username and Password
						</div>

						<form
							action=""
							className="flex flex-col gap-10">
							<div className="flex flex-col gap-2">
								<Input
									id="username"
									placeholder="Username"
									type="text"
								/>
							</div>

							<div className="flex flex-col gap-2">
								<Input
									id="password"
									placeholder="Password"
									type="password"
								/>
							</div>

							<Button className="bg-red text-white max-w-[300px] mx-auto ">Login</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SigninPage;
