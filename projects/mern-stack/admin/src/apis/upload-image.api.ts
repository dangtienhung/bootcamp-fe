import api from './base-url.api'

export const uploadImage = (data: FormData, token: string) => {
  return api.post('/upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  })
}
