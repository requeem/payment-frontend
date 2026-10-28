import { api } from '@/src/api/instance'
import { LoginUserDto, SuccessResponse } from '@/generated/model'

export type LoginRequestConfig = RequestConfig<LoginUserDto>

export const login = ({ params, config }: LoginRequestConfig) =>
   api.post<SuccessResponse>('/auth/login', params, config)
