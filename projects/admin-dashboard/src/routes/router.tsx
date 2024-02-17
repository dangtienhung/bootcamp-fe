import { SigninPage } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'

export const routers = createBrowserRouter([
  {
    path: '/signin',
    element: <SigninPage />
  },
  {
    path: '*',
    element: <div>404 Not Found</div>
  }
])
