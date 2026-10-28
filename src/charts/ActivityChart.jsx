import { useState } from 'react'

const W = 560
const H = 230
const PAD = { top: 18, right: 14, bottom: 30, left: 36 }

/**
 * Haftalik qadamlar — yumaloq uchli ustunlar, ustida o'rtacha chizig'i.
 * Bitta y o'qi: ikkala qiymat ham "ming qadam" birligida emas,
 * shu bois faol daqiqalar alohida kartada ko'rsatiladi.
 */
export default function ActivityChart({ labels, data, color = 'var(--c-1)' }) {
  const [hover, setHover] = useState(null)

  const max = Math.ceil(Math.max(...data) / 4) * 4
  const plotW = W - PAD.left - PAD.right
  const plotH = H - PAD.top - PAD.bottom
  const slot = plotW / data.length
  const barW = Math.min(34, slot - 12)

  const x = (i) => PAD.left + slot * i + slot / 2
  const y = (v) => PAD.top + plotH - (v / max) * plotH

  const avg = data.reduce((s, v) => s + v, 0) / data.length
  const ticks = [0, max / 4, max / 2, (max * 3) / 4, max]

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Haftalik qadamlar">
        <defs>
          <linearGradient id="barFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--c-2)" />
            <stop offset="100%" stopColor="var(--c-1)" />
          </linearGradient>
        </defs>

        {ticks.map((t) => (
          <g key={t}>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={y(t)}
              y2={y(t)}
              stroke="rgba(16,23,42,0.08)"
              strokeWidth="1"
            />
            <text x={PAD.left - 8} y={y(t) + 4} textAnchor="end" className="fill-[var(--ink-3)] text-[10px]">
              {t}
            </text>
          </g>
        ))}

        {/* O'rtacha chizig'i — to'g'ridan-to'g'ri yorliq bilan */}
        <line
          x1={PAD.left}
          x2={W - PAD.right}
          y1={y(avg)}
          y2={y(avg)}
          stroke="var(--c-3)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <text x={W - PAD.right} y={y(avg) - 6} textAnchor="end" className="fill-[var(--c-3)] text-[10px] font-medium">
          o‘rtacha {avg.toFixed(1)}K
        </text>

        {data.map((v, i) => (
          <g key={labels[i]} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
            <rect
              x={x(i) - slot / 2}
              y={PAD.top}
              width={slot}
              height={plotH}
              fill="transparent"
            />
            <rect
              x={x(i) - barW / 2}
              y={y(v)}
              width={barW}
              height={PAD.top + plotH - y(v)}
              rx="6"
              fill="url(#barFill)"
              opacity={hover === null || hover === i ? 1 : 0.45}
            />
            <text x={x(i)} y={H - 10} textAnchor="middle" className="fill-[var(--ink-2)] text-[11px]">
              {labels[i]}
            </text>
          </g>
        ))}
      </svg>

      {hover !== null && (
        <div
          className="glass pointer-events-none absolute top-0 z-10 -translate-x-1/2 rounded-xl px-3 py-2 text-xs"
          style={{ left: `${(x(hover) / W) * 100}%` }}
        >
          <p className="font-semibold text-[var(--ink-1)]">{data[hover]}K qadam</p>
          <p className="mt-0.5 text-[var(--ink-2)]">{labels[hover]} kuni</p>
        </div>
      )}
    </div>
  )
}
