import { useState } from 'react';

const Buoi3 = () => {
	const [value, setValue] = useState('');
	const [names, setNames] = useState(['Teo', 'Ti', 'Tun']);
	// a !== aa
	const handleChange = (event) => {
		console.log('1');
		setValue(event.target.value);
	};
	const handleAddName = () => {
		const newArrayName = [...names, value];
		setNames(newArrayName);
	};

	/*
  giải thích onChange
  - khi gõ vào input, hàm handleChange sẽ được gọi
  - hàm handleChange sẽ lấy giá trị của input và set lại cho state value
  */

	const handleDelete = (name) => {
		const newData = names.filter((nameData) => {
			if (nameData !== name) {
				return name;
			}
		});
		setNames(newData);
	};

	return (
		<div className="h-screen flex justify-center items-center flex-col">
			<div className="flex gap-2">
				<input
					type="text"
					value={value}
					placeholder="Name"
					className="border border-gray-500 rounded p-2"
					onChange={(event) => handleChange(event)}
				/>
				<button
					onClick={() => handleAddName()}
					className="border bg-gray-500 text-white border-gray-500 rounded p-2"
				>
					Add name
				</button>
			</div>

			<div className="flex flex-col gap-1 mt-10">
				{names.map((name, index) => (
					<div
						key={index}
						className="border flex justify-between items-center w-[300px] border-gray-500 rounded p-2"
					>
						{name}
						<button
							onClick={() => handleDelete(name)}
							className="border bg-gray-500 text-white border-gray-500 rounded p-2"
						>
							delete name
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Buoi3;

// [...names, ....abc]
/// setNames([...names, 'abc'])
