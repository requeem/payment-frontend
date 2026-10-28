import { getUser } from '@/src/api/requests/user/me'
import { useQuery } from '@tanstack/react-query'

export const useUserQuery = (settings?: QuerySettings<typeof getUser>) =>
   useQuery({
      queryKey: ['getUser'],
      queryFn: () => getUser({ config: settings?.config }),
      ...settings?.options
   })
