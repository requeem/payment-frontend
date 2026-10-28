'use client'

import { motion, useReducedMotion } from 'motion/react'
import { DashboardSidebar } from '@/src/components/dashboard/DashboardSidebar'
import { SubscriptionCard } from '@/src/components/dashboard/SubscriptionCard'
import { TransactionsTable } from '@/src/components/dashboard/TransactionsTable'

export default function DashboardPage() {
   const reduceMotion = useReducedMotion()
   return (
      <div className='min-h-screen bg-muted/20 md:flex'>
         <DashboardSidebar />
         <main className='min-w-0 flex-1 px-5 py-8 sm:px-9 md:py-12'>
            <div className='mx-auto max-w-5xl'>
               <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.5 }}
               >
                  <p className='text-sm text-muted-foreground'>Личный кабинет / Обзор</p>
                  <h1 className='mt-3 text-3xl font-semibold tracking-tight sm:text-4xl'>
                     Добро пожаловать в Nebula
                  </h1>
                  <p className='mt-3 text-muted-foreground'>
                     Управляйте подпиской и просматривайте историю платежей.
                  </p>
                  <p className='mt-4 inline-flex rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground'>
                     Демонстрационный интерфейс · Без подключения API
                  </p>
               </motion.div>
               <motion.div
                  className='mt-9'
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.1 }}
               >
                  <SubscriptionCard />
               </motion.div>
               <motion.div
                  className='mt-7'
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.2 }}
               >
                  <TransactionsTable />
               </motion.div>
            </div>
         </main>
      </div>
   )
}
