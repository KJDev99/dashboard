import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Card from './components/Card'
import StatTile from './components/StatTile'
import InvoiceTable from './components/InvoiceTable'
import Icon from './components/Icon'
import AreaChart from './charts/AreaChart'
import BarList from './charts/BarList'
import StackedBar from './charts/StackedBar'
import { channels, invoices, kpis, months, mrr, plans } from './data'

const tileColors = ['var(--c-1)', 'var(--c-2)', 'var(--c-3)', 'var(--c-4)']

export default function App() {
  const [tab, setTab] = useState('home')

  return (
    <div className="min-h-dvh pb-28">
      <header className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-5 pt-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-3)]">Chorshanba, 28-oktabr</p>
          <h1 className="font-display mt-1 text-[28px] font-semibold leading-tight">Salom, Jamshid</h1>
        </div>

        <div className="glass ml-auto flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-4">
          <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-[var(--c-2)] to-[var(--c-3)] text-sm font-semibold text-white">
            JK
          </span>
          <div className="leading-tight">
            <p className="text-xs font-medium">7 kunlik seriya</p>
            <p className="text-[11px] text-[var(--ink-3)]">maqsadlar bajarilmoqda</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-5 px-5 pt-6">
        <div className="grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <GlassCard
            title="Haftalik qadamlar"
            subtitle="Ming qadamda, 7 kun"
            action={
              <span className="glass-soft rounded-full px-3 py-1.5 text-xs font-medium text-[var(--ink-2)]">
                jami 73,6K
              </span>
            }
          >
            <ActivityChart labels={days} data={activity.steps} />
          </GlassCard>

  const series = [
    { key: 'cur', label: '2026', color: 'var(--c-1)', data: mrr[2026] },
    { key: 'prev', label: '2025', color: 'var(--c-2)', data: mrr[2025], dashed: true },
  ]

  return (
    <div className="flex min-h-dvh">
      <Sidebar />

            <dl className="mt-6 grid grid-cols-3 gap-3">
              {[
                { k: 'O‘rtacha uyqu', v: '7,4 soat', note: 'maqsad 8 soat' },
                { k: 'Chuqur uyqu ulushi', v: '24%', note: 'norma 20–25%' },
                { k: 'Yotish vaqti', v: '23:18', note: 'o‘rtacha 7 kun' },
              ].map((s) => (
                <div key={s.k} className="glass-soft rounded-2xl p-3.5">
                  <dt className="text-[11px] text-[var(--ink-3)]">{s.k}</dt>
                  <dd className="num mt-1 text-base font-semibold">{s.v}</dd>
                  <p className="text-[11px] text-[var(--ink-3)]">{s.note}</p>
                </div>
              ))}
            </dl>
          </GlassCard>

          <div className="space-y-5">
            <GlassCard title="Haftalik maqsadlar" subtitle="28-oktabr holatiga">
              <ul className="space-y-4">
                {goals.map((g) => {
                  const pct = Math.min(100, (g.done / g.target) * 100)
                  return (
                    <li key={g.label}>
                      <div className="flex items-baseline justify-between text-sm">
                        <span className="text-[var(--ink-2)]">{g.label}</span>
                        <span className="num font-semibold">
                          {g.done}
                          <span className="font-normal text-[var(--ink-3)]">
                            /{g.target} {g.unit}
                          </span>
                        </span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/50">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[var(--c-2)] to-[var(--c-1)]"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            </GlassCard>

            <GlassCard title="So‘nggi mashg‘ulotlar" subtitle="4 ta yozuv">
              <ul className="space-y-3">
                {workouts.map((w) => (
                  <li key={w.name} className="glass-soft flex items-center gap-3 rounded-2xl p-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/70 text-[var(--c-2)]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-[18px]"
                      >
                        <path d={typeIcon[w.type]} />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{w.name}</p>
                      <p className="text-[11px] text-[var(--ink-3)]">
                        {w.time} · {w.dur}
                      </p>
                    </div>
                    <span className="num ml-auto shrink-0 text-sm font-semibold">
                      {w.kcal}
                      <span className="ml-0.5 text-[11px] font-normal text-[var(--ink-3)]">kkal</span>
                    </span>
                  ))}
                </div>
              }
            >
              <AreaChart labels={months} series={series} formatValue={(v) => `$${v}K`} />
            </Card>

            <Card title="Tarif bo‘yicha daromad" subtitle="Oktabr oyi yakuni">
              <StackedBar items={plans} />
              <div className="mt-6 rounded-lg bg-slate-50 p-4">
                <p className="text-xs text-[var(--ink-2)]">O‘rtacha chek</p>
                <p className="mt-1 text-xl font-semibold tabular-nums">$1 642</p>
                <p className="mt-1 text-xs text-[var(--ok)]">+$118 o‘tgan oyga nisbatan</p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <FloatingNav active={tab} onSelect={setTab} />
    </div>
  )
}
