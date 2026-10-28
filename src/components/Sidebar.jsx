import Icon from './Icon'

const nav = [
  { icon: 'grid', label: 'Umumiy', active: true },
  { icon: 'chart', label: 'Analitika' },
  { icon: 'users', label: 'Mijozlar' },
  { icon: 'card', label: 'Hisob-kitob' },
  { icon: 'box', label: 'Mahsulotlar' },
  { icon: 'cog', label: 'Sozlamalar' },
]

export default function Sidebar() {
  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-slate-200 bg-white px-4 py-6 lg:flex">
      <div className="flex items-center gap-2.5 px-2">
        <span className="grid size-8 place-items-center rounded-lg bg-[var(--c-1)] text-white">
          <Icon name="bolt" className="size-4" strokeWidth={2} />
        </span>
        <span className="text-sm font-semibold tracking-tight">Northwind</span>
      </div>

      <nav className="mt-8 space-y-1">
        {nav.map((item) => (
          <a
            key={item.label}
            href="#"
            className={
              item.active
                ? 'flex items-center gap-3 rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-[var(--ink-1)]'
                : 'flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-[var(--ink-2)] transition-colors hover:bg-slate-50 hover:text-[var(--ink-1)]'
            }
          >
            <Icon name={item.icon} className="size-[18px]" />
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-auto rounded-xl border border-slate-200 p-4">
        <p className="text-sm font-medium">Growth reja</p>
        <p className="mt-1 text-xs text-[var(--ink-2)]">Limitning 68% ishlatildi</p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-[68%] rounded-full bg-[var(--c-1)]" />
        </div>
        <button className="mt-3 w-full rounded-lg border border-slate-200 py-1.5 text-xs font-medium transition-colors hover:bg-slate-50">
          Tarifni oshirish
        </button>
      </div>
    </aside>
  )
}
