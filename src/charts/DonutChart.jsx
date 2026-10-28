import { useState } from 'react'

// Halqa — segmentlar orasida 2px sirt bo'shlig'i, markazda hero raqam.
export default function DonutChart({ items, size = 190, thickness = 22 }) {
  const [active, setActive] = useState(null)
  const total = items.reduce((s, i) => s + i.value, 0)
  const r = (size - thickness) / 2
  const c = 2 * Math.PI * r
  const gap = 2

  let offset = 0
  const arcs = items.map((item) => {
    const len = (item.value / total) * c
    const arc = { ...item, len: Math.max(0, len - gap), offset }
    offset += len
    return arc
  })

  const shown = active ?? null

  return (
    <div className="flex items-center gap-6">
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-2)" strokeWidth={thickness} />
          {arcs.map((a) => (
            <circle
              key={a.name}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={a.color}
              strokeWidth={shown === a.name ? thickness + 4 : thickness}
              strokeDasharray={`${a.len} ${c - a.len}`}
              strokeDashoffset={-a.offset}
              strokeLinecap="butt"
              opacity={shown && shown !== a.name ? 0.4 : 1}
              className="transition-all duration-200"
              onMouseEnter={() => setActive(a.name)}
              onMouseLeave={() => setActive(null)}
            />
          ))}
        </svg>
        <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
          <div>
            <p className="font-mono text-2xl text-[var(--ink-1)]">
              {shown ? `${items.find((i) => i.name === shown).value}%` : '$284K'}
            </p>
            <p className="mt-0.5 text-[11px] uppercase tracking-wider text-[var(--ink-3)]">
              {shown ?? 'portfel'}
            </p>
          </div>
        </div>
      </div>

      <ul className="min-w-0 flex-1 space-y-2.5">
        {items.map((i) => (
          <li
            key={i.name}
            className="flex items-center gap-2.5 text-sm"
            onMouseEnter={() => setActive(i.name)}
            onMouseLeave={() => setActive(null)}
          >
            <span className="size-2.5 rounded-sm" style={{ background: i.color }} />
            <span className="text-[var(--ink-2)]">{i.name}</span>
            <span className="ml-auto font-mono text-[var(--ink-1)]">{i.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
