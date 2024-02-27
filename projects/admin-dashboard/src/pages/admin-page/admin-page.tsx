import { Button, PlusIcon, Title } from '@/components'

import { Fragment } from 'react'
import { clsxm } from '@/utils'

const AdminPage = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex gap-3'>
        <Title title='Users' />
        <Button className='px-10 text-white w-fit bg-gray-l10' icon={<PlusIcon />}>
          Add New
        </Button>
      </div>

      <div className='grid grid-cols-13 mt-[14px] p-[3px] bg-gray-l1 flex-shrink rounded-[10px] border boder-[#5f5f5f]'>
        {['ID', 'Username', 'Email', 'Phone', 'Status', 'Created Date', 'Updated Date', 'Modify'].map((item) => (
          <div
            key={item}
            className={clsxm(
              `flex items-center justify-center p-2.5 text-xs font-semibold uppercase`,
              { 'col-span-2': item !== 'ID' },
              { 'col-span-1': item === 'ID' || item === 'Modify' || item === 'Status' },
              { 'border-r-gray-l9  border-r': item !== 'Modify' }
            )}
          >
            {item}
          </div>
        ))}
      </div>

      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className='grid py-[5px] px-[3px] grid-cols-13 mt-[14px] gap-y-2.5 p-[3px] py-2.5 flex-shrink border-b'
        >
          <div className={clsxm('col-span-1 text-center border-r')}>1</div>
          <div title='User1 asdfasdfkjlasdflasdkl' className={clsxm('col-span-2 text-left border-r truncate')}>
            User1 asdfasdfkjlasdflasdkl
          </div>
          <div className={clsxm('col-span-2 text-left border-r')}>user1@gmail.com</div>
          <div className={clsxm('col-span-2 text-left border-r')}>9876543210</div>
          <div className={clsxm('col-span-1 text-center border-r')}>ahihi</div>
          <div className={clsxm('col-span-2 text-center border-r')}>2023-03-12 12:24:22 AM</div>
          <div className={clsxm('col-span-2 text-center border-r')}>2023-03-12 12:24:22 AM</div>
          <div className={clsxm('col-span-1 text-center')}>ahihi</div>
        </div>
      ))}
    </div>
  )
}

export default AdminPage
