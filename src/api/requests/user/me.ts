import { UserResponse } from '@/generated/model'
import { api } from '@/src/api/instance'

export const getUser = ({ config }: RequestConfig) => api.get<UserResponse>('/users/me', config)
