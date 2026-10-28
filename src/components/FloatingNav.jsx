const items = [
  { id: 'home', label: 'Bosh sahifa', d: 'M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z' },
  { id: 'pulse', label: 'Salomatlik', d: 'M3 12h4l2.5-7 4 14L16 12h5' },
  { id: 'run', label: 'Mashqlar', d: 'M13 4a2 2 0 1 0 0-.1M9 20l2-5 3-2-1-5 4 3 3 1M6 12l3-3' },
  { id: 'moon', label: 'Uyqu', d: 'M21 13a9 9 0 1 1-10-10 7 7 0 0 0 10 10Z' },
  { id: 'user', label: 'Profil', d: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8' },
]

export default function FloatingNav({ active, onSelect }) {
  return (
    <nav className="glass fixed bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-1 rounded-full p-1.5 shadow-lg">
      {items.map((it) => (
        <button
          key={it.id}
          onClick={() => onSelect(it.id)}
          aria-label={it.label}
          aria-current={active === it.id}
          className={
            active === it.id
              ? 'flex items-center gap-2 rounded-full bg-[var(--ink-1)] px-4 py-2.5 text-xs font-medium text-white'
              : 'flex items-center gap-2 rounded-full px-3.5 py-2.5 text-xs text-[var(--ink-2)] transition-colors hover:bg-white/60'
          }
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-[18px]"
          >
            <path d={it.d} />
          </svg>
          {active === it.id && <span>{it.label}</span>}
        </button>
      ))}
    </nav>
  )
}
