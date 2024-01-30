import { instance } from './instance';

// lấy ra tất cả các users
export const getAllUsers = async () => {
	return await instance.get('/user');
};

// lấy ra user theo id
export const getUserById = async (id: string) => {
	return await instance.get(`/user/${id}`);
};
