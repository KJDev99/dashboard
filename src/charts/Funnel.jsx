// Voronka — har bir bosqich o'z qiymatini to'g'ridan-to'g'ri yorliq bilan ko'rsatadi.
export default function Funnel({ steps }) {
  const top = steps[0].value

  return (
    <ul className="space-y-2.5">
      {steps.map((s, i) => {
        const pct = (s.value / top) * 100
        const prev = i === 0 ? null : steps[i - 1].value
        return (
          <li key={s.step}>
            <div className="flex items-baseline justify-between text-xs font-bold uppercase tracking-wide">
              <span>{s.step}</span>
              <span className="tabular-nums">{s.value.toLocaleString('ru-RU')}</span>
            </div>
            <div className="mt-1.5 h-8 border-[2.5px] border-[var(--ink)] bg-white">
              <div
                className="flex h-full items-center justify-end px-2"
                style={{ width: `${pct}%`, background: s.color }}
              >
                <span className="text-[11px] font-black text-white tabular-nums">{pct.toFixed(0)}%</span>
              </div>
            </div>
            {prev && (
              <p className="mt-1 text-[11px] font-bold text-[var(--ink-3)]">
                ↓ oldingi bosqichdan {((s.value / prev) * 100).toFixed(1)}% o‘tdi
              </p>
            )}
          </li>
        )
      })}
    </ul>
  )
}
