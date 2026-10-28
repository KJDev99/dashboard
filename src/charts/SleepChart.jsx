import { useState } from 'react'

const W = 560
const H = 200
const PAD = { top: 16, right: 14, bottom: 28, left: 32 }

const phases = [
  { key: 'deep', label: 'Chuqur', color: 'var(--c-2)' },
  { key: 'light', label: 'Yengil', color: 'var(--c-1)' },
  { key: 'rem', label: 'REM', color: 'var(--c-3)' },
]

// Yig'ma ustunlar: uyqu fazalari, segmentlar orasida 2px sirt bo'shlig'i.
export default function SleepChart({ rows }) {
  const [hover, setHover] = useState(null)

  const totals = rows.map((r) => phases.reduce((s, p) => s + r[p.key], 0))
  const max = Math.ceil(Math.max(...totals))
  const plotW = W - PAD.left - PAD.right
  const plotH = H - PAD.top - PAD.bottom
  const slot = plotW / rows.length
  const barW = Math.min(30, slot - 14)

  const x = (i) => PAD.left + slot * i + slot / 2
  const scale = (v) => (v / max) * plotH

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Uyqu fazalari">
        {[0, max / 2, max].map((t) => (
          <g key={t}>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={PAD.top + plotH - scale(t)}
              y2={PAD.top + plotH - scale(t)}
              stroke="rgba(16,23,42,0.08)"
            />
            <text
              x={PAD.left - 8}
              y={PAD.top + plotH - scale(t) + 4}
              textAnchor="end"
              className="fill-[var(--ink-3)] text-[10px]"
            >
              {t}s
            </text>
          </g>
        ))}

        {rows.map((row, i) => {
          let acc = 0
          return (
            <g key={row.day} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <rect x={x(i) - slot / 2} y={PAD.top} width={slot} height={plotH} fill="transparent" />
              {phases.map((p) => {
                const h = scale(row[p.key]) - 2
                const yPos = PAD.top + plotH - acc - scale(row[p.key])
                acc += scale(row[p.key])
                return (
                  <rect
                    key={p.key}
                    x={x(i) - barW / 2}
                    y={yPos}
                    width={barW}
                    height={Math.max(2, h)}
                    rx="4"
                    fill={p.color}
                    opacity={hover === null || hover === i ? 0.92 : 0.42}
                  />
                )
              })}
              <text x={x(i)} y={H - 8} textAnchor="middle" className="fill-[var(--ink-2)] text-[11px]">
                {row.day}
              </text>
            </g>
          )
        })}
      </svg>

      <div className="mt-2 flex flex-wrap items-center gap-4 pl-8 text-xs">
        {phases.map((p) => (
          <span key={p.key} className="flex items-center gap-1.5 text-[var(--ink-2)]">
            <span className="size-2.5 rounded-sm" style={{ background: p.color }} />
            {p.label}
          </span>
        ))}
      </div>

      {hover !== null && (
        <div
          className="glass pointer-events-none absolute top-0 z-10 -translate-x-1/2 rounded-xl px-3 py-2 text-xs"
          style={{ left: `${(x(hover) / W) * 100}%` }}
        >
          <p className="font-semibold text-[var(--ink-1)]">
            {totals[hover].toFixed(1)} soat · {rows[hover].day}
          </p>
          <ul className="mt-1 space-y-0.5">
            {phases.map((p) => (
              <li key={p.key} className="flex items-center gap-2">
                <span className="size-2 rounded-sm" style={{ background: p.color }} />
                <span className="text-[var(--ink-2)]">{p.label}</span>
                <span className="ml-auto tabular-nums text-[var(--ink-1)]">{rows[hover][p.key]}s</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
