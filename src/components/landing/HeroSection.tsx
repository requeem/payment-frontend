import { Reveal } from './Reveal'
import { ArrowRight, Sparkles } from 'lucide-react'
import { buttonVariants } from '@/src/components/ui/button'

export function HeroSection() {
   return (
      <Reveal>
         <section className='mx-auto max-w-6xl px-5 py-24 text-center md:py-32'>
            <span className='inline-flex items-center gap-2 rounded-full border bg-muted px-3 py-1 text-xs font-medium'>
               <Sparkles className='size-3.5' /> Простое управление подписками
            </span>
            <h1 className='mx-auto mt-7 max-w-3xl text-5xl font-bold tracking-tight md:text-7xl'>
               Ваши возможности. <span className='text-muted-foreground'>Ваш тариф.</span>
            </h1>
            <p className='mx-auto mt-6 max-w-xl text-lg text-muted-foreground'>
               Выбирайте подходящий план, управляйте подпиской и следите за платежами в одном месте.
            </p>
            <div className='mt-9 flex flex-wrap justify-center gap-3'>
               <a className={buttonVariants({ size: 'lg' })} href='#pricing'>
                  Выбрать тариф <ArrowRight className='ml-2 size-4' />
               </a>
               <a className={buttonVariants({ size: 'lg', variant: 'outline' })} href='#features'>
                  Узнать больше
               </a>
            </div>
         </section>
      </Reveal>
   )
}
