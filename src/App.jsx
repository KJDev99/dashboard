import { useState } from 'react'
import Rail from './components/Rail'
import Ticker from './components/Ticker'
import Panel from './components/Panel'
import OrderBook from './components/OrderBook'
import PriceChart from './charts/PriceChart'
import DonutChart from './charts/DonutChart'
import Spark from './charts/Spark'
import { allocation, hours, orderBook, price, stats, ticker, trades, volume } from './data'

const timeframes = ['1S', '4S', '1K', '1H', '1O']

export default function App() {
  const [tf, setTf] = useState('1K')

  return (
    <div className="flex min-h-dvh">
      <Rail />

      <main className="min-w-0 flex-1">
        <header className="flex flex-wrap items-center gap-3 px-6 py-4">
          <div>
            <h1 className="neon-text text-lg font-semibold tracking-tight">BTC / USDT</h1>
            <p className="font-mono text-[11px] text-[var(--ink-3)]">Perpetual · 20× leverage</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 font-mono text-[11px] text-[var(--ink-2)]">
              <span className="size-1.5 animate-pulse rounded-full bg-[var(--up)]" />
              jonli
            </span>
            <button className="rounded-lg bg-gradient-to-r from-[var(--glow-1)] to-[var(--glow-2)] px-4 py-2 text-sm font-semibold text-[#07070e] transition-opacity hover:opacity-90">
              Savdo ochish
            </button>
          </div>
        </header>

        <Ticker rows={ticker} />

        <div className="space-y-5 p-6">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className="neon-ring rounded-2xl bg-[var(--surface)]/80 p-4">
                <p className="text-[11px] uppercase tracking-wider text-[var(--ink-3)]">{s.label}</p>
                <div className="mt-2 flex items-end justify-between gap-2">
                  <p className="font-mono text-xl text-[var(--ink-1)]">{s.value}</p>
                  <Spark data={s.spark} color={i % 2 ? 'var(--glow-2)' : 'var(--glow-1)'} />
                </div>
                {s.delta !== 0 && (
                  <p
                    className="mt-2 font-mono text-[11px]"
                    style={{ color: s.delta > 0 ? 'var(--up)' : 'var(--down)' }}
                  >
                    {s.delta > 0 ? '▲' : '▼'} {Math.abs(s.delta)}% · 24s
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="grid gap-5 xl:grid-cols-[2fr_1fr]">
            <Panel
              title="Narx va hajm"
              meta="so‘nggi 48 soat"
              action={
                <div className="flex gap-1 rounded-lg border border-[var(--line)] p-0.5">
                  {timeframes.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTf(t)}
                      className={
                        t === tf
                          ? 'rounded-md bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[11px] text-[var(--glow-1)]'
                          : 'rounded-md px-2.5 py-1 font-mono text-[11px] text-[var(--ink-3)] hover:text-[var(--ink-1)]'
                      }
                    >
                      {t}
                    </button>
                  ))}
                </div>
              }
            >
              <PriceChart labels={hours} data={price} volume={volume} />
            </Panel>

            <Panel title="Buyurtmalar kitobi" meta="depth 5">
              <OrderBook book={orderBook} />
            </Panel>
          </div>

          <div className="grid gap-5 xl:grid-cols-[1fr_2fr]">
            <Panel title="Portfel taqsimoti" meta="28 okt">
              <DonutChart items={allocation} />
            </Panel>

            <Panel title="So‘nggi bitimlar" meta="jonli oqim">
              <div className="-mx-5 overflow-x-auto">
                <table className="w-full min-w-[520px] font-mono text-[12px]">
                  <thead>
                    <tr className="border-y border-[var(--line)] text-left text-[10px] uppercase tracking-wider text-[var(--ink-3)]">
                      <th className="py-2 pl-5 pr-3 font-normal">Vaqt</th>
                      <th className="px-3 py-2 font-normal">Juftlik</th>
                      <th className="px-3 py-2 font-normal">Yo‘nalish</th>
                      <th className="px-3 py-2 text-right font-normal">Narx</th>
                      <th className="px-3 py-2 text-right font-normal">Hajm</th>
                      <th className="py-2 pl-3 pr-5 text-right font-normal">Jami, $</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trades.map((t) => {
                      const buy = t.side === 'sotib olish'
                      return (
                        <tr
                          key={t.time}
                          className="border-b border-[var(--line)]/60 last:border-0 hover:bg-[var(--surface-2)]/60"
                        >
                          <td className="py-2.5 pl-5 pr-3 text-[var(--ink-3)]">{t.time}</td>
                          <td className="px-3 py-2.5 text-[var(--ink-1)]">{t.pair}</td>
                          <td className="px-3 py-2.5">
                            <span style={{ color: buy ? 'var(--up)' : 'var(--down)' }}>
                              {buy ? '▲' : '▼'} {t.side}
                            </span>
                          </td>
                          <td className="px-3 py-2.5 text-right text-[var(--ink-1)]">{t.price}</td>
                          <td className="px-3 py-2.5 text-right text-[var(--ink-2)]">{t.size}</td>
                          <td className="py-2.5 pl-3 pr-5 text-right text-[var(--ink-1)]">{t.total}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </Panel>
          </div>
        </div>
      </main>
    </div>
  )
}
