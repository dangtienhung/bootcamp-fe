import axios, { AxiosInstance } from 'axios'

import { PayloadLogin } from '@/types/auth/auth.type'
import { ERole } from '@/types/enums/role.enum'
import { message } from 'antd'
import { jwtDecode } from 'jwt-decode'

class Http {
  instance: AxiosInstance

  constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.requestInterceptor()
    this.responseInterceptor()
  }

  requestInterceptor() {
    this.instance.interceptors.request.use((config) => {
      return config
    })
  }

  responseInterceptor() {
    this.instance.interceptors.response.use((response) => {
      const token = response.data.accessToken
      // giải mã token để kiểm tra xem có phải là admin hay không
      const decode = jwtDecode(token) as PayloadLogin
      if (decode.role === ERole.ADMIN || decode.role === ERole.STAFF) {
        return response
      }
      message.error('Tài khoản hoặc mật khẩu không đúng')
      throw new Error('Tài khoản hoặc mật khẩu không đúng')
    })
  }
}

export const instances = (url: string) => {
  const http = new Http(url)

  return http.instance
}
