import { CloseOutlined, InboxOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Col, Drawer, Form, Input, Row, Select, Space, Upload, UploadProps, message } from 'antd'

import { getBrands } from '@/apis/brand.api'
import { getCategories } from '@/apis/category.api'
import { ArrowDownSmallIcon } from '@/components/icons'
import { useAuth } from '@/contexts/auth-context'
import { TModal } from '@/types/common.type'
import { TProduct } from '@/types/product.type'
import { useQuery } from '@tanstack/react-query'

interface IFormProductProps {
  currentData: TModal<TProduct>
  onClose: () => void
}

const { Dragger } = Upload

const FomrProduct = ({ currentData, onClose }: IFormProductProps) => {
  const { accessToken } = useAuth()

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    customRequest({ file, onSuccess, onError }) {
      const formData = new FormData()
      formData.append('images', file as Blob)

      fetch('http://localhost:8080/api/v1/image/upload', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          onSuccess?.(data)
          message.success(`${(file as File).name} file uploaded successfully.`)
        })
        .catch((error) => {
          onError?.(error)
          message.error(`${(file as File).name} file upload failed.`)
        })
    },
    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    }
  }

  // categories
  const { data, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(accessToken)
  })
  const categories = data?.data

  // brand
  const { data: dataBrand, isLoading: isLoadingBrand } = useQuery({
    queryKey: ['brands'],
    queryFn: () => getBrands(accessToken)
  })
  const brands = dataBrand?.data

  return (
    <Drawer
      title='Thêm sản phẩm'
      onClose={onClose}
      open={currentData.visiable}
      width={800}
      extra={
        <Space>
          <Button size='large' onClick={onClose}>
            Đóng sản phẩm
          </Button>
          <Button size='large' onClick={onClose} type='primary'>
            Thêm sản phẩm
          </Button>
        </Space>
      }
    >
      <Form layout='vertical'>
        <Row gutter={40}>
          <Col span={12}>
            <Form.Item name={'nameProduct'} label='Tên sản phẩm'>
              <Input size='large' placeholder='Tên sản phẩm' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={'price'} label='Giá sản phẩm'>
              <Input size='large' placeholder='Giá sản phẩm' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={'brand'} label='Thương hiệu sản phẩm'>
              <Select
                loading={isLoadingBrand}
                size='large'
                suffixIcon={<ArrowDownSmallIcon />}
                placeholder='Thương hiệu sản phẩm'
                options={brands?.map((brand) => ({
                  value: brand._id,
                  label: brand.nameBrand
                }))}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={'category'} label='Danh mục sản phẩm'>
              <Select
                loading={isLoading}
                size='large'
                suffixIcon={<ArrowDownSmallIcon />}
                placeholder='Danh mục sản phẩm'
                options={categories?.map((category) => ({
                  value: category._id,
                  label: category.nameCategory
                }))}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={'status'} label='Trạng thái sản phẩm'>
              <Input size='large' placeholder='Trạng thái sản phẩm' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={'sale'} label='Giá khuyến mại sản phẩm'>
              <Input size='large' placeholder='Giá khuyến mại sản phẩm' />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label='Size sản phẩm' name='sizes' className='!mb-0'>
              <Form.List name='users'>
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space key={key} style={{ display: 'flex' }} align='baseline'>
                        <Form.Item
                          {...restField}
                          name={[name, 'size']}
                          rules={[{ required: true, message: 'Size sản phẩm' }]}
                        >
                          <Input size='large' placeholder='Size sản phẩm' />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'last']}
                          rules={[{ required: true, message: 'Số lượng' }]}
                        >
                          <Input size='large' placeholder='Số lượng' />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'last']}
                          rules={[{ required: true, message: 'Màu sản phẩm' }]}
                        >
                          <Input size='large' placeholder='Số lượng' />
                        </Form.Item>
                        <CloseOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button type='dashed' size='large' onClick={() => add()} block icon={<PlusOutlined />}>
                        Add field
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form.Item>
          </Col>

          {/* desc */}
          <Col span={24}>
            <Form.Item name={'desc'} label='Mô tả sản phẩm'>
              <Input.TextArea size='large' placeholder='Mô tả sản phẩm' />
            </Form.Item>
          </Col>

          {/* image */}
          <Col span={24}>
            <Form.Item name={'images'} label='Hình ảnh sản phẩm'>
              <Dragger {...props}>
                <p className='ant-upload-drag-icon'>
                  <InboxOutlined />
                </p>
                <p className='ant-upload-text'>Click hoặc kéo thả hình ảnh</p>
              </Dragger>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  )
}

export default FomrProduct
