import { TCategory } from '@/types/category.type'
import { TResponseNoPagination } from '@/types/common.type'
import api from './base-url.api'

export const getCategories = async (accessToken: string): Promise<TResponseNoPagination<TCategory>> => {
  const response = await api.get<TResponseNoPagination<TCategory>>(`/categories`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  return response.data
}

export const deleteCategory = async (id: string, accessToken: string) => {
  const response = await api.delete(`/categories/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  return response.data
}
