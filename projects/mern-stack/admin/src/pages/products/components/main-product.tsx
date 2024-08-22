import DeleteTable from '@/components/delete-table'
import { TProduct } from '@/types/product.type'
import { Table } from 'antd'
import { useState } from 'react'
import ColumnsTable from './table/columns-table'

interface MainProductProps {
  // columns: TableColumnsType<TProduct>
  products: TProduct[]
  paginate: {
    _page: number
    _limit: number
    totalDocs: number
    onChange: (page: number) => void
  }
}

const MainProduct = ({ products, paginate }: MainProductProps) => {
  const { _limit, _page, totalDocs, onChange } = paginate

  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
  const [rowSelections, setRowSelections] = useState<TProduct[]>([])
  console.log('🚀 ~ MainProduct ~ rowSelections:', rowSelections)

  const rowSelection = {
    onChange: (_: React.Key[], selectedRows: TProduct[]) => {
      setRowSelections(selectedRows)
    }
  }

  const handleOpenModalDelete = (value: any) => {
    console.log('🚀 ~ handleOpenModalDelete ~ value:', value)
    setOpenModalDelete(true)
  }

  const hanldeDelete = (value: any) => {
    console.log('🚀 ~ hanldeDelete ~ value:', value)
  }

  const columns = ColumnsTable({ setOpenModalDelete: handleOpenModalDelete })

  return (
    <div className=''>
      <Table
        rowKey={(record) => record._id}
        dataSource={products}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection
        }}
        columns={columns}
        pagination={{
          current: _page,
          pageSize: _limit,
          total: totalDocs,
          onChange: (page) => onChange(page),
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
        rowSelections={rowSelections}
        openModalDelete={openModalDelete}
        setOpenModalDelete={setOpenModalDelete}
        handleDelete={hanldeDelete}
      />

      {/* {rowSelections.length > 0 && (
        <div className='flex items-center justify-between'>
          <button className='flex items-center gap-2 text-red-500' onClick={() => setOpenModalDelete(true)}>
            <DeleteOutlined className='text-red-500' />
            Delete
          </button>

          <span className=''>{rowSelections.length} Selected</span>
        </div>
      )}

      <Modal
        open={openModalDelete}
        title={<p className='w-full text-2xl font-semibold text-center'>Xoá sản phẩm</p>}
        onOk={() => {
          setOpenModalDelete(false)
        }}
        closable={false}
        onCancel={() => setOpenModalDelete(false)}
        footer={
          <div className='flex items-center justify-center gap-10 mt-10'>
            <Button danger size='large' className='w-full max-w-[140px]' onClick={() => setOpenModalDelete(false)}>
              Huỷ
            </Button>
            <Button
              type='primary'
              size='large'
              className='w-full max-w-[140px]'
              onClick={() => {
                setOpenModalDelete(false)
              }}
            >
              Xoá sản phẩm
            </Button>
          </div>
        }
      >
        <p className='text-center text-gray-500'>
          Bạn có chắc chắn muốn xoá sản phẩm này không? Hành động này không thể hoàn tác?
        </p>
      </Modal> */}
    </div>
  )
}

export default MainProduct
