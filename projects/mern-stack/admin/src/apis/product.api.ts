import { TBaseResponseDelete, TQueryParams, TResponse } from '@/types/common.type'
import { TProduct, TProductForm } from '@/types/product.type'

import api from './base-url.api'

export const getProducts = async (token: string, params?: TQueryParams): Promise<TResponse<TProduct>> => {
  const response = await api.get<TResponse<TProduct>>(`/products`, {
    params,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}

export const deleteProduct = async (idProduct: string, token: string): Promise<TBaseResponseDelete> => {
  const response = await api.delete<TBaseResponseDelete>(`/product/${idProduct}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.data
}

// xoá mềm sản phẩm (chuyển sản phẩm vào thùng rác)
export const softDeleteProduct = async (
  idProduct: string,
  query: string,
  token: string
): Promise<TBaseResponseDelete> => {
  const response = await api.patch<TBaseResponseDelete>(
    `/product/${idProduct}${query ? query : ''}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  )

  return response.data
}

// xoá mềm nhiều sản phẩm (chuyển sản phẩm vào thùng rác)
export const softDeleteMultipleProduct = async (
  params: { id: string[] | string; deleted?: boolean },
  token: string
) => {
  const response = await api.patch<TBaseResponseDelete>(
    `/product-delete-multiple`,
    {},
    {
      params: {
        id: params.id,
        deleted: params.deleted
      },
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  )

  return response.data
}

// thêm sản phẩm
export const addProduct = async (data: TProductForm, token: string) => {
  const response = await api.post<TResponse<TProduct>>('/product', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.data
}

// sửa sản phẩm
export const editProduct = async (data: TProductForm & { _id: string }, token: string) => {
  const response = await api.put<TResponse<TProduct>>(`/product/${data._id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return response.data
}

// khôi phục sản phẩm
