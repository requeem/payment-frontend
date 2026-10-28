import type { InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

import { refresh } from '@/src/api/requests/auth/refresh'

type RetryRequestConfig = InternalAxiosRequestConfig & {
   _retry?: boolean
}

export const api = axios.create({
   baseURL: process.env.NEXT_PUBLIC_API_URL,
   withCredentials: true
})

let refreshPromise: ReturnType<typeof refresh> | null = null

const refreshSession = () => {
   refreshPromise ??= refresh().finally(() => {
      refreshPromise = null
   })

   return refreshPromise
}

api.interceptors.response.use(
   (response) => response,
   async (error: unknown) => {
      if (!axios.isAxiosError(error)) {
         throw error
      }

      const config = error.config as RetryRequestConfig | undefined

      if (
         error.response?.status !== 401 ||
         !config ||
         config._retry ||
         config.url?.split('?')[0] === '/auth/refresh'
      ) {
         throw error
      }

      config._retry = true

      await refreshSession()

      return api(config)
   }
)
