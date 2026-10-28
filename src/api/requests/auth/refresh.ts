import { SuccessResponse } from '@/generated/model'
import { api } from '@/src/api/instance'

export const refresh = (requestConfig?: RequestConfig) =>
   api.get<SuccessResponse>('/auth/refresh', requestConfig?.config)
