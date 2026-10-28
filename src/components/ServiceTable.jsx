import { useState } from 'react'
import StatusDot from './StatusDot'

const columns = [
  { key: 'name', label: 'Servis', align: 'left' },
  { key: 'env', label: 'Muhit', align: 'left' },
  { key: 'ver', label: 'Versiya', align: 'left' },
  { key: 'rps', label: 'RPS', align: 'right' },
  { key: 'p95', label: 'p95, ms', align: 'right' },
  { key: 'err', label: 'Xato, %', align: 'right' },
  { key: 'cpu', label: 'CPU, %', align: 'right' },
  { key: 'state', label: 'Holat', align: 'left' },
]

export default function ServiceTable({ rows }) {
  const [sort, setSort] = useState({ key: 'rps', dir: 'desc' })
  const [query, setQuery] = useState('')

  const filtered = rows.filter((r) => r.name.includes(query) || r.env.includes(query))
  const sorted = [...filtered].sort((a, b) => {
    const [x, y] = [a[sort.key], b[sort.key]]
    const cmp = typeof x === 'number' ? x - y : String(x).localeCompare(String(y))
    return sort.dir === 'asc' ? cmp : -cmp
  })

  const toggle = (key) =>
    setSort((s) => ({ key, dir: s.key === key && s.dir === 'desc' ? 'asc' : 'desc' }))

  return (
    <div>
      <div className="flex items-center gap-2 border-b border-[var(--line)] px-3 py-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="servis yoki muhit bo‘yicha filtr"
          className="w-56 rounded border border-[var(--line)] bg-[var(--surface-2)] px-2 py-1 text-[12px] placeholder:text-[var(--ink-3)] focus:border-[var(--c-1)] focus:outline-none"
        />
        <span className="text-[11px] text-[var(--ink-3)]">
          {sorted.length} / {rows.length} qator
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-[12px]">
          <thead>
            <tr className="border-b border-[var(--line)] bg-[var(--surface-2)] text-[11px] text-[var(--ink-3)]">
              {columns.map((c) => (
                <th
                  key={c.key}
                  onClick={() => toggle(c.key)}
                  className={`cursor-pointer select-none whitespace-nowrap px-3 py-1.5 font-medium hover:text-[var(--ink-1)] ${
                    c.align === 'right' ? 'text-right' : 'text-left'
                  }`}
                >
                  {c.label}
                  {sort.key === c.key && <span className="ml-1">{sort.dir === 'asc' ? '↑' : '↓'}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((r) => (
              <tr
                key={`${r.name}-${r.env}`}
                className="border-b border-[var(--line-soft)] last:border-0 hover:bg-[var(--surface-2)]"
              >
                <td className="whitespace-nowrap px-3 py-1.5 font-medium">{r.name}</td>
                <td className="px-3 py-1.5">
                  <span className="rounded border border-[var(--line)] px-1.5 py-px text-[10px] uppercase text-[var(--ink-2)]">
                    {r.env}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-1.5 font-mono text-[11px] text-[var(--ink-2)]">{r.ver}</td>
                <td className="px-3 py-1.5 text-right">{r.rps.toLocaleString('ru-RU')}</td>
                <td className="px-3 py-1.5 text-right">{r.p95}</td>
                <td
                  className="px-3 py-1.5 text-right"
                  style={{ color: r.err > 1 ? 'var(--crit)' : r.err > 0.4 ? 'var(--warn)' : undefined }}
                >
                  {r.err.toFixed(2)}
                </td>
                <td className="px-3 py-1.5 text-right">
                  <span className="inline-flex items-center justify-end gap-1.5">
                    <span className="h-1.5 w-12 overflow-hidden rounded-full bg-[var(--line-soft)]">
                      <span
                        className="block h-full rounded-full"
                        style={{
                          width: `${r.cpu}%`,
                          background: r.cpu > 80 ? 'var(--crit)' : r.cpu > 65 ? 'var(--warn)' : 'var(--c-1)',
                        }}
                      />
                    </span>
                    {r.cpu}
                  </span>
                </td>
                <td className="px-3 py-1.5">
                  <StatusDot state={r.state} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
