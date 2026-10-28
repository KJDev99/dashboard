import { useState } from 'react'

const W = 680
const H = 280
const PAD = { top: 20, right: 16, bottom: 44, left: 44 }

/**
 * Guruhlangan ustunlar — ikkala qator bitta y o'qida (buyurtmalar soni).
 * Brutal uslub: har bir ustunda qalin qora kontur.
 */
export default function GroupedBars({ labels, series }) {
  const [hover, setHover] = useState(null)

  const max = Math.max(...series.flatMap((s) => s.data))
  const top = Math.ceil(max / 100) * 100
  const plotW = W - PAD.left - PAD.right
  const plotH = H - PAD.top - PAD.bottom
  const slot = plotW / labels.length
  const barW = (slot - 16) / series.length - 2

  const groupX = (i) => PAD.left + slot * i
  const y = (v) => PAD.top + plotH - (v / top) * plotH

  const ticks = [0, top / 4, top / 2, (top * 3) / 4, top]

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Haftalik buyurtmalar">
        {ticks.map((t) => (
          <g key={t}>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={y(t)}
              y2={y(t)}
              stroke="var(--ink)"
              strokeWidth={t === 0 ? 3 : 1}
              opacity={t === 0 ? 1 : 0.18}
            />
            <text x={PAD.left - 10} y={y(t) + 4} textAnchor="end" className="fill-[var(--ink-2)] text-[11px] font-bold">
              {t}
            </text>
          </g>
        ))}

        {labels.map((label, i) => (
          <g key={label} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
            <rect x={groupX(i)} y={PAD.top} width={slot} height={plotH} fill="transparent" />
            {series.map((s, si) => {
              const v = s.data[i]
              const bx = groupX(i) + 8 + si * (barW + 2)
              return (
                <rect
                  key={s.key}
                  x={bx}
                  y={y(v)}
                  width={barW}
                  height={PAD.top + plotH - y(v)}
                  fill={s.color}
                  stroke="var(--ink)"
                  strokeWidth="2.5"
                  opacity={hover === null || hover === i ? 1 : 0.45}
                />
              )
            })}
            <text
              x={groupX(i) + slot / 2}
              y={H - 22}
              textAnchor="middle"
              className="fill-[var(--ink-2)] text-[11px] font-bold uppercase"
            >
              {label.replace('-hafta', '')}
            </text>
          </g>
        ))}

        <text x={PAD.left} y={H - 4} className="fill-[var(--ink-3)] text-[10px] font-bold uppercase tracking-wider">
          hafta raqami
        </text>
      </svg>

      {hover !== null && (
        <div
          className="brut-sm pointer-events-none absolute top-0 z-10 -translate-x-1/2 bg-[var(--accent)] px-3 py-2 text-xs"
          style={{ left: `${((groupX(hover) + slot / 2) / W) * 100}%` }}
        >
          <p className="font-black uppercase">{labels[hover]}</p>
          <ul className="mt-1 space-y-0.5">
            {series.map((s) => (
              <li key={s.key} className="flex items-center gap-2 font-bold">
                <span className="size-2.5 border-2 border-[var(--ink)]" style={{ background: s.color }} />
                {s.label}
                <span className="ml-auto tabular-nums">{s.data[hover]}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
