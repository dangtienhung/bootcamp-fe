import axios, { AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance

  constructor(url: string) {
    this.instance = axios.create({
      baseURL: url
    })

    this.requestInterceptor()
    // this.responseInterceptor()
  }

  requestInterceptor() {
    this.instance.interceptors.request.use(
      async (config) => {
        // if (this.token) {
        //   config.headers.Authorization = this.token
        //   return config
        // }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  responseInterceptor() {
    this.instance.interceptors.response.use(
      async (response) => {
        return response
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }
}

export const instances = (url: string) => {
  const http = new Http(url)

  return http.instance
}
