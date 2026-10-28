export const ticker = [
  { sym: 'BTC', name: 'Bitcoin', price: 71482.3, change: 2.84, cap: '1,41T' },
  { sym: 'ETH', name: 'Ethereum', price: 3814.07, change: 1.92, cap: '458B' },
  { sym: 'SOL', name: 'Solana', price: 186.44, change: -3.17, cap: '86B' },
  { sym: 'AVAX', name: 'Avalanche', price: 41.26, change: 5.63, cap: '16B' },
  { sym: 'LINK', name: 'Chainlink', price: 19.83, change: -0.74, cap: '12B' },
]

// 48 soatlik narx (soatlik qadam)
export const price = Array.from({ length: 48 }, (_, i) => {
  const base = 68200
  const wave = Math.sin(i / 5) * 900 + Math.sin(i / 2.3) * 420
  const drift = i * 72
  return Math.round(base + wave + drift)
})

export const hours = Array.from({ length: 48 }, (_, i) => `${String(i % 24).padStart(2, '0')}:00`)

export const volume = Array.from({ length: 48 }, (_, i) =>
  Math.round(420 + Math.abs(Math.sin(i / 3.1)) * 680 + (i % 7) * 40),
)

export const allocation = [
  { name: 'BTC', value: 42, color: 'var(--c-1)' },
  { name: 'ETH', value: 27, color: 'var(--c-2)' },
  { name: 'SOL', value: 16, color: 'var(--c-3)' },
  { name: 'Boshqa', value: 15, color: 'var(--c-4)' },
]

export const orderBook = {
  asks: [
    { price: 71510.4, size: 0.842 },
    { price: 71504.1, size: 1.317 },
    { price: 71499.8, size: 0.406 },
    { price: 71494.2, size: 2.084 },
    { price: 71489.6, size: 0.733 },
  ],
  bids: [
    { price: 71480.2, size: 1.246 },
    { price: 71475.9, size: 0.519 },
    { price: 71470.3, size: 3.108 },
    { price: 71466.7, size: 0.874 },
    { price: 71461.1, size: 1.632 },
  ],
}

export const trades = [
  { time: '14:38:12', pair: 'BTC/USDT', side: 'sotib olish', price: '71 482,30', size: '0,412', total: '29 450,70' },
  { time: '14:37:58', pair: 'ETH/USDT', side: 'sotish', price: '3 814,07', size: '2,180', total: '8 314,67' },
  { time: '14:37:41', pair: 'SOL/USDT', side: 'sotish', price: '186,44', size: '44,000', total: '8 203,36' },
  { time: '14:36:09', pair: 'BTC/USDT', side: 'sotib olish', price: '71 460,15', size: '0,125', total: '8 932,52' },
  { time: '14:35:47', pair: 'AVAX/USDT', side: 'sotib olish', price: '41,26', size: '310,00', total: '12 790,60' },
]

export const stats = [
  { label: 'Portfel qiymati', value: '$284 190', delta: 4.21, spark: [238, 244, 241, 252, 261, 268, 276, 284] },
  { label: '24s foyda', value: '+$11 482', delta: 3.86, spark: [4, 6, 5, 8, 7, 9, 10, 11.4] },
  { label: 'Ochiq pozitsiya', value: '7', delta: 0, spark: [5, 6, 6, 7, 6, 7, 7, 7] },
  { label: 'Funding rate', value: '0,018%', delta: -0.004, spark: [0.03, 0.028, 0.025, 0.024, 0.022, 0.021, 0.019, 0.018] },
]
