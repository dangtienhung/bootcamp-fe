import { Button, Modal } from 'antd'

import { DeleteOutlined } from '@ant-design/icons'

interface Props<T> {
  rowSelections: T[]
  openModalDelete: boolean
  setOpenModalDelete: (value: boolean) => void
  handleDelete: (value: T[]) => void
}

const DeleteTable = <T,>({ rowSelections, setOpenModalDelete, handleDelete, openModalDelete }: Props<T>) => {
  return (
    <>
      {rowSelections.length > 0 && (
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
                handleDelete(rowSelections)
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
    </>
  )
}

export default DeleteTable
