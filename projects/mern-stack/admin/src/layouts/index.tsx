import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import Sidebar from './components/sidebar'

const RootLayout = () => {
  return (
    <Layout className='!h-screen'>
      <Layout.Sider width='250px' className='!bg-white'>
        <Sidebar />
      </Layout.Sider>
      <Layout>
        <Layout.Header className='!bg-white !px-8'>
          <Header />
        </Layout.Header>
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default RootLayout
