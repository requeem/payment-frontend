'use client'

import { CreditCard, LayoutDashboard, Settings2, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigationItems = [
   { href: '/dashboard/view', label: 'Обзор', icon: LayoutDashboard },
   { href: '/dashboard/transactions', label: 'Транзакции', icon: CreditCard },
   { href: '/dashboard/subscription', label: 'Подписка', icon: Settings2 }
]

export function DashboardSidebar() {
   const pathname = usePathname()

   return (
      <aside className='flex flex-col border-b bg-card p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r md:p-7'>
         <Link
            href='/'
            className='flex items-center gap-2 text-xl font-semibold tracking-tight'
         >
            <span className='flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground'>
               <Sparkles className='size-5' />
            </span>
            Nebula
         </Link>
         <nav
            aria-label='Навигация личного кабинета'
            className='mt-7 flex flex-wrap gap-2 md:flex-col'
         >
            {navigationItems.map(({ href, label, icon: Icon }) => {
               const isActive = pathname === href || pathname.startsWith(`${href}/`)
               return (
                  <Link
                     key={href}
                     href={href}
                     aria-current={isActive ? 'page' : undefined}
                     className='flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground aria-[current=page]:bg-muted aria-[current=page]:font-medium aria-[current=page]:text-foreground'
                  >
                     <Icon className='size-4' /> {label}
                  </Link>
               )
            })}
         </nav>
         <p className='mt-auto hidden pt-8 text-xs text-muted-foreground md:block'>
            Nebula · Демо-интерфейс
         </p>
      </aside>
   )
}
