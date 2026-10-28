import { useRef, useState } from 'react'

const W = 820
const H = 300
const PAD = { top: 20, right: 56, bottom: 26, left: 12 }

// Neon chiziqli narx grafigi — hajm ustunlari pastda, bitta y o'qi.
export default function PriceChart({ labels, data, volume }) {
  const [hover, setHover] = useState(null)
  const wrap = useRef(null)

  const min = Math.min(...data)
  const max = Math.max(...data)
  const pad = (max - min) * 0.25
  const lo = min - pad
  const hi = max + pad

  const plotW = W - PAD.left - PAD.right
  const plotH = H - PAD.top - PAD.bottom
  const volH = 54
  const lineH = plotH - volH - 10

  const x = (i) => PAD.left + (i / (data.length - 1)) * plotW
  const y = (v) => PAD.top + lineH - ((v - lo) / (hi - lo)) * lineH

  const line = data.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ')
  const area = `${line} L${x(data.length - 1).toFixed(1)} ${PAD.top + lineH} L${PAD.left} ${PAD.top + lineH} Z`

  const volMax = Math.max(...volume)
  const barW = plotW / volume.length - 2

  const gridVals = [0, 0.25, 0.5, 0.75, 1].map((t) => lo + (hi - lo) * t)

  const onMove = (e) => {
    const box = wrap.current.getBoundingClientRect()
    const rel = ((e.clientX - box.left) / box.width) * W
    const i = Math.round(((rel - PAD.left) / plotW) * (data.length - 1))
    setHover(Math.min(data.length - 1, Math.max(0, i)))
  }

  const fmt = (v) => `$${v.toLocaleString('ru-RU')}`

  return (
    <div className="relative" ref={wrap} onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="BTC/USDT 48 soatlik narx">
        <defs>
          <linearGradient id="priceFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--glow-1)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--glow-1)" stopOpacity="0" />
          </linearGradient>
          <filter id="priceGlow" x="-20%" y="-40%" width="140%" height="180%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {gridVals.map((v) => (
          <g key={v}>
            <line x1={PAD.left} x2={W - PAD.right} y1={y(v)} y2={y(v)} stroke="var(--line)" strokeWidth="1" />
            <text x={W - PAD.right + 8} y={y(v) + 4} className="fill-[var(--ink-3)] font-mono text-[10px]">
              {Math.round(v / 100) / 10}K
            </text>
          </g>
        ))}

        <path d={area} fill="url(#priceFill)" />
        <path
          d={line}
          fill="none"
          stroke="var(--glow-1)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#priceGlow)"
        />

        {/* Hajm ustunlari — 2px bo'shliq bilan */}
        {volume.map((v, i) => (
          <rect
            key={i}
            x={x(i) - barW / 2}
            y={PAD.top + plotH - (v / volMax) * volH}
            width={barW}
            height={(v / volMax) * volH}
            rx="1.5"
            fill={hover === i ? 'var(--glow-2)' : 'var(--c-2)'}
            opacity={hover === null || hover === i ? 0.75 : 0.35}
          />
        ))}

        {labels.map((l, i) =>
          i % 8 === 0 ? (
            <text
              key={i}
              x={x(i)}
              y={H - 6}
              textAnchor={i === 0 ? 'start' : 'middle'}
              className="fill-[var(--ink-3)] font-mono text-[10px]"
            >
              {l}
            </text>
          ) : null,
        )}

        {hover !== null && (
          <g>
            <line
              x1={x(hover)}
              x2={x(hover)}
              y1={PAD.top}
              y2={PAD.top + plotH}
              stroke="var(--glow-1)"
              strokeWidth="1"
              strokeDasharray="3 4"
              opacity="0.7"
            />
            <circle cx={x(hover)} cy={y(data[hover])} r="5" fill="var(--glow-1)" stroke="var(--surface)" strokeWidth="2" />
          </g>
        )}
      </svg>

      {hover !== null && (
        <div
          className="pointer-events-none absolute top-1 z-10 -translate-x-1/2 rounded-lg border border-[var(--line)] bg-[var(--surface-2)]/95 px-3 py-2 font-mono text-[11px] shadow-xl"
          style={{ left: `${Math.min(88, Math.max(12, (x(hover) / W) * 100))}%` }}
        >
          <p className="text-[var(--ink-3)]">{labels[hover]}</p>
          <p className="mt-1 text-sm text-[var(--ink-1)]">{fmt(data[hover])}</p>
          <p className="text-[var(--c-2)]">hajm {volume[hover]} BTC</p>
        </div>
      )}
    </div>
  )
}
