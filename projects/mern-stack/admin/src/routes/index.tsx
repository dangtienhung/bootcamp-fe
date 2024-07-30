import RootLayout from '@/layouts'
import HomePage from '@/pages'
import OrderPage from '@/pages/orders'
import { createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: 'prdouct' },
      { path: 'orders', element: <OrderPage /> }
    ]
  }
])

export default routes
