import { useState } from 'react'

// Gorizontal ustunlar: hudud ulushi. Rang bitta hue — kattalikni uzunlik kodlaydi.
export default function RegionBars({ items }) {
  const [active, setActive] = useState(null)
  const max = Math.max(...items.map((i) => i.value))

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item.name}
          className="flex items-center gap-3"
          onMouseEnter={() => setActive(item.name)}
          onMouseLeave={() => setActive(null)}
        >
          <span className="w-24 shrink-0 truncate text-xs font-bold uppercase">{item.name}</span>
          <div className="h-6 flex-1 border-[2.5px] border-[var(--ink)] bg-white">
            <div
              className="h-full transition-[width] duration-300"
              style={{
                width: `${(item.value / max) * 100}%`,
                background: active === item.name ? 'var(--accent-2)' : 'var(--c-1)',
              }}
            />
          </div>
          <span className="w-10 shrink-0 text-right text-xs font-black tabular-nums">{item.value}%</span>
        </li>
      ))}
    </ul>
  )
}
