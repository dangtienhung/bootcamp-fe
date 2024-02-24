import { AdminPage, DashboardPage, ExecutivePage, SigninPage } from '@/pages'
import { Navigate, createBrowserRouter } from 'react-router-dom'

import { LayoutClient } from '@/layouts'

// useNavigate

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <LayoutClient />,
    children: [
      { path: '/', element: <Navigate to='/dashboard' /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'admin', element: <AdminPage /> },
      { path: 'executive', element: <ExecutivePage /> }
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
