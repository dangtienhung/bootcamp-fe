import RootLayout from '@/layouts'
import AuthLayout from '@/layouts/auth-layout'
import HomePage from '@/pages'
import LoginPage from '@/pages/(authen)/login'
import CategoryPage from '@/pages/category'
import OrderPage from '@/pages/orders'
import ProductPage from '@/pages/products'
import { createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductPage /> },
      { path: 'orders', element: <OrderPage /> },
      { path: 'category', element: <CategoryPage /> }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [{ path: 'login', element: <LoginPage /> }]
  }
])

export default routes
