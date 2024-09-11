import { Button, Input } from 'antd'

import { GlassesIcon } from '../icons'
import type { SizeType } from 'antd/es/config-provider/SizeContext'
import { cn } from '@/utils/cn'

interface NavbarProps {
  button: {
    title: React.ReactNode
    size?: SizeType
    type?: 'default' | 'primary' | 'dashed' | 'link' | 'text'
    className?: string
    onClick?: () => void
  }
  input: {
    placeholder?: string
    className?: string
    onSearch?: (value: string) => void
    onKeyDown?: (value: string) => void
  }
}

const Navbar = ({ button, input }: NavbarProps) => {
  const { title, size, type, className, onClick, ...restButton } = button
  const { placeholder, className: inputClassName, onSearch, onKeyDown, ...restInput } = input
  return (
    <div className='flex items-center justify-between w-full pb-7'>
      <Button size={size} type={type} {...restButton} className={cn(className)} onClick={onClick}>
        {title}
      </Button>

      <Input
        className={cn('h-[38px] rounded-[50px] w-[250px] border border-gray-six', inputClassName)}
        placeholder={placeholder}
        prefix={<GlassesIcon hanging={16} width={16} />}
        {...restInput}
        onChange={(e) => onSearch && onSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onKeyDown && onKeyDown((e.target as HTMLInputElement).value)
          }
        }}
      />
    </div>
  )
}

export default Navbar
