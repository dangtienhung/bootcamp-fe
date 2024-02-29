import { clsxm } from '@/utils'

interface InputProps {
  type?: string
  placeholder?: string
  id?: string
  className?: string
  register?: any
}

export const Input = ({ type = 'text', placeholder = '', id, className, register }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      {...register}
      className={clsxm(`border border-gray-l2 rounded-md p-2 outline-none focus:border-gray-100`, className)}
    />
  )
}
