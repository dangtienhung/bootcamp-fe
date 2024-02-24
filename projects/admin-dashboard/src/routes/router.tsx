import { AdminPage, DashboardPage, SigninPage } from '@/pages'
import { Ahehehe, AhihiComponent, LayoutClient, LayoutDemo } from '@/layouts'

import { createBrowserRouter } from 'react-router-dom'

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <LayoutClient />,
    children: [
      { path: '/', element: <DashboardPage /> },
      { path: 'admin', element: <AdminPage /> }
    ]
  },
  {
    path: '/demo-router',
    element: <LayoutDemo />,
    children: [
      { path: 'ahihi', element: <AhihiComponent /> }, // localhost:3000/demo-router/ahihi
      { path: 'ahehe', element: <Ahehehe /> } // localhost:3000/demo-router/ahehe
    ]
  },
  {
    path: '/signin',
    element: <SigninPage />
  },
  {
    path: '*',
    element: <div>404 Not Found</div>
  }
])
