// generic type
export type TResponse<T> = {
  message: string
  success: boolean
  docs: T[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: number | boolean
  hasNextPage: number | boolean
  prevPage: number | null
  nextPage: number | null
}

export type TImage = {
  url: string
  public_id: string
  _id: string
}

export type TResponseNoPagination<T> = {
  success: boolean
  message: string
  data: T[]
}

export type TBaseResponseDelete = {
  message: string
  success: boolean
}

export type StatusModal = 'create' | 'update' | 'delete' | 'view' | null
export type ModalType<T> = {
  open: boolean
  type: StatusModal
  currentData?: T
}
