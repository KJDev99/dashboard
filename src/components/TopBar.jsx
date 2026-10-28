import Icon from './Icon'

export default function TopBar({ range, onRange }) {
  const ranges = ['7 kun', '30 kun', '12 oy']

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="flex flex-wrap items-center gap-3 px-6 py-3.5">
        <div>
          <h1 className="text-base font-semibold tracking-tight">Umumiy ko‘rinish</h1>
          <p className="text-xs text-[var(--ink-3)]">28-oktabr, 2026 holatiga</p>
        </div>

        <label className="relative ml-auto hidden md:block">
          <Icon name="search" className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--ink-3)]" />
          <input
            placeholder="Mijoz yoki hisob izlash"
            className="w-64 rounded-lg border border-slate-200 bg-slate-50/60 py-2 pl-9 pr-3 text-sm placeholder:text-[var(--ink-3)] focus:border-[var(--c-1)] focus:bg-white focus:outline-none"
          />
        </label>

        {/* Filtrlar bitta qatorda, grafiklar ustida */}
        <div className="flex rounded-lg border border-slate-200 p-0.5">
          {ranges.map((r) => (
            <button
              key={r}
              onClick={() => onRange(r)}
              className={
                r === range
                  ? 'rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium'
                  : 'rounded-md px-3 py-1.5 text-xs text-[var(--ink-2)] hover:text-[var(--ink-1)]'
              }
            >
              {r}
            </button>
          ))}
        </div>

        <button className="grid size-9 place-items-center rounded-lg border border-slate-200 text-[var(--ink-2)] hover:bg-slate-50">
          <Icon name="bell" className="size-[18px]" />
        </button>
        <div className="grid size-9 place-items-center rounded-full bg-[var(--c-4)] text-xs font-semibold text-white">
          JK
        </div>
      </div>
    </header>
  )
}
