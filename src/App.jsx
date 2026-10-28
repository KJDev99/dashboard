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
