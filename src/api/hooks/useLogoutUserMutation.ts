import { logout, LogoutRequestConfig } from '@/src/api/requests/auth/logout'
import { useMutation } from '@tanstack/react-query'

export const useLogoutUserMutation = (
   settings?: MutationSettings<LogoutRequestConfig | void, typeof logout>
) =>
   useMutation({
      mutationKey: ['logout'],
      mutationFn: (variables) => logout({ config: { ...settings?.config, ...variables?.config } }),
      ...settings?.options
   })
