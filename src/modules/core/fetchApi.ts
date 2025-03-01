import axios from 'axios'
import { API_URL, useBoundStore } from '@/modules/core'

export const fetchApi = axios.create({
  baseURL: API_URL
})

fetchApi.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
)

fetchApi.interceptors.request.use((config) => {
  const { accessToken } = useBoundStore.getState()
  if (accessToken !== null) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})
