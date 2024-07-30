import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { cn } from '@/utils/cn'
import { AppstoreOutlined } from '@ant-design/icons'
import { Menu } from 'antd'

interface Props {
  collapsed: boolean
}

const Sidebar = ({ collapsed }: Props) => {
  const menus = [
    {
      id: 1,
      name: 'Dashboard',
      icon: <AppstoreOutlined />,
      link: '/'
    },
    {
      id: 2,
      name: 'Các đơn hàng',
      icon: <AppstoreOutlined />,
      link: '/orders'
    },
    {
      id: 3,
      name: 'Sản phẩm',
      icon: <AppstoreOutlined />,
      link: '/products'
    },
    {
      id: 4,
      name: 'Người dùng',
      icon: <AppstoreOutlined />,
      link: '/users'
    }
  ]

  const [activeMenu, setActiveMenu] = useState(1)
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    const index = menus.findIndex((item) => item.link === path)
    setActiveMenu(index + 1)
  }, [location, menus])

  return (
    <div className='h-screen'>
      <section className='flex items-center justify-center w-full h-header'>
        <p className='text-xl font-extrabold font-nunito-sans'>
          <span className='text-primary'>Dash</span>
          <span className=''>Stack</span>
        </p>
      </section>

      {/* menu */}
      <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode='inline' inlineCollapsed={collapsed}>
        {menus.map((item, index) => (
          <Menu.Item
            key={index + 1}
            className='relative !rounded-none !bg-white'
            onClick={() => setActiveMenu(index + 1)}
          >
            <Link to={item.link} className='block w-full h-full'>
              <div
                className={cn('absolute top-0 bottom-0 left-0 w-1 h-full rounded-r-md', {
                  'bg-primary': activeMenu === index + 1
                })}
              ></div>
              <div className={cn('px-4 text-black rounded-md', { 'bg-primary text-white': activeMenu === index + 1 })}>
                {item.icon}
                <span className='text-inherit'>{item.name}</span>
              </div>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  )
}

export default Sidebar
