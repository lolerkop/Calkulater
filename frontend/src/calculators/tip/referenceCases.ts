import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную: tip = счёт × процент/100, итого = счёт + tip.
//   3200 × 0,10 = 320 → 3520 · 5400 × 0,15 = 810 → 6210 → 6210/4 = 1552,5
//   1000 × 0 = 0 → 1000 → 1000/3 = 333,333…
export const tipReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'счёт 3200 и 10 % — итого 3520',
    inputs: { bill: 3200, tipPercent: 10, people: 1 },
    expectPrimary: '3 520,00 ₽',
    expectSecondary: [{ label: 'Чаевые', value: '320,00 ₽' }],
  },
  {
    name: 'счёт 5400 и 15 % на четверых — 1552,50 с человека',
    inputs: { bill: 5400, tipPercent: 15, people: 4 },
    expectPrimary: '6 210,00 ₽',
    expectSecondary: [
      { label: 'Чаевые', value: '810,00 ₽' },
      { label: 'С человека', value: '1 552,50 ₽' },
    ],
  },
  {
    name: 'граница: без чаевых счёт делится как есть',
    inputs: { bill: 1000, tipPercent: 0, people: 3 },
    expectPrimary: '1 000,00 ₽',
    expectSecondary: [
      { label: 'Чаевые', value: '0,00 ₽' },
      { label: 'С человека', value: '333,33 ₽' },
    ],
  },
  {
    name: 'округление вверх поднимает и итог: 1000 на троих по 334',
    inputs: { bill: 1000, tipPercent: 0, people: 3, roundPerPerson: 'yes' },
    expectPrimary: '1 002,00 ₽',
    expectSecondary: [
      { label: 'С человека', value: '334,00 ₽' },
      { label: 'Сверх счёта из-за округления', value: '2,00 ₽' },
    ],
  },
  {
    name: 'недопустимо: ноль человек',
    inputs: { bill: 3200, tipPercent: 10, people: 0 },
    expectPrimary: '—',
  },
  {
    name: 'недопустимо: нулевой счёт',
    inputs: { bill: 0, tipPercent: 10, people: 2 },
    expectPrimary: '—',
  },
];
