'use client'

import { DashboardSidebar } from '@/src/components/dashboard/DashboardSidebar'
import { SubscriptionCard } from '@/src/components/dashboard/SubscriptionCard'
import { TransactionsTable } from '@/src/components/dashboard/TransactionsTable'

export default function DashboardPage() {
   return (
      <div className='min-h-screen bg-muted/20 md:flex'>
         <DashboardSidebar />
         <main className='min-w-0 flex-1 px-5 py-8 sm:px-9 md:py-12'>
            <div className='mx-auto max-w-5xl'>
               <p className='text-sm text-muted-foreground'>Личный кабинет / Обзор</p>
               <h1 className='mt-3 text-3xl font-medium tracking-tight sm:text-4xl'>Подписка и платежи</h1>
               <p className='mt-3 text-muted-foreground'>Текущий тариф и история операций в одном месте</p>
               <p className='mt-4 text-xs text-muted-foreground'>Демонстрационный интерфейс · Без подключения API</p>
               <div className='mt-9'><SubscriptionCard /></div>
               <div className='mt-7'><TransactionsTable /></div>
            </div>
         </main>
      </div>
   )
}
