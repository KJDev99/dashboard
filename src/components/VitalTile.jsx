function Spark({ data, color }) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const span = max - min || 1
  const pts = data.map((v, i) => [(i / (data.length - 1)) * 72, 24 - ((v - min) / span) * 20])
  const d = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')
  return (
    <svg width="72" height="28" viewBox="0 0 72 28" aria-hidden="true" className="overflow-visible">
      <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function VitalTile({ item, color }) {
  const up = item.delta > 0
  return (
    <div className="glass-soft rounded-2xl p-4">
      <p className="text-xs text-[var(--ink-2)]">{item.label}</p>
      <div className="mt-1.5 flex items-end justify-between gap-2">
        <p className="text-xl font-semibold tracking-tight tabular-nums">
          {item.value}
          <span className="ml-1 text-[11px] font-normal text-[var(--ink-3)]">{item.unit}</span>
        </p>
        <Spark data={item.spark} color={color} />
      </div>
      <p className="mt-2 text-[11px] text-[var(--ink-3)]">
        <span className="font-medium" style={{ color: 'var(--ink-2)' }}>
          {up ? '+' : ''}
          {item.delta}
        </span>{' '}
        haftalik o‘zgarish
      </p>
    </div>
  )
}
