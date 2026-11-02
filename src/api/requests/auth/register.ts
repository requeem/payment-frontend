import { RegisterUserDto } from '@/generated/model'
import { api } from '@/src/api/instance'

export type RegisterRequestConfig = RequestConfig<RegisterUserDto>

export const register = ({ params, config }: RegisterRequestConfig) =>
   api.post('/auth/register', params, config)
