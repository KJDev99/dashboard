export default function Pane({ title, meta, action, children, flush = false, className = '' }) {
  return (
    <section className={`overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface)] ${className}`}>
      {(title || action) && (
        <header className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--surface-2)] px-3 py-2">
          <div className="flex items-baseline gap-2">
            <h2 className="text-[12px] font-semibold tracking-tight">{title}</h2>
            {meta && <span className="text-[11px] text-[var(--ink-3)]">{meta}</span>}
          </div>
          {action}
        </header>
      )}
      <div className={flush ? '' : 'p-3'}>{children}</div>
    </section>
  )
}
