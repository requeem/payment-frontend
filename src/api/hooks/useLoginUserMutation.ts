import { useMutation } from '@tanstack/react-query'
import { login, LoginRequestConfig } from '../requests/auth/login'

export const useLoginUserMutation = (
   settings?: MutationSettings<LoginRequestConfig, typeof login>
) =>
   useMutation({
      mutationKey: ['login'],
      mutationFn: ({ params, config }) =>
         login({ params, config: { ...settings?.config, ...config } }),
      ...settings?.options
   })
