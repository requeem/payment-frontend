'use client'

import { useUserQuery } from '@/src/api/hooks/useUserQuery'
import { buttonVariants } from '@/src/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function SiteHeader() {
   const { data: user } = useUserQuery()
   return (
      <header className='sticky top-0 z-20 border-b bg-background/90 backdrop-blur'>
         <nav className='mx-auto flex h-16 max-w-6xl items-center justify-between px-5'>
            <Link
               href='/'
               className='flex items-center gap-2 text-xl font-bold tracking-tight'
            >
               <span className='flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground'>
                  <Sparkles className='size-4' />
               </span>
               Nebula
            </Link>
            <div className='hidden items-center gap-7 text-sm text-muted-foreground md:flex'>
               <a
                  href='#features'
                  className='hover:text-foreground'
               >
                  Возможности
               </a>
               <a
                  href='#pricing'
                  className='hover:text-foreground'
               >
                  Тарифы
               </a>
               <a
                  href='#faq'
                  className='hover:text-foreground'
               >
                  FAQ
               </a>
            </div>
            <Link
               className={buttonVariants({ size: 'sm' })}
               href={user ? '/dashboard/view' : '/auth/login'}
            >
               {user ? 'Личный кабинет' : 'Войти'} <ArrowRight className='ml-1 size-4' />
            </Link>
         </nav>
      </header>
   )
}
