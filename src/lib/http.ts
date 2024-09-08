import { authApi } from '@/apis'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8017/v1',
  timeout: 1000 * 60 * 5,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

http.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
let refrehTokenPromise: Promise<unknown> | null = null
http.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    if (error.response.status === 401) {
      await authApi.logout()
    }
    const originalRequest = error.config
    if (error.response.status === 410 && !originalRequest._retry) {
      originalRequest._retry = true
      if (!refrehTokenPromise) {
        refrehTokenPromise = authApi
          .refreshToken()
          .then(() => {})
          .catch(async () => {
            await authApi.logout()
          })
          .finally(() => {
            refrehTokenPromise = null
          })
      }
      refrehTokenPromise.then(() => {
        return http(originalRequest)
      })
    }
    if (error.response.status !== 410) {
      throw new Error('Handle Error !410')
    }
    return Promise.reject(error)
  }
)

export default http
