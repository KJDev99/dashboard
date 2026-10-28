// Kontsentrik progress halqalari — har biri alohida maqsadga nisbatan foiz.
export default function Rings({ items, size = 184 }) {
  const stroke = 15
  const gapBetween = 7

  return (
    <div className="flex items-center gap-6">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0 -rotate-90">
        {items.map((item, i) => {
          const r = size / 2 - stroke / 2 - i * (stroke + gapBetween)
          const c = 2 * Math.PI * r
          const pct = Math.min(1, item.value / item.goal)
          return (
            <g key={item.label}>
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke={item.color}
                strokeWidth={stroke}
                opacity="0.18"
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke={item.color}
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={`${c * pct} ${c}`}
              />
            </g>
          )
        })}
      </svg>

      <ul className="min-w-0 flex-1 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <div className="flex items-baseline gap-2 text-sm">
              <span className="size-2.5 shrink-0 rounded-full" style={{ background: item.color }} />
              <span className="text-[var(--ink-2)]">{item.label}</span>
              <span className="num ml-auto font-semibold text-[var(--ink-1)]">
                {item.value}
                <span className="font-normal text-[var(--ink-3)]">/{item.goal}</span>
              </span>
            </div>
            <p className="mt-0.5 pl-[18px] text-[11px] text-[var(--ink-3)]">
              {item.unit} · {Math.round((item.value / item.goal) * 100)}% bajarildi
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
