import { IUserCreate } from '@/types'
import { instance } from '.'

// tạo user
export const createUser = async (data: IUserCreate) => {
  return await instance.post('/users', data)
}

// lấy danh sách user
export const getUsers = async () => {
  return await instance.get('/users')
}

// xóa user
export const deleteUser = async (id: number) => {
  return await instance.delete(`/users/${id}`)
}
