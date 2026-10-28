const items = [
  { id: 'chart', label: 'Savdo', d: 'M4 20V10M10 20V4M16 20v-7M22 20H2' },
  { id: 'wallet', label: 'Hamyon', d: 'M2 7h20v12H2zM2 11h20' },
  { id: 'swap', label: 'Almashuv', d: 'M7 4 3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7' },
  { id: 'bot', label: 'Botlar', d: 'M12 2v4M5 10h14v10H5zM9 15h.01M15 15h.01' },
  { id: 'cog', label: 'Sozlama', d: 'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M12 2v3M12 19v3M2 12h3M19 12h3' },
]

export default function Rail() {
  return (
    <nav className="sticky top-0 hidden h-dvh w-[72px] shrink-0 flex-col items-center gap-2 border-r border-[var(--line)] bg-[var(--surface)]/50 py-5 backdrop-blur md:flex">
      <div className="mb-4 grid size-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--glow-1)] to-[var(--glow-2)] font-mono text-sm font-bold text-[#07070e]">
        NX
      </div>
      {items.map((it, i) => (
        <button
          key={it.id}
          title={it.label}
          className={
            i === 0
              ? 'grid size-11 place-items-center rounded-xl bg-[var(--surface-2)] text-[var(--glow-1)] ring-1 ring-[var(--glow-1)]/40'
              : 'grid size-11 place-items-center rounded-xl text-[var(--ink-3)] transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--ink-1)]'
          }
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-5">
            <path d={it.d} />
          </svg>
        </button>
      ))}
    </nav>
  )
}
