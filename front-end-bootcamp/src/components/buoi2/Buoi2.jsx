// javascript -> .jsx
// typescript -> .tsx

// Các bước để tạo 1 component
// 1. Tạo 1 folder
// 2. Tạo file Tên file.jsx
// 3. Viết code cho component

// 1. extension: ES7 React/Redux snippets
// 2. turbo console log
// 3. prettier
// 4. live server
// 5. eslint
// 6. auto import

import React, { useState } from 'react';

const Buoi2 = () => {
	const data = [
		{
			id: 1,
			name: 'Nguyen Van A',
			age: 23,
		},
		{
			id: 2,
			name: 'Nguyen Van B',
			age: 23,
		},
	];
	const [arrayData, setArrayData] = useState(data);
	const handleClick = (id) => {
		const newData = arrayData.filter((value) => {
			if (id !== value.id) {
				return id;
			}
		});
		setArrayData(newData);
	};

	// function () {}
	// const func2 = () => {}

	const addUser = () => {
		const newUser = {
			id: 3,
			name: 'Nguyen Van C',
			age: 23,
		};
		const newArrayData = [...arrayData, newUser];
		setArrayData(newArrayData);
	};

	const handleUpdateUser = (id) => {
		// find
		const userInfo = arrayData.find((value) => value.id === id);
		userInfo.name = userInfo.name + ' Update';

		// map
		const newData = arrayData.map((value) => {
			if (value.id === id) {
				return userInfo;
			}
			return value;
		});
		setArrayData(newData);
	};
	return (
		<>
			<div
				onClick={() => addUser()}
				className="mt-4 py-2 px-4 border border-gray-500 rounded"
			>
				Thêm
			</div>

			<div className="h-screen flex items-center justify-center">
				{/* <div className="flex flex-col">
  					<div className="w-[300px] mx-auto">Count: {count}</div>
  					<div className="flex gap-4 justify-center">
  						<button className="mt-4 py-2 px-4 border border-gray-500 rounded">
  							Giảm
  						</button>
  						<button className="mt-4 py-2 px-4 border border-gray-500 rounded">
  							Tăng
  						</button>
  					</div>
  				</div> */}
				<div className="flex flex-col justify-center items-center gap-3">
					{arrayData.map((value, index) => {
						return (
							<div key={index} className="flex items-center gap-3">
								<h2 className="">{value.name}</h2> -<h2>{value.age}</h2>
								<div
									onClick={() => handleClick(value.id)}
									className="mt-4 py-2 px-4 border border-gray-500 rounded"
								>
									xóa
								</div>
								<div
									onClick={() => handleUpdateUser(value.id)}
									className="mt-4 py-2 px-4 border border-gray-500 rounded"
								>
									Sửa
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Buoi2;
