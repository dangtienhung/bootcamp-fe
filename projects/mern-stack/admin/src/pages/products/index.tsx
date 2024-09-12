import { createSearchParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import FomrProduct from './components/form/form-product'
import MainProduct from './components/main-product'
import Navbar from '@/components/navbar'
import { TProduct } from '@/types/product.type'
import { TResponse } from '@/types/common.type'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import { getProducts } from '@/apis/product.api'
import { handleChangeTab } from './utils/handle-change-tab'
import { useAuth } from '@/contexts/auth-context'
import useDebounce from '@/hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { useQueryParams } from '@/hooks/useQueryParams'
import { useToggleModal } from '@/hooks/useToggleModal'

const ProductPage = () => {
  const { accessToken } = useAuth()

  const queryParams = useQueryParams()

  const [products, setProducts] = useState<TProduct[]>([])
  const navigate = useNavigate()

  const { currentModal, onCloseModal, onOpenModal } = useToggleModal<TProduct>()

  const { data, isError, isLoading, isSuccess, isFetching, refetch } = useQuery<TResponse<TProduct>, Error>({
    queryKey: ['products', queryParams],
    queryFn: () => getProducts(accessToken, queryParams),
    keepPreviousData: true
  })

  useEffect(() => {
    if (isSuccess) {
      setProducts(data.docs)
    }
  }, [isSuccess, data])

  const [inputValue, setInputValue] = useState<string>('')
  const debouncedValue = useDebounce(inputValue, 1000)

  const handleSearch = (value: string) => {
    navigate({
      pathname: '/products',
      search: createSearchParams({
        ...queryParams,
        q: value
      }).toString()
    })
  }

  if (isError) {
    return <div>Error</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Tất cả sản phẩm',
      children: (
        <MainProduct
          isLoading={isFetching || isLoading}
          products={products}
          getData={onOpenModal}
          totalDocs={data.totalDocs}
        />
      )
    },
    {
      key: '2',
      label: 'Sản phẩm đang hoạt động',
      children: <MainProduct isLoading={isFetching || isLoading} products={products} totalDocs={data.totalDocs} />
    },
    {
      key: '3',
      label: 'Sản phẩm không hoạt động',
      children: <MainProduct isLoading={isFetching || isLoading} products={products} totalDocs={data.totalDocs} />
    },
    {
      key: '4',
      label: 'Sản phẩm đã xoá',
      children: <MainProduct isLoading={isFetching || isLoading} products={products} totalDocs={data.totalDocs} />
    }
  ]

  return (
    <div className='bg-gray-third py-[30px] px-[30px]'>
      <Navbar
        button={{
          title: 'Thêm sản phẩm',
          size: 'large',
          type: 'primary',
          onClick: () => onOpenModal('add')
        }}
        input={{
          placeholder: 'Search for product',
          onKeyDown: (value) => handleSearch(value)
        }}
      />

      <div>
        <Tabs
          defaultActiveKey='1'
          items={items}
          onChange={(value) => {
            handleChangeTab({ keyTab: value, navigate, queryParams })
          }}
        />
      </div>

      {/* form add product */}
      <FomrProduct currentData={currentModal} onClose={onCloseModal} refetch={refetch} />
    </div>
  )
}

export default ProductPage
