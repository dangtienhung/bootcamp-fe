import { AppstoreOutlined } from '@ant-design/icons'
import { DashboardIcon } from '@/components/icons'
import path from '@/configs/path'

export const menus = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <DashboardIcon className='fill-inherit' />,
    link: path.home
  },
  {
    id: 2,
    title: 'Các đơn hàng',
    icon: <AppstoreOutlined />,
    link: path.orders
  },
  {
    id: 3,
    title: 'Sản phẩm',
    icon: <AppstoreOutlined />,
    link: path.products
  },
  {
    id: 4,
    title: 'Danh mục sản phẩm',
    icon: <AppstoreOutlined />,
    link: path.category
  }
]
