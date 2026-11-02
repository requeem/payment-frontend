'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/src/components/ui/button'
import { useUserQuery } from '@/src/api/hooks/useUserQuery'

export function SiteHeader() {
   const { data: user } = useUserQuery()
   return (
      <header className='sticky top-0 z-20 border-b bg-background/95 backdrop-blur-sm'>
         <nav aria-label='Основная навигация' className='mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5'>
            <Link href='/' className='text-xl font-semibold tracking-tight'>Nebula<span className='text-primary'>.</span></Link>
            <div className='hidden items-center gap-7 text-sm text-muted-foreground md:flex'>
               <a href='#features' className='transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4'>Возможности</a>
               <a href='#pricing' className='transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4'>Тарифы</a>
               <a href='#faq' className='transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4'>Вопросы</a>
            </div>
            <Link className={buttonVariants({ size: 'sm' })} href={user ? '/dashboard' : '/auth/login'}>
               {user ? 'Личный кабинет' : 'Войти'} <ArrowRight aria-hidden='true' className='ml-1 size-4' />
            </Link>
         </nav>
      </header>
   )
}
