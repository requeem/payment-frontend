'use client'

import { Reveal } from './Reveal'

import { useState } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { buttonVariants } from '@/src/components/ui/button'

const plans = [
  { name: 'Free', price: 0, features: ['Базовые возможности', 'Поддержка сообщества'] },
  { name: 'Standard', price: 490, features: ['Расширенные лимиты', 'Приоритетная поддержка'], popular: true },
  { name: 'Premium', price: 990, features: ['Максимальные лимиты', 'Персональная поддержка'] },
]

function PlanCard({ plan, annual }: { plan: (typeof plans)[number]; annual: boolean }) {
  const price = annual ? Math.round(plan.price * 12 * 0.8) : plan.price
  return (
    <article className={`relative flex flex-col rounded-xl border bg-card p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${plan.popular ? 'border-primary ring-1 ring-primary' : ''}`}>
      {plan.popular && <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">Популярный</span>}
      <h3 className="text-xl font-semibold">{plan.name}</h3>
      <p className="mt-7 text-4xl font-bold">{price.toLocaleString('ru-RU')} ₽ <span className="text-sm font-normal text-muted-foreground">/{annual ? 'год' : 'мес.'}</span></p>
      <ul className="my-8 flex-1 space-y-4">{plan.features.map(feature => <li key={feature} className="flex gap-2 text-sm"><Check className="size-4 shrink-0" />{feature}</li>)}</ul>
      <Link href="/auth/register" className={buttonVariants({ variant: plan.popular ? 'default' : 'outline' })}>Начать</Link>
    </article>
  )
}

export function PricingSection() {
  const [annual, setAnnual] = useState(false)
  return (
    <Reveal>
<section id="pricing" className="mx-auto max-w-6xl px-5 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Выберите свой тариф</h2>
        <p className="mt-3 text-muted-foreground">Демонстрационные цены — условия уточняются при оформлении.</p>
        <div className="mt-7 inline-flex rounded-lg border bg-muted p-1 text-sm">
          <button type="button" className={`rounded-md px-4 py-2 ${!annual ? 'bg-background shadow-sm' : ''}`} onClick={() => setAnnual(false)}>Ежемесячно</button>
          <button type="button" className={`rounded-md px-4 py-2 ${annual ? 'bg-background shadow-sm' : ''}`} onClick={() => setAnnual(true)}>Ежегодно</button>
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">{plans.map(plan => <PlanCard key={plan.name} plan={plan} annual={annual} />)}</div>
    </section>
    </Reveal>
  )
}
