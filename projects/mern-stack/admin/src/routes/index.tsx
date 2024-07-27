import RootLayout from '@/layouts'
import HomePage from '@/pages'
import { createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: 'prdouct' }
    ]
  }
])

export default routes
