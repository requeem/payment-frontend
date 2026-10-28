import { Reveal } from './Reveal'
const questions = [
  { question: 'Как оформить подписку?', answer: 'Выберите тариф и следуйте инструкциям на странице оплаты. Доступность тарифов и стоимость уточняются при оформлении.' },
  { question: 'Можно ли изменить тариф?', answer: 'Возможность изменения тарифа зависит от настроек вашей подписки. Проверьте личный кабинет или обратитесь в поддержку.' },
  { question: 'Где посмотреть платежи?', answer: 'История транзакций будет доступна в личном кабинете после подключения платежных данных.' },
]

export function FaqSection() {
  return (
    <Reveal>
<section id="faq" className="border-t bg-muted/30 py-24"><div className="mx-auto max-w-3xl px-5"><h2 className="mb-10 text-center text-3xl font-bold">Частые вопросы</h2><div className="space-y-3">{questions.map(item=><details key={item.question} className="group rounded-xl border bg-card p-5"><summary className="cursor-pointer list-none font-medium">{item.question}<span className="float-right text-muted-foreground group-open:rotate-45">+</span></summary><p className="mt-4 text-sm leading-6 text-muted-foreground">{item.answer}</p></details>)}</div></div></section>
    </Reveal>
  )
}
