import { IUserCreate } from '@/types'
import { createUser } from '@/apis'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { userSchema } from '@/validators'
import { yupResolver } from '@hookform/resolvers/yup'

export const useUserForm = () => {
  const navigate = useNavigate()

  const [status, setStatus] = useState<boolean>(true)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(userSchema)
  })

  // xử lý logic change status
  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.id === 'Active') // true or false
  }

  // sử lý logic submit form
  const onSubmit = async (data: IUserCreate) => {
    try {
      const userInfo = {
        ...data,
        status: status,
        created_at: new Date(),
        updated_at: new Date()
      }
      await createUser(userInfo)
      navigate('/admin')
      toast.success('Add user successfully')
    } catch (error) {
      toast.error('Add user failed')
    }
  }

  return {
    register,
    handleSubmit,
    control,
    errors,
    handleChangeStatus,
    onSubmit,
    status
  }
}
