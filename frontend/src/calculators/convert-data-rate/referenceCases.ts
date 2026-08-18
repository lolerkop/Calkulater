import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены из определений, а не прогоном движка:
//   байт равен восьми битам, поэтому 1 МБ/с = 8 Мбит/с
//   десятичные приставки: 1 Мбит/с = 10⁶ бит/с
//   двоичная приставка: 1 МиБ/с = 8 × 1024² бит/с = 8 388 608 бит/с
export const dataRateReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'мегабайт в секунду равен восьми мегабитам',
    inputs: { value: 1, from: 'mbytes', to: 'mbits' },
    expectPrimary: '8,0000 Мбит/с',
  },
  {
    name: 'канал 100 Мбит/с даёт 12,5 МБ/с',
    inputs: { value: 100, from: 'mbits', to: 'mbytes' },
    expectPrimary: '12,5000 МБ/с',
  },
  {
    name: 'гигабит в секунду в мегабайтах: 125',
    inputs: { value: 1, from: 'gbits', to: 'mbytes' },
    expectPrimary: '125,0000 МБ/с',
  },
  {
    // Двоичная и десятичная приставки расходятся: мебибайт больше мегабайта.
    name: 'мебибайт в секунду больше мегабайта в секунду',
    inputs: { value: 1, from: 'mibs', to: 'mbytes' },
    expectPrimary: '1,0486 МБ/с',
  },
  {
    name: 'совпадение единиц не даёт дрейфа',
    inputs: { value: 36.6, from: 'mbits', to: 'mbits' },
    expectPrimary: '36,6000 Мбит/с',
  },
  {
    name: 'ноль остаётся нулём',
    inputs: { value: 0, from: 'mbits', to: 'bytes' },
    expectPrimary: '0 Б/с',
  },
];
