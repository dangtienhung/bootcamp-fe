import { TModalType, TQueryParams } from '@/types/common.type'
import { Table, notification } from 'antd'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import ColumnsTable from './table/columns-table'
import DeleteTable from '@/components/delete-table'
import { TProduct } from '@/types/product.type'
import { softDeleteMultipleProduct } from '@/apis/product.api'
import { useAuth } from '@/contexts/auth-context'
import { useQueryParams } from '@/hooks/useQueryParams'
import { useState } from 'react'

interface MainProductProps {
  products: TProduct[]
  totalDocs: number
  isLoading?: boolean
  getData?: (type: TModalType, data?: TProduct) => void
}

const MainProduct = ({ products, isLoading, getData, totalDocs }: MainProductProps) => {
  const navigate = useNavigate()

  const queryParams: TQueryParams = useQueryParams()
  const { _limit, _page } = queryParams
  const queryClient = useQueryClient()

  const { accessToken } = useAuth()

  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
  const [rowSelections, setRowSelections] = useState<TProduct[]>([])
  const [product, setProduct] = useState<TProduct>()

  const deleteMultipleMutation = useMutation({
    mutationKey: ['deleteMultipleProduct'],
    mutationFn: (params: { id: string[] | string; deleted?: boolean }) =>
      softDeleteMultipleProduct(params, accessToken),
    onSuccess: () => {
      notification.success({
        message: 'Xoá sản phẩm thành công',
        description: 'Sản phẩm đã được xoá vào thùng rác'
      })
      queryClient.invalidateQueries({ queryKey: ['products', queryParams] })
      setRowSelections([])
    },
    onError: () => {
      notification.error({
        message: 'Xoá sản phẩm thất bại',
        description: 'Có lỗi xảy ra khi xoá sản phẩm'
      })
    }
  })

  const handleDelete = (values: TProduct[] | TProduct, deleted?: boolean) => {
    if (Array.isArray(values)) {
      const ids = values.map((item) => item._id)
      deleteMultipleMutation.mutate({ id: ids, deleted })
    } else {
      deleteMultipleMutation.mutate({ id: values._id, deleted })
    }
  }

  const rowSelection = {
    onChange: (_: React.Key[], selectedRows: TProduct[]) => {
      setRowSelections(selectedRows)
    }
  }

  const columns = ColumnsTable({
    onDelete: handleDelete,
    setOpenModalDelete,
    onDetail: setProduct,
    rowSelections,
    getData
  })

  return (
    <div className=''>
      <Table
        loading={isLoading}
        rowKey={(record) => record._id}
        dataSource={products}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection
        }}
        columns={columns}
        pagination={{
          current: Number(_page) || 1,
          pageSize: Number(_limit) || 8,
          total: totalDocs,
          onChange: (page, pageSize) => {
            navigate({
              pathname: '/products',
              search: createSearchParams({
                _page: page.toString(),
                _limit: pageSize.toString()
              }).toString()
            })
          },
          showTotal(total, range) {
            return (
              <div className='flex items-center justify-between w-full mr-auto text-black-second'>
                Showing {range[0]}-{range[1]} of {total}
              </div>
            )
          }
        }}
      />

      <DeleteTable
        handleDelete={handleDelete}
        openModalDelete={openModalDelete}
        rowSelections={rowSelections}
        setOpenModalDelete={setOpenModalDelete}
        selectionSingle={product}
        text={{
          title: 'Xoá sản phẩm',
          content: 'Bạn có chắc chắn muốn xoá sản phẩm này không? Hành động này không thể hoàn tác?'
        }}
      />
    </div>
  )
}

export default MainProduct
