export default function Block({ title, tag, action, children, className = '', bg = 'var(--card)' }) {
  return (
    <section className={`brut ${className}`} style={{ background: bg }}>
      {(title || action) && (
        <div className="flex items-center justify-between gap-3 border-b-[3px] border-[var(--ink)] px-5 py-3">
          <div className="flex items-center gap-2.5">
            <h2 className="text-sm font-black uppercase tracking-tight">{title}</h2>
            {tag && (
              <span className="border-2 border-[var(--ink)] bg-[var(--accent)] px-1.5 py-0.5 text-[10px] font-black uppercase">
                {tag}
              </span>
            )}
          </div>
          {action}
        </div>
      )}
      <div className="p-5">{children}</div>
    </section>
  )
}
