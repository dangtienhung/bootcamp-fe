// /api/v1/users
// version 1
app.get('/api/v1/users', async (req, res) => {
	try {
		const users = await axios.get('http://localhost:4200/users');
		console.log('🚀 ~ app.get ~ users:', users);

		if (!users) {
			return res.status(404).json({ message: 'Users not found' });
		}

		return res.status(200).json({
			message: 'get all users',
			success: true,
			data: users.data,
		});
	} catch (error) {
		return res
			.status(500)
			.json({ message: 'Internal Server Error', success: false, data: error });
	}
});

// /api/v1/users/:id
app.get('/api/v1/users/:userId', async (req, res) => {
	try {
		const id = req.params.userId;
		const body = req.body;

		const user = await axios.get(`http://localhost:4200/users/${id}`);

		if (!user) {
			return res
				.status(404)
				.json({ message: 'Không tìm thấy người dùng', success: false });
		}

		return res.status(200).json({
			message: 'Lấy thông tin người dùng thành công!',
			success: true,
			data: user.data,
		});
	} catch (error) {
		return res
			.status(500)
			.json({ message: 'Internal Server Error', success: false, data: error });
	}
});

// /api/v1/users
app.post('/api/v1/users', async (req, res) => {
	try {
		const body = req.body;

		const user = await axios.post('http://localhost:4200/users', body);

		if (!user) {
			return res
				.status(404)
				.json({ message: 'Không tạo được người dùng', success: false });
		}

		return res.status(200).json({
			message: 'Tạo người dùng thành công!',
			success: true,
			data: user.data,
		});
	} catch (error) {
		return res
			.status(500)
			.json({ message: 'Internal Server Error', success: false, data: error });
	}
});

// /api/v1/users/:id
app.delete('/api/v1/users/:userId', async (req, res) => {
	try {
		const id = req.params.userId;

		const user = await axios.delete(`http://localhost:4200/users/${id}`);

		if (!user) {
			return res
				.status(404)
				.json({ message: 'Không xóa được người dùng', success: false });
		}

		return res.status(200).json({
			message: 'Xóa người dùng thành công!',
			success: true,
			data: user.data,
		});
	} catch (error) {
		return res
			.status(500)
			.json({ message: 'Internal Server Error', success: false, data: error });
	}
});

// /api/v1/users/:id
app.put('/api/v1/users/:userId', async (req, res) => {
	try {
		const id = req.params.userId;
		const body = req.body;

		const user = await axios.put(`http://localhost:4200/users/${id}`, body);

		if (!user) {
			if (!user) {
				return res
					.status(404)
					.json({ message: 'Không cập nhật được người dùng', success: false });
			}
		}

		return res.status(200).json({
			message: 'Cập nhật người dùng thành công!',
			success: true,
			data: user.data,
		});
	} catch (error) {
		return res
			.status(500)
			.json({ message: 'Internal Server Error', success: false, data: error });
	}
});

// tạo mới người dùng => post => body
// lấy thông tin người dùng chi tiết => get => id
// xóa người dùng => delete => id
// cập nhật thông tin người dùng => put => id, body
// lấy danh sách người dùng => get
