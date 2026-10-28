import { ReactNode } from 'react'
import { Toaster } from '@/src/components/ui/toast'

interface ToasterProvider {
   children: ReactNode
}

export const ToasterProvider = ({ children }: ToasterProvider) => {
   return <Toaster>{children}</Toaster>
}
