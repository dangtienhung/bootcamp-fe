import { TCategory, TCategoryForm } from '@/types/category.type'

import { TResponseNoPagination } from '@/types/common.type'
import api from './base-url.api'

export const getCategories = async (token: string, query?: string): Promise<TResponseNoPagination<TCategory>> => {
  const response = await api.get<TResponseNoPagination<TCategory>>(`/categories${query ?? ''}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}

export const createCategory = async (token: string, data: TCategoryForm): Promise<TResponseNoPagination<TCategory>> => {
  const response = await api.post<TResponseNoPagination<TCategory>>('/category', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}

export const updateCategory = async (token: string, data: TCategory): Promise<TResponseNoPagination<TCategory>> => {
  const response = await api.patch<TResponseNoPagination<TCategory>>(`/category/${data._id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}
