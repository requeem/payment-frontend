import { useCreatePaymentMutation } from '@/src/api/hooks/useCreatePayment'
import { Check } from 'lucide-react'
import { Button } from '../../ui/button'
import { Period, Plan } from './billing-period'
import { useRouter } from 'next/navigation'

interface PlanCardProps {
   period: Period
   plan: Plan
   isActivePlanUser: boolean
}

export const PlanCard = ({ period, plan, isActivePlanUser }: PlanCardProps) => {
   const { mutate } = useCreatePaymentMutation()
   const router = useRouter()

   const handlePayment = () => {
      if (isActivePlanUser) return

      mutate(
         {
            params: {
               planId: plan.id,
               billingPeriod: period,
               provider: 'YOOKASSA'
            }
         },
         {
            onSuccess: (data) => {
               router.push(data?.data?.confirmation?.confirmation_url)
            }
         }
      )
   }

   const price = period === 'MONTHLY' ? plan.mountlyPrice : plan.yearlyPrice

   return (
      <article
         className={`relative flex flex-col rounded-xl border bg-card p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${plan.isFeatured ? 'border-primary ring-1 ring-primary' : ''}`}
      >
         {plan.isFeatured && (
            <span className='absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground'>
               Популярный
            </span>
         )}
         <h3 className='text-xl font-semibold'>{plan.title}</h3>
         <p className='mt-7 text-4xl font-bold'>
            {price.toLocaleString('ru-RU')} ₽{' '}
            <span className='text-sm font-normal text-muted-foreground'>
               /{period === 'YEARLY' ? 'год' : 'мес.'}
            </span>
         </p>
         <ul className='my-8 flex-1 space-y-4'>
            {plan.features.map((feature) => (
               <li
                  key={feature}
                  className='flex gap-2 text-sm'
               >
                  <Check className='size-4 shrink-0' />
                  {feature}
               </li>
            ))}
         </ul>
         <Button onClick={handlePayment}>{isActivePlanUser ? 'Текущий' : 'Начать'}</Button>
      </article>
   )
}
