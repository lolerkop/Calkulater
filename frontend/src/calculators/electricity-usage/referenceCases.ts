import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную: кВт·ч = мощность(кВт) × часы × дни.
//   2 кВт × 3 ч = 6 кВт·ч в сутки; × 30 = 180 кВт·ч; × 6,2 = 1116 ₽
//   0,075 кВт × 24 ч = 1,8 кВт·ч; × 365 = 657 кВт·ч; × 5,5 = 3613,5 ₽
export const electricityUsageReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'обогреватель 2000 Вт по 3 часа 30 дней — 180 кВт·ч',
    inputs: { power: 2000, powerUnit: 'w', hoursPerDay: 3, days: 30 },
    expectPrimary: '180,00 кВт·ч',
    expectSecondary: [{ label: 'В сутки', value: '6,00 кВт·ч' }],
  },
  {
    name: 'та же нагрузка при тарифе 6,2 — 1116 рублей',
    inputs: { power: 2000, powerUnit: 'w', hoursPerDay: 3, days: 30, tariff: 6.2 },
    expectPrimary: '180,00 кВт·ч',
    expectSecondary: [{ label: 'Стоимость за период', value: '1 116 ₽' }],
  },
  {
    name: 'лампа 75 Вт круглосуточно за год — 657 кВт·ч',
    inputs: { power: 75, powerUnit: 'w', hoursPerDay: 24, days: 365 },
    expectPrimary: '657,00 кВт·ч',
  },
  {
    name: 'ввод в киловаттах даёт тот же ответ',
    inputs: { power: 2, powerUnit: 'kw', hoursPerDay: 3, days: 30 },
    expectPrimary: '180,00 кВт·ч',
  },
  {
    name: 'граница: 1000 Вт за один час одного дня — ровно 1 кВт·ч',
    inputs: { power: 1000, powerUnit: 'w', hoursPerDay: 1, days: 1 },
    expectPrimary: '1,00 кВт·ч',
  },
  {
    name: 'недопустимо: 25 часов в сутки',
    inputs: { power: 2000, powerUnit: 'w', hoursPerDay: 25, days: 30 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: нулевая мощность',
    inputs: { power: 0, powerUnit: 'w', hoursPerDay: 3, days: 30 },
    expectPrimary: '—',
  },
];
