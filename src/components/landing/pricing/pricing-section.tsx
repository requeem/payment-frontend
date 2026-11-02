'use client'

import { Reveal } from '../Reveal'

import { useAllPlans } from '@/src/api/hooks/useAllPlans'
import { useUserQuery } from '@/src/api/hooks/useUserQuery'
import { cn } from 'cn'
import { useState } from 'react'
import { Button } from '../../ui/button'
import { Period } from './billing-period'
import { PlanCard } from './pricing-card'

export function PricingSection() {
   const [selectedPeriod, setSelectedPeriod] = useState<Period>('MONTHLY')

   const { data: plans } = useAllPlans()
   const { data: user } = useUserQuery()
   console.log(user)
   const currentPlanIds = user?.data.subscriptions.plan.map((plan) => plan.id)

   const isActivePeriod = (period: Period) => selectedPeriod === period

   return (
      <Reveal>
         <section
            id='pricing'
            className='mx-auto max-w-6xl px-5 py-24'
         >
            <div className='text-center'>
               <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>
                  Выберите свой тариф
               </h2>
               <p className='mt-3 text-muted-foreground'>
                  Демонстрационные цены — условия уточняются при оформлении.
               </p>
               <div className='mt-7 rounded-lg border bg-muted p-1 text-sm inline-flex gap-1'>
                  <Button
                     className={cn(
                        `rounded-md px-4 py-2`,
                        isActivePeriod('MONTHLY') && 'bg-muted shadow-md'
                     )}
                     onClick={() => setSelectedPeriod('MONTHLY')}
                     variant='outline'
                  >
                     Ежемесячно
                  </Button>
                  <Button
                     className={cn(
                        `rounded-md px-4 py-2`,
                        isActivePeriod('YEARLY') && 'bg-muted shadow-md'
                     )}
                     onClick={() => setSelectedPeriod('YEARLY')}
                     variant='outline'
                  >
                     Ежегодно
                  </Button>
               </div>
            </div>
            <div className='mt-10 grid gap-5 md:grid-cols-3'>
               {plans?.data.map((plan) => (
                  <PlanCard
                     key={plan.id}
                     period={selectedPeriod}
                     plan={plan}
                     isActivePlanUser={currentPlanIds?.some((id) => plan.id === id) ?? false}
                  />
               ))}
            </div>
         </section>
      </Reveal>
   )
}
