const tone = {
  'to‘landi': 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  'kutilmoqda': 'bg-amber-50 text-amber-700 ring-amber-200',
  'muddati o‘tgan': 'bg-red-50 text-red-700 ring-red-200',
}

export default function InvoiceTable({ rows }) {
  return (
    <div className="-mx-5 overflow-x-auto">
      <table className="w-full min-w-[520px] text-sm">
        <thead>
          <tr className="border-y border-slate-200 bg-slate-50/70 text-left text-xs uppercase tracking-wide text-[var(--ink-3)]">
            <th className="py-2.5 pl-5 pr-3 font-medium">Hisob</th>
            <th className="px-3 py-2.5 font-medium">Mijoz</th>
            <th className="px-3 py-2.5 font-medium">Tarif</th>
            <th className="px-3 py-2.5 text-right font-medium">Summa</th>
            <th className="px-3 py-2.5 font-medium">Holat</th>
            <th className="py-2.5 pl-3 pr-5 text-right font-medium">Sana</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60">
              <td className="py-3 pl-5 pr-3 font-medium tabular-nums">{r.id}</td>
              <td className="px-3 py-3 text-[var(--ink-2)]">{r.client}</td>
              <td className="px-3 py-3 text-[var(--ink-2)]">{r.plan}</td>
              <td className="px-3 py-3 text-right font-medium tabular-nums">{r.amount}</td>
              <td className="px-3 py-3">
                <span className={`rounded-full px-2 py-0.5 text-xs ring-1 ring-inset ${tone[r.status]}`}>
                  {r.status}
                </span>
              </td>
              <td className="py-3 pl-3 pr-5 text-right text-[var(--ink-3)]">{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
