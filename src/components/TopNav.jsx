const links = ['Umumiy', 'Buyurtma', 'Mahsulot', 'Mijoz', 'Hisobot']

export default function TopNav({ active, onSelect }) {
  return (
    <header className="border-b-[3px] border-[var(--ink)] bg-[var(--accent)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-5 py-3">
        <span className="brut-sm bg-[var(--ink)] px-3 py-1.5 text-sm font-black uppercase tracking-tight text-[var(--accent)]">
          BOZOR/OS
        </span>

        <nav className="flex flex-wrap gap-1.5">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => onSelect(l)}
              className={
                l === active
                  ? 'brut-sm brut-press bg-white px-3 py-1.5 text-xs font-black uppercase'
                  : 'px-3 py-1.5 text-xs font-black uppercase text-[var(--ink-2)] hover:text-[var(--ink)]'
              }
            >
              {l}
            </button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button className="brut-sm brut-press bg-white px-3 py-1.5 text-xs font-black uppercase">
            + mahsulot
          </button>
          <span className="brut-sm grid size-9 place-items-center bg-[var(--accent-2)] text-xs font-black">
            JK
          </span>
        </div>
      </div>
    </header>
  )
}
