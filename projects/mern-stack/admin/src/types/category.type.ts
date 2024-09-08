export type TCategory = {
  _id: string
  nameCategory: string
  image: string
  status: 'active' | 'inactive'
  desc: string
  products: string[]
  createdAt: string
  updatedAt: string
}

export type TCategoryForm = Pick<TCategory, 'nameCategory' | 'image' | 'status' | 'desc'>

export type TCategoryUpdate = TCategoryForm & { _id: string }
