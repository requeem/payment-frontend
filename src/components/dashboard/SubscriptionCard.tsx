import Link from 'next/link'
import { ArrowUpRight, CalendarDays, Check, Crown, Sparkles } from 'lucide-react'
import { buttonVariants } from '@/src/components/ui/button'

export function SubscriptionCard() {
   return (
      <section
         id='subscription'
         aria-labelledby='subscription-heading'
         className='relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm sm:p-8'
      >
         <div className='pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-violet-500/10 blur-3xl' />
         <div className='relative flex flex-wrap items-start justify-between gap-4'>
            <div>
               <div className='mb-4 flex size-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600'>
                  <Crown className='size-5' />
               </div>
               <p className='text-sm text-muted-foreground'>Текущий план · Демо</p>
               <h2 id='subscription-heading' className='mt-2 text-3xl font-semibold tracking-tight'>
                  Nebula Pro
               </h2>
               <p className='mt-2 text-sm text-muted-foreground'>
                  Всё необходимое для продуктивной работы
               </p>
            </div>
            <span className='inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700'>
               <Check className='size-3.5' /> Активен (демо)
            </span>
         </div>
         <div className='relative mt-8 grid gap-4 rounded-xl border bg-muted/40 p-5 sm:grid-cols-2'>
            <div>
               <p className='text-xs text-muted-foreground'>Стоимость</p>
               <p className='mt-1 text-xl font-semibold'>
                  990 ₽ <span className='text-sm font-normal text-muted-foreground'>/ месяц</span>
               </p>
            </div>
            <div>
               <p className='flex items-center gap-1.5 text-xs text-muted-foreground'>
                  <CalendarDays className='size-3.5' /> Следующее списание
               </p>
               <p className='mt-1 text-xl font-semibold'>15 ноября 2026</p>
            </div>
         </div>
         <div className='relative mt-6 flex flex-wrap items-center justify-between gap-4'>
            <p className='flex items-center gap-2 text-sm text-muted-foreground'>
               <Sparkles className='size-4' /> Все преимущества Pro включены
            </p>
            <Link href='/#pricing' className={buttonVariants({ variant: 'outline' })}>
               Посмотреть тарифы <ArrowUpRight className='ml-2 size-4' />
            </Link>
         </div>
      </section>
   )
}
