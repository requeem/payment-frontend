'use client'
import { ReactNode } from 'react'
import { ToasterProvider } from './toaster'
import { TanStackQueryProvider } from './tanstack-query'

interface ProvidersProps {
   children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
   return (
      <TanStackQueryProvider>
         <ToasterProvider>{children}</ToasterProvider>
      </TanStackQueryProvider>
   )
}
