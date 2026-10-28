import { useState } from 'react'

// Gorizontal ustunlar — kanal nomi to'g'ridan-to'g'ri yorliq sifatida.
export default function BarList({ items, color = 'var(--c-1)', format = (v) => v.toLocaleString('ru-RU') }) {
  const [active, setActive] = useState(null)
  const max = Math.max(...items.map((i) => i.value))
  const total = items.reduce((s, i) => s + i.value, 0)

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item.name}
          className="group relative"
          onMouseEnter={() => setActive(item.name)}
          onMouseLeave={() => setActive(null)}
        >
          <div className="flex items-baseline justify-between gap-4 text-sm">
            <span className="text-[var(--ink-2)]">{item.name}</span>
            <span className="font-medium tabular-nums text-[var(--ink-1)]">{format(item.value)}</span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded bg-slate-100">
            <div
              className="h-full rounded transition-[width] duration-500"
              style={{
                width: `${(item.value / max) * 100}%`,
                background: color,
                opacity: active && active !== item.name ? 0.45 : 1,
              }}
            />
          </div>
          {active === item.name && (
            <div className="pointer-events-none absolute -top-1 right-0 z-10 rounded-md bg-[var(--ink-1)] px-2 py-1 text-[11px] text-white shadow">
              umumiy tashriflarning {((item.value / total) * 100).toFixed(1)}%
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
