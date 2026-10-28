const tabs = ['Umumiy', 'Servislar', 'Inshidentlar', 'Deploy', 'Loglar', 'Sozlamalar']

export default function AppBar({ tab, onTab, theme, onTheme }) {
  return (
    <div className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--surface)]">
      <div className="flex flex-wrap items-center gap-3 px-3 py-1.5">
        <span className="flex items-center gap-2 text-[12px] font-semibold tracking-tight">
          <span className="grid size-5 place-items-center rounded bg-[var(--c-1)] text-[10px] font-bold text-white">
            O
          </span>
          orbit-ops
        </span>

        <span className="hidden text-[11px] text-[var(--ink-3)] sm:inline">
          prod · eu-central-1 · 28.10.2026 14:42
        </span>

        <div className="ml-auto flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded border border-[var(--line)] px-2 py-1 text-[11px]">
            <span className="size-1.5 rounded-full bg-[var(--ok)]" />
            1 kritik · 3 ogohlantirish
          </span>
          <button
            onClick={() => onTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded border border-[var(--line)] px-2 py-1 text-[11px] text-[var(--ink-2)] hover:bg-[var(--surface-2)]"
          >
            {theme === 'dark' ? '☀ yorug‘' : '☾ qorong‘i'}
          </button>
        </div>
      </div>

      <nav className="flex gap-px overflow-x-auto px-3">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => onTab(t)}
            className={
              t === tab
                ? 'border-b-2 border-[var(--c-1)] px-3 py-1.5 text-[12px] font-medium text-[var(--ink-1)]'
                : 'border-b-2 border-transparent px-3 py-1.5 text-[12px] text-[var(--ink-3)] hover:text-[var(--ink-1)]'
            }
          >
            {t}
          </button>
        ))}
      </nav>
    </div>
  )
}
