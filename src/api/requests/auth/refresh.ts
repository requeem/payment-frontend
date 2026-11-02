import { api } from '@/src/api/instance'

export const refresh = (requestConfig?: RequestConfig) =>
   api.get('/auth/refresh', requestConfig?.config)
