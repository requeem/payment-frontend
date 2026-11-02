import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { buttonVariants } from '@/src/components/ui/button'

export function SubscriptionCard() {
   return (
      <section id='subscription' aria-labelledby='subscription-heading' className='overflow-hidden rounded-2xl border bg-card'>
         <div className='flex flex-wrap items-start justify-between gap-6 border-b p-6 sm:p-8'>
            <div>
               <p className='text-sm text-muted-foreground'>Текущая подписка · Демо</p>
               <h2 id='subscription-heading' className='mt-3 text-3xl font-medium tracking-tight'>Nebula Pro</h2>
               <p className='mt-3 text-sm text-muted-foreground'>Информация о плане и следующем списании</p>
            </div>
            <span className='inline-flex items-center gap-2 text-sm font-medium'>
               <span aria-hidden='true' className='size-2 rounded-full bg-emerald-600' /> Активен (демо)
            </span>
         </div>
         <div className='grid gap-8 p-6 sm:grid-cols-2 sm:p-8'>
            <div>
               <p className='text-sm text-muted-foreground'>Стоимость в месяц</p>
               <p className='mt-2 text-3xl font-medium tabular-nums'>990 ₽</p>
            </div>
            <div>
               <p className='text-sm text-muted-foreground'>Следующее списание</p>
               <p className='mt-2 text-2xl font-medium tabular-nums'>15 ноября 2026</p>
            </div>
         </div>
         <div className='flex flex-wrap items-center justify-between gap-4 border-t bg-muted/20 px-6 py-5 sm:px-8'>
            <p className='text-sm text-muted-foreground'>Данные подписки демонстрационные</p>
            <Link href='/#pricing' className={buttonVariants({ variant: 'outline' })}>
               Посмотреть тарифы <ArrowUpRight aria-hidden='true' className='ml-2 size-4' />
            </Link>
         </div>
      </section>
   )
}
