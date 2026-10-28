export const months = [
  'Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyn',
  'Iyl', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek',
]

// Oylik takrorlanuvchi daromad, ming AQSh dollarida
export const mrr = {
  2026: [182, 196, 205, 214, 231, 248, 262, 271, 288, 305, 319, 334],
  2025: [121, 128, 134, 147, 152, 161, 168, 174, 183, 191, 198, 207],
}

export const kpis = [
  {
    id: 'mrr',
    label: 'Oylik daromad',
    value: '$334K',
    delta: 8.4,
    trend: [262, 271, 268, 288, 296, 305, 319, 334],
  },
  {
    id: 'users',
    label: 'Faol foydalanuvchi',
    value: '48 912',
    delta: 3.1,
    trend: [41200, 42800, 43100, 44600, 45900, 46400, 47800, 48912],
  },
  {
    id: 'conv',
    label: 'Konversiya',
    value: '4,8%',
    delta: 0.6,
    trend: [3.9, 4.0, 4.2, 4.1, 4.4, 4.5, 4.7, 4.8],
  },
  {
    id: 'churn',
    label: 'Churn',
    value: '1,9%',
    delta: -0.4,
    trend: [2.8, 2.7, 2.6, 2.4, 2.3, 2.2, 2.0, 1.9],
    goodWhenDown: true,
  },
]

export const channels = [
  { name: 'Organik qidiruv', value: 18420 },
  { name: 'To‘g‘ridan-to‘g‘ri', value: 12180 },
  { name: 'Referal', value: 7640 },
  { name: 'Ijtimoiy tarmoq', value: 5310 },
  { name: 'Email', value: 3860 },
  { name: 'Reklama', value: 2490 },
]

export const plans = [
  { name: 'Starter', value: 21400, color: 'var(--c-1)' },
  { name: 'Growth', value: 38600, color: 'var(--c-2)' },
  { name: 'Scale', value: 19800, color: 'var(--c-3)' },
]

export const invoices = [
  { id: 'INV-2411', client: 'Falcon Retail', plan: 'Scale', amount: '$12 400', status: 'to‘landi', date: '24 okt' },
  { id: 'INV-2410', client: 'Nordic Labs', plan: 'Growth', amount: '$4 980', status: 'to‘landi', date: '23 okt' },
  { id: 'INV-2409', client: 'Atlas Freight', plan: 'Growth', amount: '$4 980', status: 'kutilmoqda', date: '22 okt' },
  { id: 'INV-2408', client: 'Vertex Media', plan: 'Starter', amount: '$1 290', status: 'muddati o‘tgan', date: '19 okt' },
  { id: 'INV-2407', client: 'Juniper Health', plan: 'Scale', amount: '$12 400', status: 'to‘landi', date: '18 okt' },
]
