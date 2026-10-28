export function SiteFooter() {
  return (
<footer className="border-t py-8"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 text-sm text-muted-foreground"><span>© {new Date().getFullYear()} Nebula</span><div className="flex gap-5"><a href="#pricing">Тарифы</a><a href="#faq">FAQ</a></div></div></footer>
  )
}
