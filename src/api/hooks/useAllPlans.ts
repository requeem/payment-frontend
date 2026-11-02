import { useQuery } from '@tanstack/react-query'
import { getAllPlans } from '../requests/plan/getAllPlans'

export const useAllPlans = (settings?: QuerySettings<typeof getAllPlans>) =>
   useQuery({
      queryKey: ['allPlans'],
      queryFn: () => getAllPlans({ config: settings?.config }),
      ...settings?.options
   })
