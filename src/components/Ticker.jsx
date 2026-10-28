// Yuqori qatordagi narx lentasi — o'sish/tushish yo'nalish belgisi bilan ham ko'rsatiladi.
export default function Ticker({ rows }) {
  return (
    <div className="flex items-stretch gap-px overflow-x-auto border-y border-[var(--line)] bg-[var(--surface)]/60">
      {rows.map((r) => {
        const up = r.change >= 0
        return (
          <div key={r.sym} className="flex min-w-44 flex-1 items-center gap-3 px-4 py-2.5">
            <span className="font-mono text-xs text-[var(--ink-3)]">{r.sym}</span>
            <span className="font-mono text-sm text-[var(--ink-1)]">
              {r.price.toLocaleString('ru-RU', { minimumFractionDigits: 2 })}
            </span>
            <span
              className="ml-auto font-mono text-xs"
              style={{ color: up ? 'var(--up)' : 'var(--down)' }}
            >
              {up ? '▲' : '▼'} {Math.abs(r.change).toFixed(2)}%
            </span>
          </div>
        )
      })}
    </div>
  )
}
