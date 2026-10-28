import { useState } from 'react'

// Ketma-ket (sequential) ramp: bitta hue, och → to'q. Kattalikni faqat yorqinlik kodlaydi.
// Qadamlar mavzuga qarab CSS'da qayta tanlanadi (qorong'i rejim avtomatik ag'darilmaydi).
const ramp = [
  'var(--ramp-1)',
  'var(--ramp-2)',
  'var(--ramp-3)',
  'var(--ramp-4)',
  'var(--ramp-5)',
  'var(--ramp-6)',
]

export default function Heatmap({ rows, days, hours }) {
  const [cell, setCell] = useState(null)
  const max = Math.max(...rows.flat())

  const colorFor = (v) => ramp[Math.min(ramp.length - 1, Math.floor((v / max) * ramp.length))]

  return (
    <div className="relative">
      <div className="overflow-x-auto">
        <div className="min-w-[560px]">
          <div className="flex gap-[3px] pl-7">
            {hours.map((h, i) => (
              <span key={h} className="flex-1 text-center text-[9px] text-[var(--ink-3)]">
                {i % 3 === 0 ? h.slice(0, 2) : ''}
              </span>
            ))}
          </div>

          {rows.map((row, d) => (
            <div key={days[d]} className="mt-[3px] flex items-center gap-[3px]">
              <span className="w-7 shrink-0 text-[10px] text-[var(--ink-3)]">{days[d]}</span>
              {row.map((v, h) => (
                <button
                  key={h}
                  onMouseEnter={() => setCell({ d, h, v })}
                  onMouseLeave={() => setCell(null)}
                  aria-label={`${days[d]} ${hours[h]}: ${v} xatolik`}
                  className="h-5 flex-1 rounded-[2px] outline-offset-1 focus-visible:outline focus-visible:outline-2"
                  style={{
                    background: colorFor(v),
                    boxShadow: cell && cell.d === d && cell.h === h ? '0 0 0 2px var(--surface), 0 0 0 3px var(--ink-1)' : undefined,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 text-[10px] text-[var(--ink-3)]">
        <span>kam</span>
        <div className="flex gap-[2px]">
          {ramp.map((c) => (
            <span key={c} className="size-3 rounded-[2px]" style={{ background: c }} />
          ))}
        </div>
        <span>ko‘p</span>
        <span className="ml-auto">kunlik × soatlik xatoliklar soni</span>
      </div>

      {cell && (
        <div className="pointer-events-none absolute right-0 top-0 rounded border border-[var(--line)] bg-[var(--surface)] px-2 py-1 text-[11px] shadow-md">
          <span className="text-[var(--ink-3)]">
            {days[cell.d]} {hours[cell.h]}
          </span>{' '}
          <span className="font-semibold">{cell.v} xatolik</span>
        </div>
      )}
    </div>
  )
}
