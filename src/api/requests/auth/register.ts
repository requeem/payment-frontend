import { api } from '@/api/instance'
import { RegisterUserDto } from '@/api/types'

export type RegisterRequestConfig = RequestConfig<RegisterUserDto>

export const register = ({ params, config }: RegisterRequestConfig) =>
   api.post('/auth/register', params, config)
