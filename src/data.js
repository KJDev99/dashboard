export const weeks = ['1-hafta', '2-hafta', '3-hafta', '4-hafta', '5-hafta', '6-hafta', '7-hafta', '8-hafta']

// Haftalik buyurtmalar soni, kanal bo'yicha
export const orders = {
  'Do‘kon': [412, 468, 441, 524, 572, 548, 631, 702],
  'Marketplace': [286, 310, 352, 338, 401, 426, 448, 495],
}

export const bigStats = [
  { label: 'Savdo hajmi', value: '482 ming', unit: 'so‘m ×1000', delta: '+18,4%', tone: 'var(--accent)' },
  { label: 'Buyurtmalar', value: '1 197', unit: 'bu hafta', delta: '+12,1%', tone: 'var(--accent-2)' },
  { label: 'Qaytarish', value: '3,2%', unit: 'buyurtmadan', delta: '−0,8%', tone: '#9ae6b4' },
  { label: 'Yangi mijoz', value: '684', unit: 'bu oy', delta: '+24,6%', tone: '#a5b4fc' },
]

export const products = [
  { name: 'Oversize futbolka', sold: 1240, revenue: 86800, stock: 'yetarli' },
  { name: 'Keng shim', sold: 964, revenue: 115680, stock: 'yetarli' },
  { name: 'Trikotaj kozok', sold: 712, revenue: 99680, stock: 'kam' },
  { name: 'Sport krossovka', sold: 548, revenue: 164400, stock: 'kam' },
  { name: 'Bosh kiyim', sold: 431, revenue: 25860, stock: 'tugadi' },
]

export const regions = [
  { name: 'Toshkent', value: 38 },
  { name: 'Samarqand', value: 19 },
  { name: 'Farg‘ona', value: 14 },
  { name: 'Buxoro', value: 11 },
  { name: 'Namangan', value: 10 },
  { name: 'Boshqa', value: 8 },
]

export const funnel = [
  { step: 'Tashrif', value: 48200, color: 'var(--c-1)' },
  { step: 'Mahsulot ko‘rildi', value: 26400, color: 'var(--c-4)' },
  { step: 'Savatga qo‘shildi', value: 9860, color: 'var(--c-2)' },
  { step: 'Buyurtma', value: 4120, color: 'var(--c-3)' },
]

export const tasks = [
  { text: 'Qishki kolleksiya narxlarini yangilash', done: true },
  { text: 'Tugagan mahsulotlarni qayta buyurtma qilish', done: false },
  { text: 'Marketplace reklamasini sozlash', done: false },
  { text: 'Oktabr hisobotini yuborish', done: true },
]
