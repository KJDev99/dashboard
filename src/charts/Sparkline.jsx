// Mayda trend chizig'i — o'q va yorliqsiz, faqat shakl.
export default function Sparkline({ data, stroke = 'var(--c-1)', width = 96, height = 28 }) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const span = max - min || 1
  const step = width / (data.length - 1)
  const points = data.map((v, i) => [i * step, height - 2 - ((v - min) / span) * (height - 4)])
  const line = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')
  const [lastX, lastY] = points.at(-1)

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true" className="overflow-visible">
      <path d={line} fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={lastX} cy={lastY} r="3" fill={stroke} stroke="var(--surface)" strokeWidth="2" />
    </svg>
  )
}
