import { ModalType, StatusModal } from '@/types/common.type'

import { useState } from 'react'

export const useModal = <T>() => {
  const [open, setOpen] = useState<ModalType<T>>({
    open: false,
    type: null,
    currentData: undefined
  })

  const handleOpenModal = (type: StatusModal, currentData?: T) => {
    switch (type) {
      case 'create':
        setOpen({ open: true, type, currentData: undefined })
        break
      case 'update':
        setOpen({ open: true, type, currentData })
        break
      case 'delete':
        setOpen({ open: true, type, currentData })
        break
      default:
        setOpen({ open: false, type: null, currentData: undefined })
        break
    }
  }

  const handleCloseModal = () => {
    setOpen({ open: false, type: null, currentData: undefined })
  }

  return { open, handleOpenModal, handleCloseModal }
}
