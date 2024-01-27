import LogoPage from '../components/icons/LogoPage';

const LoginPage = () => {
	return (
		<div className="h-screen w-screen flex justify-center items-center">
			<div className="flex flex-col items-center gap-[50px]">
				{/* header */}
				<div>
					<LogoPage />
				</div>
				{/* content */}
				<div className="bg-gray py-[30px] flex flex-col gap-2.5">
					<div>
						<div>
							<h2 className="text-center">Welcome to Location Panel</h2>
							<p className="p-2.5 bg-primary rounded-[5px] text-white">
								Please login with your Username and Password.
							</p>
						</div>
						<div>
							<form action="">
								<div>
									<input type="text" placeholder="Enter Username" />
								</div>
								<div>
									<input type="text" placeholder="Enter Password" />
								</div>
								<button className="bg-primary">Login</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
