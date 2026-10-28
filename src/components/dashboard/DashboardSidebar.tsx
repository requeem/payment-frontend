import Link from 'next/link'
import { CreditCard, LayoutDashboard, Settings2, Sparkles } from 'lucide-react'

export function DashboardSidebar() {
  return (
    <aside className="flex flex-col border-b bg-card p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r md:p-7">
      <Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight"><span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Sparkles className="size-5" /></span>Nebula</Link>
      <nav aria-label="Навигация личного кабинета" className="mt-7 flex flex-wrap gap-2 md:flex-col">
        <Link href="/dashboard" aria-current="page" className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2.5 text-sm font-medium"><LayoutDashboard className="size-4" /> Обзор</Link>
        <a href="#transactions" className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"><CreditCard className="size-4" /> Транзакции</a>
        <a href="#subscription" className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"><Settings2 className="size-4" /> Подписка</a>
      </nav>
      <p className="mt-auto hidden pt-8 text-xs text-muted-foreground md:block">Nebula · Демо-интерфейс</p>
    </aside>
  )
}
