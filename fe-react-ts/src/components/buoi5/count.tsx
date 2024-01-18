import { useState } from 'react';

const CountBuoi5 = () => {
	const [count, setCount] = useState<number>(0);

	const handleClick = () => {
		setCount(count + 1);
	};
	return (
		<div className="w-[300px] mx-auto">
			<ButtonCount>
				<div>
					<div>{count}</div>
					<button
						className="bg-green-500 px-2 py-1 rounded text-white"
						onClick={() => handleClick()}
					>
						Tăng số
					</button>
				</div>
			</ButtonCount>
		</div>
	);
};

interface IButtonCountProps {
	children: React.ReactNode;
}

const ButtonCount = ({ children }: IButtonCountProps) => {
	return <div>{children}</div>;
};

export default CountBuoi5;
