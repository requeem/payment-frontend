'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react'

interface AuthWrapperProps {
  title: string
  description: string
  bottomText?: string
  bottomTextLink?: string
  bottomLinkHref?: string
  children: ReactNode
}

export function AuthWrapper({ title, description, bottomText, bottomTextLink, bottomLinkHref, children }: AuthWrapperProps) {
  const reduceMotion = useReducedMotion()
  const transition = { duration: reduceMotion ? 0 : 0.65, ease: 'easeOut' as const }
  return (
    <div className="grid min-h-screen bg-background lg:grid-cols-2">
      <aside className="relative hidden min-h-screen overflow-hidden bg-[#111827] p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <motion.div aria-hidden="true" className="pointer-events-none absolute -right-40 top-20 size-[540px] rounded-full bg-violet-600/25 blur-[110px]" animate={reduceMotion ? {} : { x: [0, -25, 0], y: [0, 30, 0] }} transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-32 size-[450px] rounded-full bg-blue-500/20 blur-[100px]" animate={reduceMotion ? {} : { x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }} />
        <Link href="/" className="relative z-10 inline-flex items-center gap-3 text-xl font-semibold"><span className="flex size-10 items-center justify-center rounded-xl bg-white text-slate-900"><Sparkles className="size-5" /></span>Nebula</Link>
        <div className="relative z-10 max-w-lg">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
            <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80"><Sparkles className="size-4" /> Пространство ваших возможностей</span>
            <h2 className="text-5xl font-semibold leading-tight tracking-tight">Всё важное.<br /><span className="text-violet-300">В одном месте.</span></h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-slate-300">Управляйте подпиской, следите за платежами и выбирайте возможности под себя.</p>
          </motion.div>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ ...transition, delay: reduceMotion ? 0 : 0.2 }} className="mt-12 max-w-sm rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between"><span className="text-sm text-slate-300">Ваше пространство</span><ArrowUpRight className="size-5 text-violet-300" /></div>
            <div className="mt-6 flex items-center gap-3"><span className="flex size-11 items-center justify-center rounded-xl bg-violet-400/20"><CheckCircle2 className="size-6 text-violet-300" /></span><div><p className="font-semibold">Просто и удобно</p><p className="text-sm text-slate-300">Подписки под вашим контролем</p></div></div>
          </motion.div>
        </div>
        <p className="relative z-10 text-sm text-slate-400">© {new Date().getFullYear()} Nebula</p>
      </aside>
      <main className="flex min-h-screen flex-col px-6 py-7 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"><ArrowLeft className="size-4" /> На главную</Link>
          <Link href="/" className="flex items-center gap-2 font-semibold lg:hidden"><Sparkles className="size-5" /> Nebula</Link>
        </div>
        <div className="flex flex-1 items-center justify-center py-12">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={transition} className="w-full max-w-[420px]">
            <div className="mb-9"><div className="mb-6 flex size-12 items-center justify-center rounded-2xl border bg-muted"><Sparkles className="size-6" /></div><h1 className="text-4xl font-semibold tracking-tight">{title}</h1><p className="mt-3 text-muted-foreground">{description}</p></div>
            <div>{children}</div>
            {bottomText && bottomTextLink && bottomLinkHref && <p className="mt-8 text-center text-sm text-muted-foreground">{bottomText} <Link href={bottomLinkHref} className="font-semibold text-foreground underline-offset-4 hover:underline">{bottomTextLink}</Link></p>}
          </motion.div>
        </div>
      </main>
    </div>
  )
}
