import { clsxm } from '@/utils'

interface InputProps {
  type?: string
  placeholder?: string
  id?: string
  className?: string
}

export const Input = ({ type = 'text', placeholder = '', id, className }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      className={clsxm(`border border-gray-l2 rounded-md p-2 outline-none focus:border-gray-100`, className)}
    />
  )
}
