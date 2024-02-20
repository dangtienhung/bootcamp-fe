import { AdminPage, DashboardPage, SigninPage } from '@/pages'

import { LayoutClient } from '@/layouts'
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
    path: '/signin',
    element: <SigninPage />
  },
  {
    path: '*',
    element: <div>404 Not Found</div>
  }
])
