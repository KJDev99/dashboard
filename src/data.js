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
