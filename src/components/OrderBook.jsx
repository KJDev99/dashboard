// Depth qatorlari — fon chizig'i hajmni kodlaydi, matn mono shriftda.
function Side({ rows, tone, label }) {
  const max = Math.max(...rows.map((r) => r.size))
  return (
    <div>
      <p className="mb-1.5 text-[11px] uppercase tracking-wider text-[var(--ink-3)]">{label}</p>
      <ul className="space-y-[3px]">
        {rows.map((r) => (
          <li key={r.price} className="relative overflow-hidden rounded px-2 py-1 font-mono text-[11px]">
            <span
              className="absolute inset-y-0 right-0 rounded"
              style={{ width: `${(r.size / max) * 100}%`, background: tone, opacity: 0.16 }}
            />
            <span className="relative flex justify-between">
              <span style={{ color: tone }}>
                {r.price.toLocaleString('ru-RU', { minimumFractionDigits: 1 })}
              </span>
              <span className="text-[var(--ink-2)]">{r.size.toFixed(3)}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function OrderBook({ book }) {
  return (
    <div className="space-y-4">
      <Side rows={book.asks} tone="var(--down)" label="Sotuv (ask)" />
      <div className="flex items-baseline justify-between rounded-lg bg-[var(--surface-2)] px-3 py-2">
        <span className="neon-text font-mono text-base text-[var(--glow-1)]">71 482,30</span>
        <span className="font-mono text-[11px] text-[var(--ink-3)]">spread 9,20</span>
      </div>
      <Side rows={book.bids} tone="var(--up)" label="Xarid (bid)" />
    </div>
  )
}
