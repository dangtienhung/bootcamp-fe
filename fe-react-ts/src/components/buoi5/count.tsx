import { useState } from 'react';

const CountBuoi5 = () => {
	const [count, setCount] = useState<number>(0);

	const handleClick = () => {
		setCount(count + 1);
	};
	return (
		<div className="w-[300px] mx-auto">
			<ButtonCount handleClicked={handleClick} countNumber={count} />
		</div>
	);
};

interface IButtonCountProps {
	handleClicked: () => void;
	countNumber: number;
}

const ButtonCount = ({ handleClicked, countNumber }: IButtonCountProps) => {
	return (
		<div>
			<div>{countNumber}</div>
			<button
				className="bg-green-500 px-2 py-1 rounded text-white"
				onClick={() => handleClicked()}
			>
				Tăng số
			</button>
		</div>
	);
};

export default CountBuoi5;
