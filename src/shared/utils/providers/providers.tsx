'use client'
import { ReactNode } from 'react'
import { TanStackQueryProvider } from './tanstack-query'
import { ToasterProvider } from './toaster'

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
