import { getProducts, softDeleteProduct } from '@/apis/product.api'
import { TImage, TResponse } from '@/types/common.type'
import { TCategroyRefProduct, TProduct, TSize } from '@/types/product.type'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { Table, Tooltip, notification } from 'antd'
import { useEffect, useState } from 'react'

import Navbar from '@/components/navbar'
import Modal from '@/components/ui/modal'
import { useAuth } from '@/contexts/auth-context'
import { styleLayoutContent } from '@/features/init'
import FormProduct from '@/features/products/components/form-product'
import { useModal } from '@/hooks/useOpenModal'
import { cn } from '@/utils/cn'
import type { TableColumnsType } from 'antd'

const ProductPage = () => {
  const queryClient = new QueryClient()

  const { open, handleOpenModal, handleCloseModal } = useModal<TProduct>()

  const { accessToken } = useAuth()
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
  const [products, setProducts] = useState<TProduct[]>([])
  const [id, setId] = useState<string>('')

  const [paginate, setPaginate] = useState({
    _page: 1,
    _limit: 10,
    totalPages: 1
  })
  const [queryDelete, setQueryDelete] = useState<{ status: 'active' | 'inactive'; is_deleted: boolean }>({
    status: 'active',
    is_deleted: true
  })

  const deleteMutation = useMutation({
    mutationKey: ['deleteProduct'],
    mutationFn: () =>
      softDeleteProduct(id, `?status=${queryDelete.status}&is_deleted=${queryDelete.is_deleted}`, accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products', paginate] })
      notification.success({
        message: 'Xoá sản phẩm thành công',
        description: 'Sản phẩm đã được xoá vào thùng rác'
      })
    },
    onError: () => {
      notification.error({
        message: 'Xoá sản phẩm thất bại',
        description: 'Có lỗi xảy ra khi xoá sản phẩm'
      })
    }
  })

  const { data, isError, isLoading, isSuccess } = useQuery<TResponse<TProduct>, Error>({
    queryKey: ['products', paginate],
    queryFn: () => getProducts(accessToken, `?_page=${paginate._page}&_limit=${paginate._limit}`),
    keepPreviousData: true
  })

  useEffect(() => {
    if (isSuccess) {
      setProducts(data.docs)
      setPaginate({
        _page: data.page,
        _limit: data.limit,
        totalPages: data.totalPages
      })
    }
  }, [isSuccess, data])

  const handelDeleteProduct = () => {
    deleteMutation.mutate()
  }

  if (isError) {
    return <div>Error</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  const columns: TableColumnsType<TProduct> = [
    {
      title: 'Thông tin sản phẩm',
      dataIndex: 'images',
      key: 'images',
      render: (images: TImage[], record: TProduct) => {
        return (
          <div className='flex gap-3'>
            <img
              src={images[0].url ? images[0].url : 'https://picsum.photos/536/354'}
              alt={images[0].public_id}
              className='w-[50px] flex-shrink-0 h-[50px] object-cover rounded-[5px]'
            />

            <div className='flex flex-col'>
              <div className='flex items-center gap-2'>
                <p className='!text-lg font-medium text-black-second'>{record.nameProduct}</p>
                {record.sale > 0 && (
                  <div className='!text-xs bg-red-400 text-white rounded-sm p-0.5 px-2'>
                    Sale: {record.sale.toLocaleString()}đ
                  </div>
                )}
              </div>
              <p className='!text-xs text-slate-800 flex items-center gap-3'>
                <span className=''>{(record.price - record.sale).toLocaleString()}đ</span>
                <span className='text-gray-300 line-through'>{record.price.toLocaleString()}đ</span>
              </p>
            </div>
          </div>
        )
      }
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category: TCategroyRefProduct, record, index) => {
        return category.nameCategory
      }
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
      render: (brand: TCategroyRefProduct) => {
        return brand.nameBrand
      }
    },
    {
      title: 'Trạng thái',
      dataIndex: 'is_deleted',
      key: 'is_delete',
      render: (id_delete: boolean) => {
        return id_delete ? 'Đã xoá' : 'Đang hoạt động'
      }
    },
    {
      title: 'Available Color',
      dataIndex: 'sizes',
      key: 'sizes',
      render: (sizes: TSize[], record: TProduct) => {
        return (
          <div className='flex items-center gap-3'>
            {sizes.map((size) => (
              <Tooltip
                key={size._id}
                title={
                  <ul className='min-w-[150px] list-disc p-4'>
                    <li>Tên size: {size.size}</li>
                    <li>Màu sắc: {size.color}</li>
                    <li>Số lượng: {size.quantity}</li>
                  </ul>
                }
              >
                <div
                  className='w-[20px] h-[20px] rounded-full shadow-xl shadow-black border border-x-gray-light cursor-pointer'
                  style={{ backgroundColor: size.color }}
                />
              </Tooltip>
            ))}
          </div>
        )
      }
    },
    {
      title: 'Active',
      dataIndex: 'action',
      key: 'action',
      render: (_: string, record: TProduct) => {
        return (
          <div className='flex items-center'>
            <button className='h-8 px-4 border border-r-0 border-gray-400 rounded-r-none rounded-l-md '>
              <EditOutlined height={20} width={20} />
            </button>
            <Tooltip title={'Xoá sản phẩm'}>
              <button
                className='h-8 px-4 border border-gray-400 rounded-l-none rounded-r-md '
                onClick={() => {
                  setOpenModalDelete(true)
                  setId(record._id), setQueryDelete({ is_deleted: !record.is_deleted, status: record.status })
                }}
              >
                <DeleteOutlined height={20} width={20} className='text-red-600' />
              </button>
            </Tooltip>
          </div>
        )
      }
    }
  ]

  return (
    <div className={cn(styleLayoutContent)}>
      <Navbar
        btnAdd={{
          title: 'Thêm sản phẩm',
          className: 'bg-blue-500 text-white',
          onClick: () => {
            handleOpenModal('create')
          },
          size: 'large',
          type: 'primary'
        }}
        title='Danh sách sản phẩm'
      />

      <div className=''>
        <Table
          rowKey={(record) => record._id}
          dataSource={products}
          columns={columns}
          pagination={{
            current: data.page,
            pageSize: data.limit,
            total: data.totalDocs,
            onChange: (page) => {
              setPaginate({ ...paginate, _page: page, _limit: paginate._limit })
            },
            // showing
            showTotal(total, range) {
              return (
                <div className='flex items-center justify-between w-full mr-auto text-black-second'>
                  Showing {range[0]}-{range[1]} of {total}
                </div>
              )
            }
          }}
        />
      </div>

      <FormProduct open={open.open} onClose={handleCloseModal} />

      <Modal
        openModalDelete={openModalDelete}
        setOpenModalDelete={setOpenModalDelete}
        titleDelete='Xoá sản phẩm'
        contentDelete='Bạn có chắc chắn muốn xoá sản phẩm này không? Hành động này không thể hoàn tác?'
        btnCancel={{
          title: 'Huỷ',
          onClick: () => setOpenModalDelete(false)
        }}
        btnDelete={{
          title: 'Xoá sản phẩm',
          onClick: () => {
            handelDeleteProduct()
            setOpenModalDelete(false)
          }
        }}
      />
    </div>
  )
}

export default ProductPage
