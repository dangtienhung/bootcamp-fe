import { Button, Modal as ModalAntd } from 'antd'

import { StatusModal } from '@/types/common.type'
import { cn } from '@/utils/cn'
import { CiTrash } from 'react-icons/ci'

interface Props<T> {
  openModalDelete: boolean
  setOpenModalDelete: (value: boolean) => void
  titleDelete: React.ReactNode
  contentDelete: React.ReactNode
  btnCancel?: {
    title: string
    onClick?: () => void
    className?: string
  }
  btnDelete?: {
    title: string
    onClick?: () => void
    className?: string
  }
  rowSelections?: T[]
  handleOpenModal?: (type: StatusModal, currentData?: T | undefined) => void
}

const Modal = <T,>({
  openModalDelete,
  rowSelections,
  setOpenModalDelete,
  titleDelete,
  contentDelete,
  btnCancel,
  btnDelete,
  handleOpenModal
}: Props<T>) => {
  return (
    <>
      {rowSelections && rowSelections.length > 0 && (
        <div className='flex items-center justify-between w-full'>
          <button className='flex items-center gap-2' onClick={() => setOpenModalDelete(true)}>
            <CiTrash height={20} width={20} className='!h-4 !w-4 !stroke-red-500 text-red-500' />
            <span className='mt-0.5 text-base text-red-500'>Delete</span>
          </button>

          <p className='text-sm'>{rowSelections.length} Selections</p>
        </div>
      )}
      <ModalAntd
        open={openModalDelete}
        title={<p className='w-full text-2xl font-semibold text-center'>{titleDelete}</p>}
        onOk={() => {
          setOpenModalDelete(false)
        }}
        closable={false}
        onCancel={() => setOpenModalDelete(false)}
        footer={
          <div className='flex items-center justify-center gap-10 mt-10'>
            {btnCancel && (
              <Button
                danger
                size='large'
                className={cn('w-full max-w-[140px]', btnCancel.className)}
                onClick={() => btnCancel.onClick && btnCancel.onClick()}
              >
                {btnCancel.title}
              </Button>
            )}
            {btnDelete && (
              <Button
                type='primary'
                size='large'
                className={cn('w-full max-w-[140px]', btnDelete?.className)}
                onClick={() => btnDelete.onClick && btnDelete.onClick()}
              >
                {btnDelete.title}
              </Button>
            )}
          </div>
        }
      >
        <p className='text-center text-gray-500'>{contentDelete}</p>
      </ModalAntd>
    </>
  )
}

export default Modal
