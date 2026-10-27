import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'

interface TanStackQueryProviderProps {
   children: ReactNode
}

export function TanStackQueryProvider({ children }: TanStackQueryProviderProps) {
   const [client] = useState(new QueryClient())

   return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
