import { useMutation } from '@tanstack/react-query'
import { register, RegisterRequestConfig } from '../requests/auth/register'

export const useRegisterUserMutation = (
   settings?: MutationSettings<RegisterRequestConfig, typeof register>
) =>
   useMutation({
      mutationKey: ['register'],
      mutationFn: ({ params, config }) =>
         register({
            params,
            config: { ...settings?.config, ...config }
         }),
      ...settings?.options
   })
