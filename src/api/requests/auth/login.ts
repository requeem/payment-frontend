import { LoginUserDto } from '@/generated/model'
import { api } from '@/src/api/instance'

export type LoginRequestConfig = RequestConfig<LoginUserDto>

export const login = ({ params, config }: LoginRequestConfig) =>
   api.post('/auth/login', params, config)
