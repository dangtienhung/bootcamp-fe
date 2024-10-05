import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Search, ShoppingCart, Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { useState } from 'react'

export default function ECommerceLayout() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-white shadow-md'>
        <div className='container flex items-center justify-between px-4 py-4 mx-auto'>
          <div className='flex items-center space-x-4'>
            <img src='/placeholder.svg?height=40&width=40' alt='Logo' className='h-10' />
            <div className='relative'>
              <input
                type='text'
                placeholder='Tìm kiếm sản phẩm...'
                className='w-64 py-2 pl-10 pr-4 border rounded-full'
              />
              <Search className='absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2' />
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <Button variant='ghost' size='icon'>
              <ShoppingCart className='w-6 h-6' />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='relative w-8 h-8 rounded-full'>
                  <img className='rounded-full' src='/placeholder.svg?height=32&width=32' alt='Avatar' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel className='font-normal'>
                  <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>Người dùng</p>
                    <p className='text-xs leading-none text-muted-foreground'>user@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Hồ sơ</DropdownMenuItem>
                <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className='container flex flex-grow px-4 py-8 mx-auto'>
        <aside className='w-1/3 pr-8'>
          <div className='space-y-6'>
            <div>
              <h3 className='mb-2 text-lg font-semibold'>Danh mục sản phẩm</h3>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='text-blue-600 hover:underline'>
                    Điện thoại
                  </a>
                </li>
                <li>
                  <a href='#' className='text-blue-600 hover:underline'>
                    Laptop
                  </a>
                </li>
                <li>
                  <a href='#' className='text-blue-600 hover:underline'>
                    Máy tính bảng
                  </a>
                </li>
                <li>
                  <a href='#' className='text-blue-600 hover:underline'>
                    Phụ kiện
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='mb-2 text-lg font-semibold'>Thương hiệu</h3>
              <ul className='space-y-2'>
                <li>
                  <label className='flex items-center'>
                    <input type='checkbox' className='mr-2' />
                    Apple
                  </label>
                </li>
                <li>
                  <label className='flex items-center'>
                    <input type='checkbox' className='mr-2' />
                    Samsung
                  </label>
                </li>
                <li>
                  <label className='flex items-center'>
                    <input type='checkbox' className='mr-2' />
                    Xiaomi
                  </label>
                </li>
                <li>
                  <label className='flex items-center'>
                    <input type='checkbox' className='mr-2' />
                    Oppo
                  </label>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='mb-2 text-lg font-semibold'>Giá sản phẩm</h3>
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
                className='mb-2'
              />
              <div className='flex justify-between'>
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </aside>
        <section className='w-2/3'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {[...Array(6)].map((_, index) => (
              <div key={index} className='overflow-hidden bg-white rounded-lg shadow-md'>
                <img src='/placeholder.svg?height=200&width=300' alt='Product' className='object-cover w-full h-48' />
                <div className='p-4'>
                  <h3 className='mb-2 text-lg font-semibold'>Tên sản phẩm</h3>
                  <div className='flex items-center mb-2'>
                    <span className='mr-2 font-bold text-red-600'>$99.99</span>
                    <span className='text-sm text-gray-500 line-through'>$129.99</span>
                    <span className='ml-auto text-sm text-green-600'>-23%</span>
                  </div>
                  <div className='flex items-center'>
                    <Star className='w-4 h-4 text-yellow-400 fill-yellow-400' />
                    <Star className='w-4 h-4 text-yellow-400 fill-yellow-400' />
                    <Star className='w-4 h-4 text-yellow-400 fill-yellow-400' />
                    <Star className='w-4 h-4 text-yellow-400 fill-yellow-400' />
                    <Star className='w-4 h-4 text-yellow-400' />
                    <span className='ml-1 text-sm text-gray-500'>(4.0)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
