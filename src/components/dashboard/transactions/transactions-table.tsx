'use client'

import { useUserQuery } from '@/src/api/hooks/useUserQuery'
import { ArrowLeft, ReceiptText } from 'lucide-react'
import { useState } from 'react'

export function TransactionsTable() {
   const { data: user } = useUserQuery()
   const [page, setPage] = useState(0)

   if (!user) {
      return null
   }
   const transactions = user?.data.transactions

   return (
      <section
         id='transactions'
         aria-labelledby='transactions-heading'
         className='overflow-hidden rounded-2xl border bg-card shadow-sm'
      >
         <div className='flex flex-wrap items-center justify-between gap-3 border-b px-6 py-5'>
            <div>
               <h2
                  id='transactions-heading'
                  className='text-lg font-semibold'
               >
                  История транзакций
               </h2>
               <p className='mt-1 text-sm text-muted-foreground'>
                  Пример отображения ваших платежей
               </p>
            </div>
            <span className='rounded-full border bg-muted px-3 py-1 text-xs text-muted-foreground'>
               Демо-данные
            </span>
         </div>
         <div className='overflow-x-auto'>
            <table className='w-full min-w-[650px] text-left text-sm'>
               <thead className='bg-muted/50 text-muted-foreground'>
                  <tr>
                     <th
                        scope='col'
                        className='px-6 py-3 font-medium text-center'
                     >
                        Транзакция
                     </th>
                     <th
                        scope='col'
                        className='px-6 py-3 font-medium text-center'
                     >
                        Дата
                     </th>
                     <th
                        scope='col'
                        className='px-6 py-3 font-medium text-center'
                     >
                        Сумма
                     </th>
                     <th
                        scope='col'
                        className='px-6 py-3 font-medium text-center'
                     >
                        Статус
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {transactions.map((item) => (
                     <tr
                        key={item.id}
                        className='border-t transition-colors hover:bg-muted/30 text-center'
                     >
                        <td className='px-6 py-4'>
                           <span className='flex items-center gap-2 font-medium'>
                              <ReceiptText className='size-4 text-muted-foreground' />
                              {item.id}
                           </span>
                           <span className='ml-6 text-xs text-muted-foreground flex'>
                              {item.provider}
                           </span>
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-muted-foreground'>
                           {item.createdAt}
                        </td>
                        {/* <td className='px-6 py-4'>{item.}</td> */}
                        <td className='whitespace-nowrap px-6 py-4 font-medium'>{item.amount}</td>
                        <td className='px-6 py-4'>
                           <span className='rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700'>
                              {item.status}
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <div className='flex items-center justify-between gap-4 border-t px-6 py-4 text-sm'>
            <div className='flex items-center gap-2'>
               <button
                  type='button'
                  aria-label='Предыдущая страница'
                  disabled={page === 0}
                  onClick={() => setPage(page - 1)}
                  className='rounded-lg border p-2 transition-colors hover:bg-muted disabled:opacity-40'
               >
                  <ArrowLeft className='size-4' />
               </button>
            </div>
         </div>
      </section>
   )
}
