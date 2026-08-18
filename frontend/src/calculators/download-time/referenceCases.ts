import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены из bits = байты × 8, t = bits ÷ скорость:
//   1 ГБ = 1e9 байт → 8e9 бит ÷ 1e8 бит/с = 80 с
//   700 МиБ = 700 × 1048576 = 734 003 200 байт → 5 872 025 600 бит ÷ 5e7 = 117,4405… с
//   1 КБ = 1000 байт → 8000 бит ÷ 1e9 = 0,000008 с = 0,008 мс
export const downloadTimeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'десятичный гигабайт на 100 Мбит/с — ровно 80 секунд',
    inputs: { size: 1, sizeUnit: 'gb', speed: 100, speedUnit: 'mbit' },
    expectPrimary: '1:20',
    expectSecondary: [{ label: 'Всего секунд', value: '80,00' }],
  },
  {
    name: 'двоичный мебибайт: 700 МиБ на 50 Мбит/с',
    inputs: { size: 700, sizeUnit: 'mib', speed: 50, speedUnit: 'mbit' },
    expectPrimary: '1:57',
    expectSecondary: [{ label: 'Всего секунд', value: '117,44' }],
  },
  {
    name: 'скорость в мегабайтах: 1 ГБ на 12,5 МБ/с — те же 80 секунд',
    inputs: { size: 1, sizeUnit: 'gb', speed: 12.5, speedUnit: 'mbyte' },
    expectPrimary: '1:20',
  },
  {
    name: 'граница: маленький файл на быстром канале измеряется в миллисекундах',
    inputs: { size: 1, sizeUnit: 'kb', speed: 1000, speedUnit: 'mbit' },
    expectPrimary: '0,01 мс',
  },
  {
    name: 'граница: меньше минуты показывается в секундах',
    inputs: { size: 100, sizeUnit: 'mb', speed: 100, speedUnit: 'mbit' },
    expectPrimary: '8,00 с',
  },
  {
    name: 'недопустимо: нулевая скорость',
    inputs: { size: 1, sizeUnit: 'gb', speed: 0, speedUnit: 'mbit' },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: нулевой размер',
    inputs: { size: 0, sizeUnit: 'gb', speed: 100, speedUnit: 'mbit' },
    expectPrimary: '—',
  },
];
