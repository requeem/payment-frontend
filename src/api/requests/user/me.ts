import { api } from '@/src/api/instance'
import { UserResponse } from '@/generated/model'

export const getUser = ({ config }: RequestConfig) => api.get<UserResponse>('/users/me', config)
