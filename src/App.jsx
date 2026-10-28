import { useState } from 'react'
import FloatingNav from './components/FloatingNav'
import GlassCard from './components/GlassCard'
import VitalTile from './components/VitalTile'
import ActivityChart from './charts/ActivityChart'
import Rings from './charts/Rings'
import SleepChart from './charts/SleepChart'
import { activity, days, goals, rings, sleep, vitals, workouts } from './data'

const vitalColors = ['var(--c-3)', 'var(--c-2)', 'var(--c-1)', 'var(--c-2)']

const typeIcon = {
  yugurish: 'M13 4a2 2 0 1 0 0-.1M9 20l2-5 3-2-1-5 4 3 3 1M6 12l3-3',
  zal: 'M4 9v6M8 7v10M16 7v10M20 9v6M8 12h8',
  suzish: 'M3 18c2 0 2-1.5 4-1.5S9 18 11 18s2-1.5 4-1.5S17 18 19 18M6 11l5-4 4 3M17 7a1.5 1.5 0 1 0 0-.1',
  velo: 'M6 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6M18 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6M9 15l3-7h3M9 8h3',
}

export default function App() {
  const [tab, setTab] = useState('home')

  return (
    <div className="min-h-dvh pb-28">
      <header className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-5 pt-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-3)]">Chorshanba, 28-oktabr</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight">Salom, Jamshid</h1>
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

          <GlassCard title="Bugungi halqalar" subtitle="Maqsadlarga nisbatan">
            <Rings items={rings} />
          </GlassCard>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {vitals.map((v, i) => (
            <VitalTile key={v.label} item={v} color={vitalColors[i]} />
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <GlassCard title="Uyqu tuzilmasi" subtitle="Fazalar bo‘yicha, soatda">
            <SleepChart rows={sleep} />

            <dl className="mt-6 grid grid-cols-3 gap-3">
              {[
                { k: 'O‘rtacha uyqu', v: '7,4 soat', note: 'maqsad 8 soat' },
                { k: 'Chuqur uyqu ulushi', v: '24%', note: 'norma 20–25%' },
                { k: 'Yotish vaqti', v: '23:18', note: 'o‘rtacha 7 kun' },
              ].map((s) => (
                <div key={s.k} className="glass-soft rounded-2xl p-3.5">
                  <dt className="text-[11px] text-[var(--ink-3)]">{s.k}</dt>
                  <dd className="mt-1 text-base font-semibold tabular-nums">{s.v}</dd>
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
                        <span className="font-semibold tabular-nums">
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
                    <span className="ml-auto shrink-0 text-sm font-semibold tabular-nums">
                      {w.kcal}
                      <span className="ml-0.5 text-[11px] font-normal text-[var(--ink-3)]">kkal</span>
                    </span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </main>

      <FloatingNav active={tab} onSelect={setTab} />
import { useEffect, useState } from 'react'
import AppBar from './components/AppBar'
import Pane from './components/Pane'
import ServiceTable from './components/ServiceTable'
import StatusDot from './components/StatusDot'
import LineChart from './charts/LineChart'
import Heatmap from './charts/Heatmap'
import {
  deploys,
  errorRate,
  heatmap,
  hours,
  incidents,
  kpis,
  latency,
  requests,
  services,
  weekDays,
} from './data'

export default function App() {
  const [tab, setTab] = useState('Umumiy')
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <div className="min-h-dvh">
      <AppBar tab={tab} onTab={setTab} theme={theme} onTheme={setTheme} />

      <main className="space-y-3 p-3">
        {/* Zich KPI qatori — 6 ta ko'rsatkich bitta satrda */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3 xl:grid-cols-6">
          {kpis.map((k) => (
            <div key={k.label} className="bg-[var(--surface)] px-3 py-2.5">
              <p className="truncate text-[11px] text-[var(--ink-3)]">{k.label}</p>
              <p className="mt-1 text-lg font-semibold leading-none tracking-tight">{k.value}</p>
              <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-[var(--ink-2)]">
                <StatusDot state={k.state} withLabel={false} />
                {k.delta}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-3 xl:grid-cols-3">
          <Pane title="So‘rovlar" meta="soatlik, ming">
            <LineChart labels={hours} data={requests} color="var(--c-1)" unit="K" />
          </Pane>
          <Pane title="p95 javob vaqti" meta="ms">
            <LineChart labels={hours} data={latency} color="var(--c-2)" unit="ms" threshold={250} />
          </Pane>
          <Pane title="Xatolik darajasi" meta="%">
            <LineChart labels={hours} data={errorRate} color="var(--c-3)" unit="%" threshold={1} />
          </Pane>
        </div>

        <div className="grid gap-3 xl:grid-cols-[2fr_1fr]">
          <Pane
            title="Servislar"
            meta="prod va staging"
            flush
            action={
              <div className="flex gap-1">
                <button className="rounded border border-[var(--line)] px-2 py-0.5 text-[11px] text-[var(--ink-2)] hover:bg-[var(--surface)]">
                  yangilash
                </button>
                <button className="rounded border border-[var(--line)] px-2 py-0.5 text-[11px] text-[var(--ink-2)] hover:bg-[var(--surface)]">
                  CSV
                </button>
              </div>
            }
          >
            <ServiceTable rows={services} />
          </Pane>

          <Pane title="Ochiq inshidentlar" meta={`${incidents.length} ta`} flush>
            <ul className="divide-y divide-[var(--line-soft)]">
              {incidents.map((i) => (
                <li key={i.id} className="px-3 py-2 hover:bg-[var(--surface-2)]">
                  <div className="flex items-center gap-2">
                    <StatusDot state={i.sev} withLabel={false} />
                    <span className="font-mono text-[11px] text-[var(--ink-3)]">{i.id}</span>
                    <span className="ml-auto text-[11px] text-[var(--ink-3)]">{i.age}</span>
                  </div>
                  <p className="mt-0.5 text-[12px] font-medium">{i.title}</p>
                  <p className="mt-0.5 text-[11px] text-[var(--ink-3)]">
                    {i.owner} · {i.opened} dan beri
                  </p>
                </li>
              ))}
            </ul>
          </Pane>
        </div>

        <div className="grid gap-3 xl:grid-cols-[2fr_1fr]">
          <Pane title="Xatoliklar issiqlik xaritasi" meta="7 kun × 24 soat">
            <Heatmap rows={heatmap} days={weekDays} hours={hours} />
          </Pane>

          <Pane title="So‘nggi deploylar" meta="bugun" flush>
            <table className="w-full text-[12px]">
              <thead>
                <tr className="border-b border-[var(--line)] bg-[var(--surface-2)] text-left text-[11px] text-[var(--ink-3)]">
                  <th className="px-3 py-1.5 font-medium">Versiya</th>
                  <th className="px-3 py-1.5 font-medium">Servis</th>
                  <th className="px-3 py-1.5 font-medium">Vaqt</th>
                  <th className="px-3 py-1.5 font-medium">Holat</th>
                </tr>
              </thead>
              <tbody>
                {deploys.map((d) => (
                  <tr key={d.ver} className="border-b border-[var(--line-soft)] last:border-0">
                    <td className="px-3 py-1.5 font-mono text-[11px]">{d.ver}</td>
                    <td className="px-3 py-1.5">{d.svc}</td>
                    <td className="px-3 py-1.5 text-[var(--ink-2)]">{d.at}</td>
                    <td className="px-3 py-1.5">
                      <StatusDot state={d.status === 'qaytarildi' ? 'crit' : 'ok'} withLabel={false} />
                      <span className="ml-1.5 text-[11px] text-[var(--ink-2)]">{d.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Pane>
        </div>
      </main>

      <footer className="border-t border-[var(--line)] px-3 py-2 text-[11px] text-[var(--ink-3)]">
        orbit-ops · ma’lumotlar 30 soniyada bir yangilanadi · oxirgi yangilanish 14:42:08
      </footer>
    </div>
  )
}
