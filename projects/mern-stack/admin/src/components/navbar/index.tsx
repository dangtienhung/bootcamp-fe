import { Button, Input } from 'antd'

import { cn } from '@/utils/cn'
import type { SizeType } from 'antd/es/config-provider/SizeContext'
import React from 'react'
import { GlassesIcon } from '../icons'

interface Props {
  onSearch?: (value: string) => void
  title: React.ReactNode

  btnAdd?: {
    title: React.ReactNode
    onClick?: () => void
    className: string
    size?: SizeType
    type?: 'link' | 'text' | 'primary' | 'default' | 'dashed'
  }
}

const Navbar = ({ onSearch, btnAdd, title }: Props) => {
  return (
    <div className='flex items-center justify-between w-full pb-7'>
      <div className='flex items-center gap-4'>
        <p className='font-bold text-black-second text-[32px] font-nunito-sans'>{title}</p>
        {btnAdd && (
          <Button
            type={btnAdd.type}
            size={btnAdd.size}
            className={cn(btnAdd?.className)}
            onClick={() => btnAdd?.onClick && btnAdd?.onClick()}
          >
            {btnAdd?.title}
          </Button>
        )}
      </div>

      <Input
        className='h-[38px] rounded-[50px] w-[250px] border border-gray-six'
        placeholder='Search for product'
        onChange={(e) => onSearch && onSearch(e.target.value)}
        prefix={<GlassesIcon hanging={16} width={16} />}
      />
    </div>
  )
}

export default Navbar
