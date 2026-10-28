export default function Panel({ title, meta, action, children, className = '' }) {
  return (
    <section className={`neon-ring rounded-2xl bg-[var(--surface)]/80 p-5 backdrop-blur ${className}`}>
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="flex items-baseline gap-3">
            <h2 className="text-sm font-medium tracking-tight text-[var(--ink-1)]">{title}</h2>
            {meta && <span className="font-mono text-[11px] text-[var(--ink-3)]">{meta}</span>}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  )
}
