import { AppstoreOutlined, ShoppingCartOutlined } from '@ant-design/icons'

import type { MenuProps } from 'antd'

export type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  { key: '1', icon: <AppstoreOutlined height={22} width={22} />, label: 'Dashboard' },
  { key: '2', icon: <ShoppingCartOutlined height={22} width={22} />, label: 'Các đơn hàng' },
  { key: '3', icon: <ShoppingCartOutlined height={22} width={22} />, label: 'Sản phẩm' },
  { key: '4', icon: <ShoppingCartOutlined height={22} width={22} />, label: 'Người dùng' }
]

export default items
