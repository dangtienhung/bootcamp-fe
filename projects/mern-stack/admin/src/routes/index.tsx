import RootLayout from '@/layouts'
import AuthLayout from '@/layouts/auth-layout'
import HomePage from '@/pages'
import LoginPage from '@/pages/(authen)/login'
import CategoryPage from '@/pages/category'
import IconPage from '@/pages/icons'
import OrderPage from '@/pages/orders'
import ProductPage from '@/pages/products'
import ProductDetail from '@/pages/products/[productId]'
import { createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/icons',
    element: <IconPage />
  },
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductPage /> },
      { path: 'orders', element: <OrderPage /> },
      { path: 'product/:productId', element: <ProductDetail /> },
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
