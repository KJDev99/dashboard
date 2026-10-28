import { useRef, useState } from 'react'

const W = 760
const H = 280
const PAD = { top: 16, right: 16, bottom: 28, left: 44 }

/**
 * Ikki qatorli maydon grafigi — bitta y o'qi, crosshair + tooltip.
 * series: [{ key, label, color, data: number[] }]
 */
export default function AreaChart({ labels, series, formatValue = (v) => v }) {
  const [hover, setHover] = useState(null)
  const wrapRef = useRef(null)

  const all = series.flatMap((s) => s.data)
  const max = Math.max(...all)
  // 4 ta oraliq tekis raqam bilan tugashi uchun qadamni yaxlitlaymiz
  const niceStep = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000].find(
    (s) => s * 4 >= max,
  )
  const top = niceStep * 4
  const plotW = W - PAD.left - PAD.right
  const plotH = H - PAD.top - PAD.bottom
  const step = plotW / (labels.length - 1)

  const x = (i) => PAD.left + i * step
  const y = (v) => PAD.top + plotH - (v / top) * plotH

  const ticks = Array.from({ length: 5 }, (_, i) => niceStep * i)

  const toPath = (data) =>
    data.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ')

  const toArea = (data) =>
    `${toPath(data)} L${x(data.length - 1).toFixed(1)} ${y(0)} L${x(0)} ${y(0)} Z`

  const onMove = (e) => {
    const box = wrapRef.current.getBoundingClientRect()
    const rel = ((e.clientX - box.left) / box.width) * W
    const i = Math.round((rel - PAD.left) / step)
    setHover(Math.min(labels.length - 1, Math.max(0, i)))
  }

  return (
    <div className="relative" ref={wrapRef} onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Oylik daromad dinamikasi">
        <defs>
          {series.map((s) => (
            <linearGradient key={s.key} id={`fill-${s.key}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.color} stopOpacity="0.18" />
              <stop offset="100%" stopColor={s.color} stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        {ticks.map((t) => (
          <g key={t}>
            <line x1={PAD.left} x2={W - PAD.right} y1={y(t)} y2={y(t)} stroke="var(--grid)" strokeWidth="1" />
            <text x={PAD.left - 10} y={y(t) + 4} textAnchor="end" className="fill-[var(--ink-3)] text-[11px]">
              {t}
            </text>
          </g>
        ))}

        {labels.map((m, i) => (
          <text
            key={m}
            x={x(i)}
            y={H - 8}
            textAnchor="middle"
            className="fill-[var(--ink-3)] text-[11px]"
          >
            {i % 2 === 0 ? m : ''}
          </text>
        ))}

        {series.map((s) => (
          <g key={s.key}>
            <path d={toArea(s.data)} fill={`url(#fill-${s.key})`} />
            <path
              d={toPath(s.data)}
              fill="none"
              stroke={s.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={s.dashed ? '5 4' : undefined}
            />
          </g>
        ))}

        {/* Oxirgi nuqtalarga to'g'ridan-to'g'ri yorliq */}
        {series.map((s) => (
          <circle
            key={`dot-${s.key}`}
            cx={x(s.data.length - 1)}
            cy={y(s.data.at(-1))}
            r="4"
            fill={s.color}
            stroke="var(--surface)"
            strokeWidth="2"
          />
        ))}

        {hover !== null && (
          <g>
            <line
              x1={x(hover)}
              x2={x(hover)}
              y1={PAD.top}
              y2={PAD.top + plotH}
              stroke="var(--ink-3)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            {series.map((s) => (
              <circle
                key={`h-${s.key}`}
                cx={x(hover)}
                cy={y(s.data[hover])}
                r="5"
                fill={s.color}
                stroke="var(--surface)"
                strokeWidth="2"
              />
            ))}
          </g>
        )}
      </svg>

      {hover !== null && (
        <div
          className="pointer-events-none absolute top-2 z-10 min-w-36 -translate-x-1/2 rounded-lg border border-slate-200 bg-white/95 p-3 text-xs shadow-lg backdrop-blur"
          style={{ left: `${(x(hover) / W) * 100}%` }}
        >
          <p className="font-medium text-[var(--ink-1)]">{labels[hover]}</p>
          <ul className="mt-2 space-y-1">
            {series.map((s) => (
              <li key={s.key} className="flex items-center gap-2">
                <span className="size-2 rounded-full" style={{ background: s.color }} />
                <span className="text-[var(--ink-2)]">{s.label}</span>
                <span className="ml-auto font-medium tabular-nums text-[var(--ink-1)]">
                  {formatValue(s.data[hover])}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
