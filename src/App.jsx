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
  const [range, setRange] = useState('12 oy')

  const series = [
    { key: 'cur', label: '2026', color: 'var(--c-1)', data: mrr[2026] },
    { key: 'prev', label: '2025', color: 'var(--c-2)', data: mrr[2025], dashed: true },
  ]

  return (
    <div className="flex min-h-dvh">
      <Sidebar />

      <main className="min-w-0 flex-1">
        <TopBar range={range} onRange={setRange} />

        <div className="space-y-5 p-6">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {kpis.map((kpi, i) => (
              <StatTile key={kpi.id} kpi={kpi} color={tileColors[i]} />
            ))}
          </div>

          <div className="grid gap-5 xl:grid-cols-3">
            <Card
              title="Oylik takrorlanuvchi daromad"
              subtitle="Ming dollarda, yillar kesimida"
              className="xl:col-span-2"
              action={
                <div className="flex items-center gap-4 text-xs">
                  {series.map((s) => (
                    <span key={s.key} className="flex items-center gap-1.5 text-[var(--ink-2)]">
                      <span className="h-0.5 w-4 rounded" style={{ background: s.color }} />
                      {s.label}
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

          <div className="grid gap-5 xl:grid-cols-3">
            <Card
              title="Trafik manbalari"
              subtitle="Oktabrdagi sessiyalar"
              action={
                <button className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-[var(--ink-2)] hover:bg-slate-50">
                  <Icon name="download" className="size-3.5" />
                  CSV
                </button>
              }
            >
              <BarList items={channels} />
            </Card>

            <Card
              title="So‘nggi hisoblar"
              subtitle="5 ta oxirgi yozuv"
              className="xl:col-span-2"
              action={
                <button className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--c-1)] px-2.5 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
                  <Icon name="plus" className="size-3.5" strokeWidth={2.2} />
                  Hisob yaratish
                </button>
              }
            >
              <InvoiceTable rows={invoices} />
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
