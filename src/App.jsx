import { useState } from 'react'
import TopNav from './components/TopNav'
import Block from './components/Block'
import GroupedBars from './charts/GroupedBars'
import Funnel from './charts/Funnel'
import RegionBars from './charts/RegionBars'
import { bigStats, funnel, orders, products, regions, tasks, weeks } from './data'

const stockTone = {
  'yetarli': 'bg-[#9ae6b4]',
  'kam': 'bg-[var(--accent)]',
  'tugadi': 'bg-[var(--accent-2)]',
}

export default function App() {
  const [tab, setTab] = useState('Umumiy')
  const [checks, setChecks] = useState(tasks.map((t) => t.done))

  const series = [
    { key: 'shop', label: 'Do‘kon', color: 'var(--c-1)', data: orders['Do‘kon'] },
    { key: 'mp', label: 'Marketplace', color: 'var(--c-2)', data: orders['Marketplace'] },
  ]

  return (
    <div className="min-h-dvh">
      <TopNav active={tab} onSelect={setTab} />

      <main className="mx-auto max-w-7xl space-y-6 px-5 py-6">
        <div className="brut flex flex-wrap items-end justify-between gap-4 bg-white p-5">
          <div>
            <h1 className="text-3xl font-black uppercase leading-none tracking-tighter sm:text-4xl">
              Savdo paneli
            </h1>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[var(--ink-3)]">
              8 haftalik ko‘rsatkichlar · 28-oktabr, 2026
            </p>
          </div>
          <div className="flex gap-2">
            {['Hafta', 'Oy', 'Chorak'].map((p) => (
              <button
                key={p}
                className={
                  p === 'Hafta'
                    ? 'brut-sm brut-press bg-[var(--ink)] px-3 py-2 text-xs font-black uppercase text-white'
                    : 'brut-sm brut-press bg-white px-3 py-2 text-xs font-black uppercase'
                }
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {bigStats.map((s) => (
            <div key={s.label} className="brut p-5" style={{ background: s.tone }}>
              <p className="text-[11px] font-black uppercase tracking-wider">{s.label}</p>
              <p className="mt-2 text-3xl font-black leading-none tracking-tighter tabular-nums">{s.value}</p>
              <p className="mt-1 text-[11px] font-bold uppercase text-[var(--ink-2)]">{s.unit}</p>
              <p className="mt-3 inline-block border-2 border-[var(--ink)] bg-white px-2 py-0.5 text-[11px] font-black tabular-nums">
                {s.delta}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.6fr_1fr]">
          <Block
            title="Buyurtmalar: do‘kon va marketplace"
            tag="8 hafta"
            action={
              <div className="flex gap-3">
                {series.map((s) => (
                  <span key={s.key} className="flex items-center gap-1.5 text-[11px] font-black uppercase">
                    <span className="size-3 border-2 border-[var(--ink)]" style={{ background: s.color }} />
                    {s.label}
                  </span>
                ))}
              </div>
            }
          >
            <GroupedBars labels={weeks} series={series} />
          </Block>

          <Block title="Konversiya voronkasi" tag="oktabr">
            <Funnel steps={funnel} />
          </Block>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1fr_1.6fr]">
          <div className="space-y-5">
            <Block title="Hududlar bo‘yicha" tag="ulush">
              <RegionBars items={regions} />
            </Block>

            <Block title="Vazifalar" bg="var(--accent)">
              <ul className="space-y-2.5">
                {tasks.map((t, i) => (
                  <li key={t.text}>
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        checked={checks[i]}
                        onChange={() =>
                          setChecks((c) => c.map((v, idx) => (idx === i ? !v : v)))
                        }
                        className="mt-0.5 size-5 shrink-0 appearance-none border-[2.5px] border-[var(--ink)] bg-white checked:bg-[var(--ink)] checked:after:block checked:after:text-center checked:after:text-[13px] checked:after:leading-[15px] checked:after:text-[var(--accent)] checked:after:content-['✓']"
                      />
                      <span
                        className={
                          checks[i]
                            ? 'text-sm font-bold line-through opacity-55'
                            : 'text-sm font-bold'
                        }
                      >
                        {t.text}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          <Block
            title="Eng ko‘p sotilgan"
            tag="top 5"
            action={
              <button className="brut-sm brut-press bg-[var(--accent)] px-2.5 py-1 text-[11px] font-black uppercase">
                eksport
              </button>
            }
          >
            <div className="-mx-5 overflow-x-auto">
              <table className="w-full min-w-[520px] text-sm">
                <thead>
                  <tr className="border-b-[3px] border-[var(--ink)] text-left text-[11px] font-black uppercase tracking-wider">
                    <th className="py-2 pl-5 pr-3">Mahsulot</th>
                    <th className="px-3 py-2 text-right">Sotildi</th>
                    <th className="px-3 py-2 text-right">Daromad</th>
                    <th className="py-2 pl-3 pr-5">Ombor</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.name} className="border-b-2 border-dashed border-[var(--ink-3)]/50 last:border-0">
                      <td className="py-3 pl-5 pr-3 font-bold">{p.name}</td>
                      <td className="px-3 py-3 text-right font-bold tabular-nums">{p.sold}</td>
                      <td className="px-3 py-3 text-right font-black tabular-nums">
                        {p.revenue.toLocaleString('ru-RU')}
                      </td>
                      <td className="py-3 pl-3 pr-5">
                        <span
                          className={`border-2 border-[var(--ink)] px-2 py-0.5 text-[11px] font-black uppercase ${stockTone[p.stock]}`}
                        >
                          {p.stock}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Block>
        </div>
      </main>

      <footer className="border-t-[3px] border-[var(--ink)] bg-[var(--ink)] px-5 py-4 text-center text-[11px] font-black uppercase tracking-[0.3em] text-[var(--accent)]">
        bozor/os · neo-brutal panel
      </footer>
    </div>
  )
}
