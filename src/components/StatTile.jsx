import Icon from './Icon'
import Sparkline from '../charts/Sparkline'

export default function StatTile({ kpi, color }) {
  const positive = kpi.goodWhenDown ? kpi.delta < 0 : kpi.delta > 0
  const rising = kpi.delta > 0

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-xs font-medium uppercase tracking-wide text-[var(--ink-3)]">{kpi.label}</p>
      <div className="mt-2 flex items-end justify-between gap-3">
        <p className="text-2xl font-semibold tracking-tight tabular-nums">{kpi.value}</p>
        <Sparkline data={kpi.trend} stroke={color} />
      </div>
      <p
        className="mt-3 inline-flex items-center gap-1 text-xs font-medium"
        style={{ color: positive ? 'var(--ok)' : 'var(--bad)' }}
      >
        <Icon name={rising ? 'up' : 'down'} className="size-3.5" strokeWidth={2.2} />
        {Math.abs(kpi.delta)}
        {kpi.id === 'mrr' || kpi.id === 'users' ? '%' : ' p.p.'}
        <span className="font-normal text-[var(--ink-3)]">o‘tgan oyga nisbatan</span>
      </p>
    </div>
  )
}
