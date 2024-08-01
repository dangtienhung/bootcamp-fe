import { Button, Space, Table } from 'antd'

import useCounter from '@/contexts/counter-context'
import { useProduct } from '@/contexts/product-context'
import { TProduct } from '@/types/product.type'
import { DeleteOutlined } from '@ant-design/icons'

const ProductPage = () => {
  const { products, handleDeleteProduct } = useProduct()
  const { counter } = useCounter()

  const columns = [
    {
      title: 'ID Sản phẩm',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Giá sản phẩm',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: false,
      dataIndex: 'action',
      key: 'action',
      render: (_: undefined, product: TProduct & { key: string }) => {
        return (
          <Space>
            <Button danger onClick={() => handleDeleteProduct(product.id)}>
              <DeleteOutlined />
            </Button>
          </Space>
        )
      }
    }
  ]

  const dataSource = products.map((product) => ({
    ...product,
    key: product.id
  }))

  return (
    <div>
      Counter: {counter}
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default ProductPage
