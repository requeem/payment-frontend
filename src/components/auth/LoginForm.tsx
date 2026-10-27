'use client'

import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Controller, useForm } from 'react-hook-form'
import { AuthWrapper } from './AuthWrapper'

export function LoginForm() {
   const form = useForm({
      defaultValues: {
         email: '',
         password: ''
      }
   })

   return (
      <AuthWrapper
         title='Войти'
         description='Введите свои данные для входа в аккаунт'
         bottomText='Еще нет аккаунта?'
         bottomTextLink='Регистрация'
         bottomLinkHref='/auth/register'
      >
         <div className='flex flex-col gap-3'>
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
                     <FieldDescription></FieldDescription>
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
                     <FieldDescription></FieldDescription>
                     {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
               )}
            />
         </div>
      </AuthWrapper>
   )
}
