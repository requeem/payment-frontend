import { Reveal } from './Reveal'
import { CreditCard, ShieldCheck, LayoutDashboard } from 'lucide-react'

const features = [
   { icon: ShieldCheck, title: 'Условия подписки', text: 'Тариф и информация о подписке доступны в личном кабинете.' },
   { icon: CreditCard, title: 'История платежей', text: 'Просматривайте операции и их статусы в одном месте.' },
   { icon: LayoutDashboard, title: 'Управление аккаунтом', text: 'Основные сведения об аккаунте собраны на одном экране.' }
]

export function FeaturesSection() {
   return (
      <Reveal>
         <section id='features' aria-labelledby='features-heading' className='scroll-mt-16 border-y bg-muted/30 py-20'>
            <div className='mx-auto max-w-6xl px-5'>
               <h2 id='features-heading' className='max-w-xl text-3xl font-medium tracking-tight md:text-4xl'>Всё важное о подписке — под рукой</h2>
               <div className='mt-10 grid gap-8 border-t pt-8 md:grid-cols-3'>
                  {features.map(({ icon: Icon, title, text }) => (
                     <div key={title}>
                        <Icon aria-hidden='true' strokeWidth={1.5} className='mb-5 size-5 text-muted-foreground' />
                        <h3 className='text-base font-medium'>{title}</h3>
                        <p className='mt-3 max-w-sm text-sm leading-6 text-muted-foreground'>{text}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </Reveal>
   )
}
