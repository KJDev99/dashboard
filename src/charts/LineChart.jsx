import { useRef, useState } from 'react'

const W = 640
const H = 170
const PAD = { top: 12, right: 10, bottom: 20, left: 38 }

/**
 * Bitta qatorli zich chiziq grafigi — har bir metrika alohida panelda,
 * shuning uchun ikkinchi y o'qi umuman ishlatilmaydi.
 */
export default function LineChart({ labels, data, color, unit = '', threshold }) {
  const [hover, setHover] = useState(null)
  const wrap = useRef(null)

  const max = Math.max(...data, threshold ?? 0)
  const niceStep = [0.25, 0.5, 1, 2, 5, 10, 25, 50, 100, 150, 200, 250, 500].find((s) => s * 4 >= max)
  const top = niceStep * 4

  const plotW = W - PAD.left - PAD.right
  const plotH = H - PAD.top - PAD.bottom

  const x = (i) => PAD.left + (i / (data.length - 1)) * plotW
  const y = (v) => PAD.top + plotH - (v / top) * plotH

  const line = data.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ')
  const area = `${line} L${x(data.length - 1).toFixed(1)} ${y(0)} L${x(0)} ${y(0)} Z`

  const onMove = (e) => {
    const box = wrap.current.getBoundingClientRect()
    const rel = ((e.clientX - box.left) / box.width) * W
    const i = Math.round(((rel - PAD.left) / plotW) * (data.length - 1))
    setHover(Math.min(data.length - 1, Math.max(0, i)))
  }

  const gid = `g-${color.replace(/[^a-z0-9]/gi, '')}-${unit.replace(/[^a-z0-9]/gi, '')}`

  return (
    <div className="relative" ref={wrap} onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Soatlik ${unit}`}>
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.22" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0, niceStep * 2, top].map((t) => (
          <g key={t}>
            <line x1={PAD.left} x2={W - PAD.right} y1={y(t)} y2={y(t)} stroke="var(--line-soft)" />
            <text x={PAD.left - 6} y={y(t) + 3.5} textAnchor="end" className="fill-[var(--ink-3)] text-[9px]">
              {t}
            </text>
          </g>
        ))}

        {threshold != null && (
          <>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={y(threshold)}
              y2={y(threshold)}
              stroke="var(--crit)"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
            <text x={W - PAD.right} y={y(threshold) - 4} textAnchor="end" className="fill-[var(--crit)] text-[9px]">
              chegara {threshold}
              {unit}
            </text>
          </>
        )}

        <path d={area} fill={`url(#${gid})`} />
        <path d={line} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {labels.map((l, i) =>
          i % 4 === 0 ? (
            <text
              key={l}
              x={x(i)}
              y={H - 5}
              textAnchor={i === 0 ? 'start' : 'middle'}
              className="fill-[var(--ink-3)] text-[9px]"
            >
              {l.slice(0, 2)}
            </text>
          ) : null,
        )}

        {hover !== null && (
          <g>
            <line x1={x(hover)} x2={x(hover)} y1={PAD.top} y2={PAD.top + plotH} stroke="var(--ink-3)" strokeDasharray="2 3" />
            <circle cx={x(hover)} cy={y(data[hover])} r="4" fill={color} stroke="var(--surface)" strokeWidth="2" />
          </g>
        )}
      </svg>

      {hover !== null && (
        <div
          className="pointer-events-none absolute -top-1 z-10 -translate-x-1/2 whitespace-nowrap rounded border border-[var(--line)] bg-[var(--surface)] px-2 py-1 text-[11px] shadow-md"
          style={{ left: `${Math.min(90, Math.max(10, (x(hover) / W) * 100))}%` }}
        >
          <span className="text-[var(--ink-3)]">{labels[hover]}</span>{' '}
          <span className="font-semibold text-[var(--ink-1)]">
            {data[hover]}
            {unit}
          </span>
        </div>
      )}
    </div>
  )
}
