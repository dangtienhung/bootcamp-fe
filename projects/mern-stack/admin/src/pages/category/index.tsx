import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Table, TableColumnsType, Tag, Tooltip } from 'antd'
import { useEffect, useState } from 'react'

import { getCategories } from '@/apis/category.api'
import Navbar from '@/components/navbar'
import Modal from '@/components/ui/modal'
import { useAuth } from '@/contexts/auth-context'
import { styleLayoutContent } from '@/features/init'
import { useModal } from '@/hooks/useOpenModal'
import { TCategory } from '@/types/category.type'
import { cn } from '@/utils/cn'
import { useQuery } from '@tanstack/react-query'

const CategoryPage = () => {
  const { accessToken } = useAuth()

  const [categories, setCategories] = useState<TCategory[]>([])
  const [rowSelections, setRowSelections] = useState<TCategory[]>([])
  const { open, handleCloseModal, handleOpenModal } = useModal<TCategory>()

  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(accessToken),
    keepPreviousData: true
  })

  const columns: TableColumnsType<TCategory> = [
    {
      title: 'Tên danh mục',
      dataIndex: 'nameCategory',
      key: 'nameCategory'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: 'active' | 'inactive') => {
        return (
          <Tag color={status === 'active' ? 'green' : 'red'}>
            {status === 'active' ? 'Hoạt động' : 'Không hoạt động'}
          </Tag>
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
            <button className='h-8 px-4 border border-r-0 border-gray-400 rounded-r-none rounded-l-md '>
              <EditOutlined height={20} width={20} />
            </button>
            <Tooltip title={'Xoá sản phẩm'}>
              <button
                className='h-8 px-4 border border-gray-400 rounded-l-none rounded-r-md'
                onClick={() => handleOpenModal('delete', record)}
              >
                <DeleteOutlined height={20} width={20} className='text-red-600' />
              </button>
            </Tooltip>
          </div>
        )
      }
    }
  ]

  const rowSelection = {
    onChange: (_: React.Key[], selectedRows: TCategory[]) => {
      setRowSelections(selectedRows)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      setCategories(data?.data.map((item) => ({ ...item, key: item._id })))
    }
  }, [isSuccess])

  if (isError) {
    return <div>Có lỗi xảy ra</div>
  }

  return (
    <div className={cn(styleLayoutContent)}>
      <Navbar
        btnAdd={{
          title: 'Danh mục sản phẩm',
          className: 'bg-blue-500 text-white',
          size: 'large',
          type: 'primary'
        }}
        title='Danh sách danh mục'
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
          pagination={{
            current: 1,
            pageSize: 10,
            total: categories.length,
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

      <Modal
        openModalDelete={open.open}
        setOpenModalDelete={handleCloseModal}
        handleOpenModal={handleOpenModal}
        titleDelete='Xoá danh mục sản phẩm'
        contentDelete='Bạn có chắc chắn muốn xoá danh mục sản phẩm này không? Hành động này không thể hoàn tác?'
        btnCancel={{
          title: 'Huỷ',
          onClick: () => handleCloseModal()
        }}
        btnDelete={{
          title: 'Xoá'
        }}
        rowSelections={rowSelections}
      />
    </div>
  )
}

export default CategoryPage
