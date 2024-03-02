import { UseControllerProps, useController } from 'react-hook-form'

import { clsxm } from '@/utils'

interface InputProps {
  type?: string
  placeholder?: string
  id?: string
  className?: string
  control?: any
}

export const Input = ({ type = 'text', placeholder = '', id, className, control }: InputProps) => {
  const { field } = useController({
    name: id || '',
    control,
    defaultValue: ''
  })

  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      {...field}
      className={clsxm(`border border-gray-l2 rounded-md p-2 outline-none focus:border-gray-100`, className)}
    />
  )
}
