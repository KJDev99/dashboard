// Holat rangi hech qachon yolg'iz ishlamaydi — belgi va matn bilan birga keladi.
const map = {
  ok: { color: 'var(--ok)', mark: '●', label: 'barqaror' },
  warn: { color: 'var(--warn)', mark: '▲', label: 'diqqat' },
  crit: { color: 'var(--crit)', mark: '■', label: 'kritik' },
  info: { color: 'var(--info)', mark: '◆', label: 'axborot' },
}

export default function StatusDot({ state, withLabel = true }) {
  const s = map[state] ?? map.info
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[11px]" style={{ color: s.color }}>
      <span aria-hidden="true" className="text-[9px] leading-none">
        {s.mark}
      </span>
      {withLabel && s.label}
    </span>
  )
}
