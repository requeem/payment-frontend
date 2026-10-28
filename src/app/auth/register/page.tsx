import { RegisterForm } from '@/src/components/auth/RegisterForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'Регистрация'
}

export default function RegisterPage() {
   return <RegisterForm />
}
