export const hours = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`)

// Soatlik so'rovlar (ming) va javob vaqti (ms) — alohida grafiklarda, bitta o'q qoidasiga rioya qilib
export const requests = [
  182, 148, 121, 98, 86, 94, 132, 218, 341, 402, 438, 451, 466, 472, 458, 441, 429, 447, 468, 452, 398, 331, 268, 214,
]

export const latency = [
  118, 112, 104, 98, 96, 101, 114, 142, 186, 214, 238, 246, 252, 261, 248, 236, 228, 241, 256, 244, 208, 172, 146, 128,
]

export const errorRate = [
  0.21, 0.18, 0.14, 0.12, 0.11, 0.13, 0.17, 0.26, 0.41, 0.52, 0.68, 0.74, 1.24, 0.91, 0.64, 0.49, 0.44, 0.52, 0.61,
  0.55, 0.42, 0.33, 0.27, 0.23,
]

export const kpis = [
  { label: 'So‘rovlar / soat', value: '452K', delta: '+6,2%', state: 'ok' },
  { label: 'p95 javob vaqti', value: '244 ms', delta: '+18 ms', state: 'warn' },
  { label: 'Xatolik darajasi', value: '0,55%', delta: '+0,11 p.p.', state: 'warn' },
  { label: 'Uptime (30 kun)', value: '99,982%', delta: 'SLA 99,9%', state: 'ok' },
  { label: 'Faol sessiya', value: '18 406', delta: '+1 204', state: 'ok' },
  { label: 'Navbat chuqurligi', value: '1 284', delta: '−312', state: 'ok' },
]

export const services = [
  { name: 'api-gateway', env: 'prod', ver: 'v4.12.1', rps: 12840, p95: 118, err: 0.12, cpu: 62, state: 'ok' },
  { name: 'auth-service', env: 'prod', ver: 'v2.8.4', rps: 4210, p95: 86, err: 0.04, cpu: 38, state: 'ok' },
  { name: 'billing-worker', env: 'prod', ver: 'v1.19.0', rps: 980, p95: 412, err: 1.84, cpu: 88, state: 'crit' },
  { name: 'search-index', env: 'prod', ver: 'v3.4.7', rps: 3106, p95: 204, err: 0.46, cpu: 71, state: 'warn' },
  { name: 'media-resizer', env: 'prod', ver: 'v0.9.12', rps: 642, p95: 318, err: 0.31, cpu: 54, state: 'warn' },
  { name: 'notifier', env: 'prod', ver: 'v2.1.3', rps: 1874, p95: 94, err: 0.08, cpu: 29, state: 'ok' },
  { name: 'api-gateway', env: 'staging', ver: 'v4.13.0-rc2', rps: 184, p95: 132, err: 0.21, cpu: 18, state: 'ok' },
  { name: 'report-builder', env: 'prod', ver: 'v1.4.2', rps: 212, p95: 1840, err: 0.62, cpu: 46, state: 'warn' },
]

export const incidents = [
  {
    id: 'INC-4821',
    title: 'billing-worker navbati to‘lib qoldi',
    sev: 'crit',
    owner: 'A. Rasulov',
    opened: '12:04',
    age: '2s 18daq',
  },
  {
    id: 'INC-4820',
    title: 'search-index p95 chegaradan oshdi',
    sev: 'warn',
    owner: 'M. Yo‘ldosheva',
    opened: '10:46',
    age: '3s 36daq',
  },
  {
    id: 'INC-4818',
    title: 'media-resizer qayta ishga tushdi (×3)',
    sev: 'warn',
    owner: 'S. Karimov',
    opened: '08:12',
    age: '6s 10daq',
  },
  {
    id: 'INC-4815',
    title: 'CDN kesh hit darajasi pasaydi',
    sev: 'info',
    owner: 'navbatchi',
    opened: '02:38',
    age: '11s 44daq',
  },
]

export const deploys = [
  { ver: 'v4.12.1', svc: 'api-gateway', by: 'ci-bot', at: '11:48', status: 'muvaffaqiyatli' },
  { ver: 'v1.19.0', svc: 'billing-worker', by: 'a.rasulov', at: '09:21', status: 'qaytarildi' },
  { ver: 'v2.8.4', svc: 'auth-service', by: 'ci-bot', at: '08:02', status: 'muvaffaqiyatli' },
  { ver: 'v3.4.7', svc: 'search-index', by: 'ci-bot', at: '06:55', status: 'muvaffaqiyatli' },
]

// 7 kun × 24 soat issiqlik xaritasi: xatoliklar zichligi
export const heatmap = Array.from({ length: 7 }, (_, d) =>
  Array.from({ length: 24 }, (_, h) => {
    const base = Math.sin((h - 4) / 3.4) * 0.5 + 0.5
    const weekend = d >= 5 ? 0.55 : 1
    const spike = d === 3 && h === 12 ? 1.9 : 1
    return Math.round(Math.min(100, base * 62 * weekend * spike + (h * d) % 11))
  }),
)

export const weekDays = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya']
