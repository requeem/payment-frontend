'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Check, CreditCard, ShieldCheck, Sparkles } from 'lucide-react'
import { buttonVariants } from '@/src/components/ui/button'
import { useUserQuery } from '@/src/api/hooks/useUserQuery'

const plans = [
  { name: 'Free', price: 0, description: 'Для знакомства с сервисом', features: ['Базовые возможности', 'Поддержка сообщества'] },
  { name: 'Standard', price: 490, description: 'Для регулярного использования', features: ['Все базовые возможности', 'Расширенные лимиты', 'Приоритетная поддержка'], popular: true },
  { name: 'Premium', price: 990, description: 'Максимум возможностей', features: ['Все возможности Standard', 'Максимальные лимиты', 'Персональная поддержка'] },
]
const questions = [
  { question: 'Как оформить подписку?', answer: 'Выберите тариф и следуйте инструкциям на странице оплаты. Доступность тарифов и стоимость уточняются при оформлении.' },
  { question: 'Можно ли изменить тариф?', answer: 'Возможность изменения тарифа зависит от настроек вашей подписки. Проверьте личный кабинет или обратитесь в поддержку.' },
  { question: 'Где посмотреть платежи?', answer: 'История транзакций будет доступна в личном кабинете после подключения платежных данных.' },
]

export default function Home() {
  const { data: user } = useUserQuery()
  const [annual, setAnnual] = useState(false)
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight"><span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Sparkles className="size-4" /></span>Nebula</Link>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex"><a href="#features" className="hover:text-foreground">Возможности</a><a href="#pricing" className="hover:text-foreground">Тарифы</a><a href="#faq" className="hover:text-foreground">FAQ</a></div>
          <Link className={buttonVariants({size:"sm"})} href={user ? '/dashboard' : '/auth/login'}>{user ? 'Личный кабинет' : 'Войти'} <ArrowRight className="ml-1 size-4" /></Link>
        </nav>
      </header>
      <main>
        <section className="mx-auto max-w-6xl px-5 py-24 text-center md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border bg-muted px-3 py-1 text-xs font-medium"><Sparkles className="size-3.5" /> Простое управление подписками</span>
          <h1 className="mx-auto mt-7 max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">Ваши возможности. <span className="text-muted-foreground">Ваш тариф.</span></h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">Выбирайте подходящий план, управляйте подпиской и следите за платежами в одном месте.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3"><a className={buttonVariants({size:"lg"})} href="#pricing">Выбрать тариф <ArrowRight className="ml-2 size-4" /></a><a className={buttonVariants({size:"lg",variant:"outline"})} href="#features">Узнать больше</a></div>
        </section>
        <section id="features" className="border-y bg-muted/30 py-20"><div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-3">{[{icon:ShieldCheck,title:'Прозрачные условия',text:'Информация о подписке и тарифе всегда под рукой.'},{icon:CreditCard,title:'История платежей',text:'Удобный доступ к информации о транзакциях.'},{icon:Sparkles,title:'Личный кабинет',text:'Управляйте аккаунтом в одном интерфейсе.'}].map(({icon:Icon,title,text})=><div key={title} className="rounded-xl border bg-card p-7 shadow-sm"><Icon className="mb-5 size-6" /><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></section>
        <section id="pricing" className="mx-auto max-w-6xl px-5 py-24"><div className="text-center"><h2 className="text-3xl font-bold tracking-tight md:text-4xl">Выберите свой тариф</h2><p className="mt-3 text-muted-foreground">Пример тарифной сетки — цены и условия уточняются при подключении оплаты.</p><div className="mt-7 inline-flex rounded-lg border bg-muted p-1 text-sm"><button className={`rounded-md px-4 py-2 ${!annual?'bg-background shadow-sm':''}`} onClick={()=>setAnnual(false)}>Ежемесячно</button><button className={`rounded-md px-4 py-2 ${annual?'bg-background shadow-sm':''}`} onClick={()=>setAnnual(true)}>Ежегодно</button></div></div><div className="mt-10 grid gap-5 md:grid-cols-3">{plans.map(plan=><div key={plan.name} className={`relative flex flex-col rounded-xl border bg-card p-7 shadow-sm ${plan.popular?'border-primary ring-1 ring-primary':''}`}>{plan.popular&&<span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">Популярный</span>}<h3 className="text-xl font-semibold">{plan.name}</h3><p className="mt-2 text-sm text-muted-foreground">{plan.description}</p><div className="mt-7 text-4xl font-bold">{annual ? Math.round(plan.price*12*.8).toLocaleString('ru-RU') : plan.price.toLocaleString('ru-RU')} ₽ <span className="text-sm font-normal text-muted-foreground">/{annual?'год':'мес.'}</span></div><ul className="my-8 flex-1 space-y-4">{plan.features.map(feature=><li key={feature} className="flex gap-2 text-sm"><Check className="size-4 shrink-0" />{feature}</li>)}</ul><Link className={buttonVariants({variant:plan.popular?"default":"outline"})} href="/auth/register">Начать <ArrowRight className="ml-2 size-4" /></Link></div>)}</div></section>
        <section id="faq" className="border-t bg-muted/30 py-24"><div className="mx-auto max-w-3xl px-5"><h2 className="mb-10 text-center text-3xl font-bold">Частые вопросы</h2><div className="space-y-3">{questions.map(item=><details key={item.question} className="group rounded-xl border bg-card p-5"><summary className="cursor-pointer list-none font-medium">{item.question}<span className="float-right text-muted-foreground group-open:rotate-45">+</span></summary><p className="mt-4 text-sm leading-6 text-muted-foreground">{item.answer}</p></details>)}</div></div></section>
      </main>
      <footer className="border-t py-8"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-muted-foreground"><span>© {new Date().getFullYear()} Nebula</span><div className="flex gap-5"><a href="#pricing">Тарифы</a><a href="#faq">FAQ</a></div></div></footer>
    </div>
  )
}
