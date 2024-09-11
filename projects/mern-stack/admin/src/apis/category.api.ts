import { TCategory, TCategoryForm } from '@/types/category.type'

import { TResponseNoPagination } from '@/types/common.type'
import api from './base-url.api'

export const getCategories = async (token: string, params?: string): Promise<TResponseNoPagination<TCategory>> => {
  const response = await api.get<TResponseNoPagination<TCategory>>(`/categories`, {
    params: {
      search: params
    },
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

export const deleteCategory = async (token: string, id: string) => {
  const response = await api.delete(`/category/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}

export const deleteMultipleCategories = async (token: string, ids: string[]) => {
  const response = await api.delete('/category', {
    data: { ids },
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}
