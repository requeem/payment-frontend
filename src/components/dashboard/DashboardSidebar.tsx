import Link from 'next/link'
import { CreditCard, LayoutDashboard, Settings2 } from 'lucide-react'

export function DashboardSidebar() {
   return (
      <aside className='flex flex-col border-b bg-card p-5 md:min-h-screen md:w-64 md:shrink-0 md:border-b-0 md:border-r md:p-6'>
         <Link href='/' className='text-xl font-semibold tracking-tight'>Nebula<span className='text-primary'>.</span></Link>
         <p className='mt-8 mb-2 text-xs text-muted-foreground'>Личный кабинет</p>
         <nav aria-label='Навигация личного кабинета' className='flex flex-wrap gap-1 md:flex-col'>
            <Link href='/dashboard' aria-current='page' className='flex min-h-9 items-center gap-3 rounded-lg bg-muted px-3 py-2 text-sm font-medium'>
               <LayoutDashboard aria-hidden='true' strokeWidth={1.5} className='size-4' /> Обзор
            </Link>
            <a href='#transactions' className='flex min-h-9 items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'>
               <CreditCard aria-hidden='true' strokeWidth={1.5} className='size-4' /> Транзакции
            </a>
            <a href='#subscription' className='flex min-h-9 items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'>
               <Settings2 aria-hidden='true' strokeWidth={1.5} className='size-4' /> Подписка
            </a>
         </nav>
         <p className='mt-auto hidden pt-8 text-xs text-muted-foreground md:block'>Nebula · Демо-интерфейс</p>
      </aside>
   )
}
