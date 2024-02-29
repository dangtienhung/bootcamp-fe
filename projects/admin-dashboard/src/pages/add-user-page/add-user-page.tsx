import * as yup from 'yup'

import { Button, FormGroup, Input, Label, Status, Title } from '@/components'

import axios from 'axios'
import { clsxm } from '@/utils'
import { initialData } from './init'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    mobileNumber: yup.string().required('Mobile number is required'),
    email: yup.string().required('Email is required'),
    Password: yup.string().required('Password is required')
  })
  .required()

const AddUserPage = () => {
  const navigate = useNavigate()
  const [status, setStatus] = useState<boolean>(true)

  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.id === 'Active') // true or false
    // if (event.target.id === 'Active') {
    //   setStatus(true)
    // } else {
    //   setStatus(false)
    // }
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  console.log('🚀 ~ AddUserPage ~ errors:', errors)

  const onSubmit = async (data: any) => {
    try {
      const userInfo = {
        ...data,
        status: status
      }
      const response = await axios.post(`http://localhost:4200/users`, userInfo)
      navigate('/admin')
    } catch (error) {
      console.log('🚀 ~ onSubmit ~ error:', error)
    }
  }

  return (
    <div className='min-h-screen'>
      <Title title='Add New User' />

      <div className='mt-[30px] pb-10'>
        <form className='w-[450px] flex flex-col gap-[30px]' autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          {/* {initialData.map((data) => (
            <FormGroup key={data.id}>
              <Label className='capitalize'>{data.title}:</Label>
              <Input
                className='placeholder:capitalize'
                {...register(data.id)}
                placeholder={data.placeholder}
                id={data.id}
              />
              {errors.name && <p className='text-red'>{errors.name.message}</p>}
            </FormGroup>
          ))} */}
          <FormGroup>
            <Label className='capitalize' htmlFor='Password'>
              Name:
            </Label>
            <input
              type='text'
              placeholder='name'
              id='name'
              className='p-2 border rounded-md outline-none border-gray-l2 focus:border-gray-100'
              {...register('name')}
            />
            {errors.name && <p className='text-red'>{errors.name.message}</p>}
          </FormGroup>
          <FormGroup>
            <Label className='capitalize' htmlFor='Password'>
              Mobile Number:
            </Label>
            <input
              type='text'
              placeholder='Mobile Number'
              id='mobileNumber'
              className='p-2 border rounded-md outline-none border-gray-l2 focus:border-gray-100'
              {...register('mobileNumber')}
            />
            {errors.mobileNumber && <p className='text-red'>{errors.mobileNumber.message}</p>}
          </FormGroup>
          <FormGroup>
            <Label className='capitalize' htmlFor='Password'>
              Email:
            </Label>
            <input
              type='email'
              placeholder='Email'
              id='email'
              className='p-2 border rounded-md outline-none border-gray-l2 focus:border-gray-100'
              {...register('email')}
            />
            {errors.email && <p className='text-red'>{errors.email.message}</p>}
          </FormGroup>
          <FormGroup>
            <Label className='capitalize' htmlFor='Password'>
              Password:
            </Label>
            <input
              type='password'
              placeholder='Password'
              id='Password'
              className='p-2 border rounded-md outline-none border-gray-l2 focus:border-gray-100'
              {...register('Password')}
            />
            {errors.Password && <p className='text-red'>{errors.Password.message}</p>}
          </FormGroup>
          <FormGroup>
            <Label className='capitalize' htmlFor='Active'>
              Status:
            </Label>
            <FormGroup className='flex-row gap-5'>
              <div className='flex items-center gap-2'>
                <input
                  type='radio'
                  name='Status'
                  className='w-6 h-6'
                  id='Active'
                  checked={status}
                  onChange={(event) => handleChangeStatus(event)}
                />
                <Label className='capitalize text-black-l1' htmlFor='Active'>
                  Active
                </Label>
              </div>
              <div className='flex items-center gap-2'>
                <input
                  type='radio'
                  name='Status'
                  className='w-6 h-6'
                  id='InActive'
                  checked={!status}
                  onChange={(event) => handleChangeStatus(event)}
                />
                <Label className='capitalize text-black-l1' htmlFor='InActive'>
                  InActive
                </Label>
              </div>
            </FormGroup>
          </FormGroup>
          <Status
            className={clsxm(
              'border w-fit p-2.5 rounded-lg',
              { 'border-blue-l1 text-blue-l1': status === true }, // status
              { 'border-red text-red': status === false } // !status
            )}
            status={status ? 'Active' : 'InActive'}
          />

          <Button className='text-white bg-red w-full max-w-[200px]'>Add User</Button>
        </form>
      </div>
    </div>
  )
}
export default AddUserPage
