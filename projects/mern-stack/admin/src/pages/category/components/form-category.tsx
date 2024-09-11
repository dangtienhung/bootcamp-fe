import { Button, Col, Drawer, Form, Input, Row, Space, Switch, Upload, UploadProps, message } from 'antd'
import { TCategory, TCategoryForm } from '@/types/category.type'
import { createCategory, updateCategory } from '@/apis/category.api'
import { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { InboxOutlined } from '@ant-design/icons'
import QuillEditor from '@/components/qill-editor'
import { TModal } from '@/types/common.type'
import { uploadImage } from '@/apis/upload-image.api'
import { useAuth } from '@/contexts/auth-context'

type FormCategoryProps = {
  onClose: () => void
  currentData: TModal<TCategory>
}

const { Dragger } = Upload

const FormCategory = ({ onClose, currentData }: FormCategoryProps) => {
  const queryClient = useQueryClient()

  const { accessToken } = useAuth()

  // state
  const [contentCategory, setContentCategory] = useState<{
    desc: string
    thumbnail: string
  }>({
    desc: '',
    thumbnail: ''
  })
  // update category
  const updateCategoryMutation = useMutation({
    mutationKey: ['updateCategory'],
    mutationFn: (data: TCategory) => updateCategory(accessToken, data),
    onSuccess: () => {
      message.success('Cập nhật danh mục sản phẩm thành công')
      onClose()
      form.resetFields()
      queryClient.invalidateQueries({ queryKey: ['categories'] })
    },
    onError: () => {
      message.error('Có lỗi xảy ra')
    }
  })

  // xứ lý thêm danh mục sản phẩm
  const createCategoryMutation = useMutation({
    mutationKey: ['createCategory'],
    mutationFn: (data: TCategoryForm) => createCategory(accessToken, data),
    onSuccess: () => {
      message.success('Thêm danh mục sản phẩm thành công')
      onClose()
      form.resetFields()
      queryClient.invalidateQueries({ queryKey: ['categories'] })
    },
    onError: () => {
      message.error('Thêm danh mục sản phẩm thất bại')
    }
  })

  // xứ lý form
  const [form] = Form.useForm()

  // xứ lý submit form
  const onFinish = (values: TCategoryForm) => {
    const data: TCategoryForm = {
      ...values,
      status: values.status ? 'active' : 'inactive',
      image: contentCategory.thumbnail
    }
    if (currentData.type === 'edit') {
      updateCategoryMutation.mutate({ ...currentData.currentData, ...data } as TCategory)
    } else {
      createCategoryMutation.mutate(data)
    }
  }

  // xứ lý upload hình ảnh
  const props: UploadProps = {
    name: 'file', // tên của file
    maxCount: 1, // chỉ cho phép upload 1 hình ảnh
    multiple: false, // chỉ cho phép upload 1 hình ảnh
    accept: 'image/*', // chỉ cho phép upload file có định dạng ảnh
    listType: 'picture', // kiểu hiển thị hình ảnh
    fileList:
      currentData.type === 'edit'
        ? [
            {
              uid: '1',
              name: 'image',
              url: contentCategory.thumbnail
            }
          ]
        : [
            {
              uid: '1',
              name: 'image',
              url: contentCategory.thumbnail
            }
          ],
    async customRequest({ file, onSuccess, onError }) {
      const formData = new FormData()
      formData.append('images', file)

      const response = await uploadImage(formData, accessToken)
      const url = response.data.urls[0].url

      if (url) {
        onSuccess?.(url)
        setContentCategory((prev) => ({ ...prev, thumbnail: url }))
      } else {
        onError?.({
          name: 'error',
          message: 'Upload failed'
        })
      }
    },
    onChange(info) {
      const { status } = info.file
      //loading
      if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  useEffect(() => {
    if (currentData.type === 'edit') {
      const { currentData: data } = currentData
      form.setFieldsValue({
        nameCategory: data?.nameCategory,
        status: data?.status === 'active',
        desc: data?.desc,
        image: data?.image
      })
      setContentCategory({
        desc: data?.desc ?? '',
        thumbnail: data?.image ?? ''
      })
    }
  }, [currentData, form])

  return (
    <Drawer
      title='Thêm danh mục sản phẩm'
      onClose={() => {
        form.resetFields()
        onClose()
      }}
      open={currentData.visiable}
      width={800}
      extra={
        <Space>
          <Button
            size='large'
            onClick={() => {
              form.resetFields()
              onClose()
            }}
          >
            Đóng danh mục sản phẩm
          </Button>
          <Button size='large' onClick={() => form.submit()} type='primary'>
            {createCategoryMutation.isLoading ? 'Loading...' : 'Thêm danh mục sản phẩm'}
          </Button>
        </Space>
      }
    >
      <Form layout='vertical' form={form} onFinish={onFinish}>
        <Row gutter={40}>
          <Col span={12}>
            <Form.Item
              name={'nameCategory'}
              label='Tên danh mục sản phẩm'
              rules={[{ required: true, message: 'Vui lòng nhập tên danh mục sản phẩm', whitespace: true }]}
            >
              <Input size='large' placeholder='Tên danh mục sản phẩm' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={'status'} label='Trạng thái'>
              <Switch />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item name={'desc'} label='Mô tả danh mục'>
              <QuillEditor
                value={contentCategory.desc}
                onChange={(value) => setContentCategory((prev) => ({ ...prev, desc: value }))}
              />
            </Form.Item>
          </Col>

          {/* image */}
          <Col span={24}>
            <Form.Item name={'image'} label='Hình ảnh sản phẩm'>
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

export default FormCategory
