import { HeaderLayout } from './components'
import { NavigateBar } from './components/navigate-bar'
import { clsxm } from '@/utils'
import { initialData } from '.'
import { useState } from 'react'

const LayoutClient = () => {
  const [value, setValue] = useState<number>(0)

  const handleClick = (index: number) => {
    setValue(index)
  }

  return (
    <div className='flex flex-col min-h-screen'>
      {/* header */}
      <HeaderLayout />

      {/* <div className='flex gap-5 pr-5'> */}
      {/* <SidebarLayout />

        <div className='flex flex-col w-full gap-5 py-5 '>
          <div className='w-full p-3 border border-b rounded-md bg-gray-l1 border-gray-l9 border-b-gray-l9'>
            <Link to={`/`} className='text-base font-medium text-primary'>
              Home
            </Link>

            {' > '}

            <span className='text-base font-medium text-primary'>Dashboard</span>
          </div>

          <div className='w-full bg-gray-l9 h-[.0625rem]'></div>

          <Outlet />
        </div> */}
      {/* </div> */}
      <div className='mt-5'>
        <div className='w-[350px] h-screen pl-10 pr-5 border-r border-r-gray-l9'>
          <div className='border border-black rounded-[5px] px-2 py-3'>
            {initialData.map((data, index) => (
              // <NavigateBar
              //   handleClick={handleClick}
              //   id={value}
              //   index={index}
              //   name={`${data.name} ${index}`}
              //   title={data.title}
              //   url={data.url}
              //   icon={data.icons}
              // />
              <div className='pb-10'>
                <h2 className={clsxm(`text-base font-medium`)}>{data.title}</h2>

                <div
                  className={clsxm(
                    `flex items-center gap-2 px-2 py-3 border-l-4 border-l-black-l1 rounded-tr-[5px] rounded-br-[5px]`,
                    { 'bg-primary text-white': index === data.id }
                  )}
                  onClick={() => handleClick(index)}
                >
                  {data.icons}
                  <div className={clsxm(`block w-full`)}>{data.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutClient
