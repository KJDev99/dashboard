export default function GlassCard({ title, subtitle, action, children, className = '' }) {
  return (
    <section className={`glass rounded-3xl p-6 ${className}`}>
      {(title || action) && (
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            {title && <h2 className="font-display text-[17px] font-semibold">{title}</h2>}
            {subtitle && <p className="mt-0.5 text-xs text-[var(--ink-3)]">{subtitle}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  )
}
