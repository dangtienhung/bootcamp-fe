import { HeaderLayout as Ahihi, SidebarLayout } from './components'

import { Outlet } from 'react-router-dom'

const LayoutClient = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* header */}
      <Ahihi />

      <div className='flex gap-5'>
        <SidebarLayout />
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutClient
