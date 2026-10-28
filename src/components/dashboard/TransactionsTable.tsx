'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, ReceiptText } from 'lucide-react'

const transactions = [
   {
      id: 'TXN-1048',
      date: '15.10.2026',
      plan: 'Nebula Pro',
      provider: 'ЮKassa',
      amount: '990 ₽',
      status: 'Оплачен'
   },
   {
      id: 'TXN-1032',
      date: '15.09.2026',
      plan: 'Nebula Pro',
      provider: 'ЮKassa',
      amount: '990 ₽',
      status: 'Оплачен'
   },
   {
      id: 'TXN-1014',
      date: '15.08.2026',
      plan: 'Nebula Pro',
      provider: 'ЮKassa',
      amount: '990 ₽',
      status: 'Оплачен'
   },
   {
      id: 'TXN-1008',
      date: '15.07.2026',
      plan: 'Nebula Standard',
      provider: 'ЮKassa',
      amount: '490 ₽',
      status: 'Оплачен'
   },
   {
      id: 'TXN-1001',
      date: '15.06.2026',
      plan: 'Nebula Standard',
      provider: 'ЮKassa',
      amount: '490 ₽',
      status: 'Оплачен'
   },
   {
      id: 'TXN-0995',
      date: '15.05.2026',
      plan: 'Nebula Standard',
      provider: 'ЮKassa',
      amount: '490 ₽',
      status: 'Оплачен'
   }
]
const pageSize = 4

export function TransactionsTable() {
   const [page, setPage] = useState(0)
   const totalPages = Math.ceil(transactions.length / pageSize)
   const rows = transactions.slice(page * pageSize, (page + 1) * pageSize)
   return (
      <section
         id='transactions'
         aria-labelledby='transactions-heading'
         className='overflow-hidden rounded-2xl border bg-card shadow-sm'
      >
         <div className='flex flex-wrap items-center justify-between gap-3 border-b px-6 py-5'>
            <div>
               <h2 id='transactions-heading' className='text-lg font-semibold'>
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
                     <th scope='col' className='px-6 py-3 font-medium'>
                        Транзакция
                     </th>
                     <th scope='col' className='px-6 py-3 font-medium'>
                        Дата
                     </th>
                     <th scope='col' className='px-6 py-3 font-medium'>
                        Тариф
                     </th>
                     <th scope='col' className='px-6 py-3 font-medium'>
                        Сумма
                     </th>
                     <th scope='col' className='px-6 py-3 font-medium'>
                        Статус
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {rows.map((item) => (
                     <tr key={item.id} className='border-t transition-colors hover:bg-muted/30'>
                        <td className='px-6 py-4'>
                           <span className='flex items-center gap-2 font-medium'>
                              <ReceiptText className='size-4 text-muted-foreground' />
                              {item.id}
                           </span>
                           <span className='ml-6 text-xs text-muted-foreground'>
                              {item.provider}
                           </span>
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-muted-foreground'>
                           {item.date}
                        </td>
                        <td className='px-6 py-4'>{item.plan}</td>
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
            <span className='text-muted-foreground'>
               Показано {page * pageSize + 1}–{Math.min((page + 1) * pageSize, transactions.length)}{' '}
               из {transactions.length}
            </span>
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
               <span className='text-xs text-muted-foreground'>
                  {page + 1} / {totalPages}
               </span>
               <button
                  type='button'
                  aria-label='Следующая страница'
                  disabled={page === totalPages - 1}
                  onClick={() => setPage(page + 1)}
                  className='rounded-lg border p-2 transition-colors hover:bg-muted disabled:opacity-40'
               >
                  <ArrowRight className='size-4' />
               </button>
            </div>
         </div>
      </section>
   )
}
