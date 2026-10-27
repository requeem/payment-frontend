'use client'

import { useRegisterUserMutation } from '@/api/hooks/useRegisterUserMutation'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ResponseError } from '@siberiacancode/fetches'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { Button } from '../ui/button'
import { toast } from '../ui/toast'
import { AuthWrapper } from './AuthWrapper'

const registerSchema = z.object({
   name: z.string().min(1, { message: 'Имя обязательно' }),
   email: z.email({ message: 'Введите корректный адрес электронной почты' }),
   password: z
      .string()
      .min(6, { message: 'Пароль должен содержать хотя бы 6 символов' })
      .max(128, { message: 'Пароль должен содержать не более 128 символов' })
})

type RegisterFormValues = z.infer<typeof registerSchema>

export function RegisterForm() {
   const form = useForm<RegisterFormValues>({
      resolver: zodResolver(registerSchema),
      mode: 'onChange',
      defaultValues: {
         name: '',
         email: '',
         password: ''
      }
   })

   const { mutateAsync, isPending } = useRegisterUserMutation({})

   const onSubmit = async (data: RegisterFormValues) => {
      try {
         await mutateAsync({ params: data })
      } catch (error) {
         if (error instanceof ResponseError) {
            toast.add({ description: error.response.data.message, type: 'error' })
         }
      }
   }

   return (
      <AuthWrapper
         title='Регистрация'
         description='Введите свои данные для входа в аккаунт'
         bottomText='Уже есть аккаунт?'
         bottomTextLink='Войти в аккаунт'
         bottomLinkHref='/auth/login'
      >
         <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-3'>
            <Controller
               name='name'
               control={form.control}
               render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                     <FieldLabel htmlFor={field.name}>Имя</FieldLabel>
                     <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder='Введите ваше имя'
                        autoComplete='off'
                     />

                     {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
               )}
            />
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
                        autoComplete='off'
                     />

                     {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
               )}
            />
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
                        placeholder='Введите пароль'
                        autoComplete='off'
                     />

                     {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
               )}
            />
            <Button disabled={isPending} type='submit' size='lg' className='w-full mt-5'>
               Продолжить
            </Button>
         </form>
      </AuthWrapper>
   )
}
