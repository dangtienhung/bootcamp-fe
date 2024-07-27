import { AppstoreOutlined } from '@ant-design/icons'
import { Menu } from 'antd'

const Sidebar = () => {
  return (
    <div className='h-screen'>
      <section className='flex items-center justify-center h-header w-full'>
        <p className='font-extrabold text-xl font-nunito-sans'>
          <span className='text-primary'>Dash</span>
          <span className=''>Stack</span>
        </p>
      </section>

      {/* menu */}
      <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode='inline'>
        {['Dashboard', 'Các đơn hàng', 'Sản phẩm', 'Người dùng'].map((item, index) => (
          <Menu.Item key={index + 1} className='relative !rounded-none !bg-white'>
            <div className='absolute left-0 top-0 bottom-0 w-1 bg-primary h-full rounded-r-md'></div>
            <div className='px-4 bg-primary text-white rounded-md'>
              <AppstoreOutlined height={22} width={22} />
              <span className='text-white'>{item}</span>
            </div>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  )
}

export default Sidebar
