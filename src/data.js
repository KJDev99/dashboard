export const days = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya']

// Haftalik faollik: qadamlar (ming) va faol daqiqalar
export const activity = {
  steps: [8.2, 10.4, 7.6, 12.1, 9.8, 14.3, 11.2],
  minutes: [42, 58, 35, 66, 51, 78, 60],
}

export const rings = [
  { label: 'Harakat', value: 684, goal: 750, unit: 'kkal', color: 'var(--c-3)' },
  { label: 'Mashq', value: 46, goal: 60, unit: 'daq', color: 'var(--c-1)' },
  { label: 'Turish', value: 10, goal: 12, unit: 'soat', color: 'var(--c-2)' },
]

export const sleep = [
  { day: 'Du', deep: 1.6, light: 4.2, rem: 1.4 },
  { day: 'Se', deep: 1.9, light: 4.6, rem: 1.6 },
  { day: 'Ch', deep: 1.2, light: 3.8, rem: 1.1 },
  { day: 'Pa', deep: 2.1, light: 4.9, rem: 1.8 },
  { day: 'Ju', deep: 1.7, light: 4.4, rem: 1.5 },
  { day: 'Sh', deep: 2.4, light: 5.1, rem: 2.0 },
  { day: 'Ya', deep: 2.0, light: 4.8, rem: 1.7 },
]

export const vitals = [
  { label: 'Tinch puls', value: '54', unit: 'zarba/daq', delta: -2, spark: [58, 57, 57, 56, 55, 55, 54] },
  { label: 'HRV', value: '68', unit: 'ms', delta: 5, spark: [59, 61, 60, 63, 65, 66, 68] },
  { label: 'VO₂ max', value: '48,2', unit: 'ml/kg/daq', delta: 1.4, spark: [45.1, 45.8, 46.2, 46.9, 47.4, 47.8, 48.2] },
  { label: 'Suv', value: '2,4', unit: 'litr', delta: 0.3, spark: [1.9, 2.0, 1.8, 2.2, 2.1, 2.3, 2.4] },
]

export const workouts = [
  { name: 'Ertalabki yugurish', time: '06:40', dur: '42 daq', kcal: 468, type: 'yugurish' },
  { name: 'Kuch mashg‘uloti', time: '18:15', dur: '55 daq', kcal: 392, type: 'zal' },
  { name: 'Suzish', time: '07:20', dur: '35 daq', kcal: 310, type: 'suzish' },
  { name: 'Velosiped', time: '17:05', dur: '68 daq', kcal: 540, type: 'velo' },
]

export const goals = [
  { label: 'Haftalik masofa', done: 38.4, target: 50, unit: 'km' },
  { label: 'Mashq kunlari', done: 5, target: 6, unit: 'kun' },
  { label: 'Uyqu o‘rtachasi', done: 7.4, target: 8, unit: 'soat' },
]
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
