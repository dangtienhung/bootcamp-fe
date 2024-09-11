import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Image, Space, Switch, Table, TableColumnsType, Tag, Tooltip, message } from 'antd'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { getCategories, updateCategory } from '@/apis/category.api'
import { useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import DeleteTable from '@/components/delete-table'
import { FormCategory } from './components'
import Navbar from '@/components/navbar'
import { TCategory } from '@/types/category.type'
import { cn } from '@/utils/cn'
import { styleLayoutContent } from '@/features/init'
import { useAuth } from '@/contexts/auth-context'
import { useQueryParams } from '@/hooks/useQueryParams'
import { useToggleModal } from '@/hooks/useToggleModal'

const CategoryPage = () => {
  const navigate = useNavigate()
  const queryParams = useQueryParams()

  const { accessToken } = useAuth()
  const queryClient = useQueryClient()

  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)

  const [categories, setCategories] = useState<TCategory[]>([])
  const [category, setCategory] = useState<TCategory>()
  const [rowSelections, setRowSelections] = useState<TCategory[]>([])
  const { currentModal, onCloseModal, onOpenModal } = useToggleModal<TCategory>()

  // update category
  const updateCategoryMutation = useMutation({
    mutationKey: ['updateCategory'],
    mutationFn: (data: TCategory) => updateCategory(accessToken, data),
    onSuccess: () => {
      message.success('Cập nhật danh mục sản phẩm thành công')
      queryClient.invalidateQueries({ queryKey: ['categories'] })
    },
    onError: () => {
      message.error('Có lỗi xảy ra')
    }
  })

  // get categories
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['categories', queryParams],
    queryFn: () => getCategories(accessToken, queryParams.search),
    keepPreviousData: true
  })

  // handleChange status
  const handleChangeStatus = (category: TCategory) => {
    updateCategoryMutation.mutate({ ...category, status: category.status === 'active' ? 'inactive' : 'active' })
  }

  const columns: TableColumnsType<TCategory> = [
    {
      title: 'Tên danh mục',
      dataIndex: 'nameCategory',
      key: 'nameCategory',
      render: (nameCategory: string, render: TCategory) => {
        return (
          <div className='flex gap-3'>
            <Image src={render.image} alt={nameCategory} width={50} height={50} className='object-cover rounded-md' />
            <div className='flex flex-col'>
              <p className='text-base font-medium text-black-second'>{nameCategory}</p>
              <p
                className='text-sm text-black-second'
                dangerouslySetInnerHTML={{
                  __html: render.desc
                }}
              ></p>
            </div>
          </div>
        )
      }
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: 'active' | 'inactive', record: TCategory) => {
        return (
          <Space>
            <Switch checked={status === 'active'} onChange={() => handleChangeStatus(record)} />
            <Tag color={status === 'active' ? 'green' : 'red'}>
              {status === 'active' ? 'Hoạt động' : 'Không hoạt động'}
            </Tag>
          </Space>
        )
      }
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width: 150,
      render: (_: string, record: TCategory) => {
        return (
          <div className='flex items-center'>
            <button
              className='h-8 px-4 border border-r-0 border-gray-400 rounded-r-none rounded-l-md '
              onClick={() => onOpenModal('edit', record)}
            >
              <EditOutlined height={20} width={20} />
            </button>
            <Tooltip title={'Xoá sản phẩm'}>
              <button
                className='h-8 px-4 border border-gray-400 rounded-l-none rounded-r-md'
                onClick={() => setOpenModalDelete(true)}
              >
                <DeleteOutlined height={20} width={20} className='text-red-600' />
              </button>
            </Tooltip>
          </div>
        )
      }
    }
  ]

  const handleSearch = (value: string) => {
    navigate({
      pathname: '/category',
      search: createSearchParams({
        ...queryParams,
        search: value
      }).toString()
    })
  }

  const rowSelection = {
    onChange: (_: React.Key[], selectedRows: TCategory[]) => {
      setRowSelections(selectedRows)
    }
  }

  const handleDelete = (values: TCategory[] | TCategory) => {
    console.log(values)
  }

  useEffect(() => {
    if (isSuccess) {
      setCategories(data?.data.map((item) => ({ ...item, key: item._id })))
    }
  }, [isSuccess, data])

  if (isError) {
    return <div>Có lỗi xảy ra</div>
  }
  return (
    <div className={cn(styleLayoutContent)}>
      <Navbar
        button={{
          title: 'Thêm danh mục sản phẩm',
          size: 'large',
          type: 'primary',
          onClick: () => onOpenModal('add')
        }}
        input={{
          placeholder: 'Tìm kiếm...',
          onKeyDown: (value) => handleSearch(value)
        }}
      />

      <div className=''>
        <Table
          dataSource={categories}
          rowSelection={{
            type: 'checkbox',
            ...rowSelection
          }}
          columns={columns}
          loading={isLoading}
          scroll={{ y: 600 }}
          pagination={{
            current: Number(queryParams.page) || 1,
            pageSize: Number(queryParams.limit) || 8,
            total: categories.length,
            showTotal(total, range) {
              return (
                <div className='flex items-center justify-between w-full mr-auto text-black-second'>
                  Showing {range[0]}-{range[1]} of {total}
                </div>
              )
            },
            onChange: (page, pageSize) => {
              navigate({
                pathname: '/category',
                search: createSearchParams({
                  page: page.toString(),
                  limit: pageSize.toString()
                }).toString()
              })
            }
          }}
        />
      </div>

      <FormCategory onClose={onCloseModal} currentData={currentModal} />

      <DeleteTable
        handleDelete={handleDelete}
        openModalDelete={openModalDelete}
        rowSelections={rowSelections}
        setOpenModalDelete={setOpenModalDelete}
        selectionSingle={category}
        text={{
          title: 'Xoá danh mục sản phẩm',
          content: 'Bạn có chắc chắn muốn xoá danh mục sản phẩm này không? Hành động này không thể hoàn tác?'
        }}
      />
    </div>
  )
}

export default CategoryPage
