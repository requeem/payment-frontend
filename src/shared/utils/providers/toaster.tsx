import { Toaster } from '@/components/ui/toast'
import { ReactNode } from 'react'

interface ToasterProvider {
   children: ReactNode
}

export const ToasterProvider = ({ children }: ToasterProvider) => {
   return <Toaster>{children}</Toaster>
}
