// Bitta yig'ma ustun — segmentlar orasida 2px sirt bo'shlig'i.
export default function StackedBar({ items }) {
  const total = items.reduce((s, i) => s + i.value, 0)

  return (
    <div>
      <div className="flex h-3 w-full gap-[2px] overflow-hidden rounded-full">
        {items.map((i) => (
          <div
            key={i.name}
            style={{ flexBasis: `${(i.value / total) * 100}%`, background: i.color }}
            className="h-full first:rounded-l-full last:rounded-r-full"
          />
        ))}
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i.name} className="flex items-center gap-2 text-sm">
            <span className="size-2.5 rounded-full" style={{ background: i.color }} />
            <span className="text-[var(--ink-2)]">{i.name}</span>
            <span className="ml-auto font-medium tabular-nums text-[var(--ink-1)]">
              {((i.value / total) * 100).toFixed(0)}%
            </span>
            <span className="w-20 text-right tabular-nums text-[var(--ink-3)]">
              ${i.value.toLocaleString('ru-RU')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
