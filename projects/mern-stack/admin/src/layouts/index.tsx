import { Layout } from 'antd'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import Sidebar from './components/sidebar'

const RootLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout className='!h-screen'>
      <Layout.Sider width='250px' className='!bg-white'>
        <Sidebar collapsed={collapsed} />
      </Layout.Sider>
      <Layout>
        <Layout.Header className='!bg-white !px-8'>
          <Header onToggleCollapsed={toggleCollapsed} />
        </Layout.Header>
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default RootLayout
