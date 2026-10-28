import { CreditCard, ShieldCheck, Sparkles } from 'lucide-react'

export function FeaturesSection() {
  return (
<section id="features" className="border-y bg-muted/30 py-20"><div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-3">{[{icon:ShieldCheck,title:'Прозрачные условия',text:'Информация о подписке и тарифе всегда под рукой.'},{icon:CreditCard,title:'История платежей',text:'Удобный доступ к информации о транзакциях.'},{icon:Sparkles,title:'Личный кабинет',text:'Управляйте аккаунтом в одном интерфейсе.'}].map(({icon:Icon,title,text})=><div key={title} className="rounded-xl border bg-card p-7 shadow-sm"><Icon className="mb-5 size-6" /><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></section>
  )
}
