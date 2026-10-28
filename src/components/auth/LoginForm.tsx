'use client'

import { Field, FieldDescription, FieldError, FieldLabel } from '@/src/components/ui/field'
import { Input } from '@/src/components/ui/input'
import { Controller, useForm } from 'react-hook-form'
import { motion, useReducedMotion } from 'motion/react'
import { AuthWrapper } from './AuthWrapper'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLoginUserMutation } from '@/src/api/hooks/useLoginUserMutation'
import { Button } from '@/src/components/ui/button'
import { toast } from '@/src/components/ui/toast'
import { useRouter } from 'next/navigation'

const loginSchema = z.object({
   email: z.email({ message: 'Введите корректный адрес электронной почты' }),
   password: z.string().min(6, { message: 'Пароль должен содержать хотя бы 6 символов' })
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm() {
   const reduceMotion = useReducedMotion()
   const { mutate, isPending } = useLoginUserMutation()
   const router = useRouter()

   const form = useForm<LoginFormValues>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
         email: '',
         password: ''
      }
   })

   const onSubmit = (data: LoginFormValues) => {
      mutate(
         { params: data },
         {
            onSuccess: () => {
               router.push('/')
            },
            onError: (err) => {
               toast.add({ description: err?.response?.data?.message, type: 'error' })
            }
         }
      )
   }

   return (
      <AuthWrapper
         title='Войти'
         description='Введите свои данные, чтобы продолжить работу с Nebula'
         bottomText='Еще нет аккаунта?'
         bottomTextLink='Регистрация'
         bottomLinkHref='/auth/register'
      >
         <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-5'>
            <motion.div
               initial={reduceMotion ? false : { opacity: 0, y: 14 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: reduceMotion ? 0 : 0.4 }}
            >
               <Controller
                  name='email'
                  control={form.control}
                  render={({ field, fieldState }) => (
                     <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Почта</FieldLabel>
                        <Input
                           {...field}
                           id={field.name}
                           aria-invalid={fieldState.invalid}
                           placeholder='Введите свою почту'
                           autoComplete='email'
                        />
                        <FieldDescription></FieldDescription>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                     </Field>
                  )}
               />
            </motion.div>
            <motion.div
               initial={reduceMotion ? false : { opacity: 0, y: 14 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: reduceMotion ? 0 : 0.4 }}
            >
               <Controller
                  name='password'
                  control={form.control}
                  render={({ field, fieldState }) => (
                     <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Пароль</FieldLabel>
                        <Input
                           {...field}
                           id={field.name}
                           aria-invalid={fieldState.invalid}
                           type='password'
                           placeholder='Введите пароль'
                           autoComplete='current-password'
                        />
                        <FieldDescription></FieldDescription>
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                     </Field>
                  )}
               />
            </motion.div>
            <motion.div
               whileHover={reduceMotion ? undefined : { y: -2 }}
               whileTap={reduceMotion ? undefined : { scale: 0.99 }}
            >
               <Button size='lg' type='submit' isLoading={isPending} disabled={isPending}>
                  Продолжить
               </Button>
            </motion.div>
         </form>
      </AuthWrapper>
   )
}
