import { Button, Modal, Table } from 'antd'

import ColumnsTable from './table/columns-table'
import { DeleteOutlined } from '@ant-design/icons'
import { TProduct } from '@/types/product.type'
import { useState } from 'react'

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

  const columns = ColumnsTable()

  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false)
  const [rowSelections, setRowSelections] = useState<TProduct[]>([])
  console.log('🚀 ~ MainProduct ~ rowSelections:', rowSelections)

  const rowSelection = {
    onChange: (_: React.Key[], selectedRows: TProduct[]) => {
      setRowSelections(selectedRows)
    }
  }

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

      {rowSelections.length > 0 && (
        <div className='flex items-center justify-between'>
          <button className='flex items-center gap-2' onClick={() => setOpenModalDelete(true)}>
            <DeleteOutlined />
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
      </Modal>
    </div>
  )
}

export default MainProduct
