import { Reveal } from './Reveal'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/src/components/ui/button'

export function HeroSection() {
   return (
      <Reveal>
         <section aria-labelledby='hero-title' className='mx-auto max-w-6xl px-5 pb-20 pt-24 md:pb-28 md:pt-36'>
            <div className='max-w-3xl'>
               <p className='text-sm text-muted-foreground'>Nebula / Подписки и платежи</p>
               <h1 id='hero-title' className='mt-6 text-5xl font-medium leading-[1.08] tracking-tight md:text-7xl'>
                  Подписка и платежи. <span className='text-muted-foreground'>Без лишних действий.</span>
               </h1>
               <p className='mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground'>
                  Выберите план, управляйте подпиской и проверяйте историю платежей в одном личном кабинете.
               </p>
               <div className='mt-9 flex flex-wrap gap-3'>
                  <a className={buttonVariants({ size: 'lg' })} href='#pricing'>
                     Смотреть тарифы <ArrowRight aria-hidden='true' className='ml-2 size-4' />
                  </a>
                  <a className={buttonVariants({ size: 'lg', variant: 'outline' })} href='#features'>
                     Как это работает
                  </a>
               </div>
            </div>
         </section>
      </Reveal>
   )
}
