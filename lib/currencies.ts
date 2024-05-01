export const Currencies = [
  { value: 'USD', label: '$ Dollar', local: 'en-US' },
  { value: 'EUR', label: '€ Euro', local: 'de-DE' }, // German (Germany)
  { value: 'JPY', label: '¥ Japanese Yen', local: 'ja-JP' },
  { value: 'GBP', label: '£ Pound Sterling', local: 'en-GB' }, // English (United Kingdom)
]

export type Currency = (typeof Currencies)[0]
