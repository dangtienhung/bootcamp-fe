import { TResponse } from '@/types/common.type'
import { TProduct } from '@/types/product.type'
import api from './base-url.api'

export const getProducts = async (token: string, query?: string): Promise<TResponse<TProduct>> => {
  const response = await api.get<TResponse<TProduct>>(`/products${query ? query : ''}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}
