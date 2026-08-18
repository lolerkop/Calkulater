import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Выведено вручную:
//   100000 · 2,5 / 100 = 2500; остаток 100000 − 2500 = 97500
//   2500 · 100 / 2,5   = 100000
//   2500 / 100000 · 100 = 2,50 %
export const commissionReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'комиссия из суммы: 100 000 при 2,5 % → 2 500',
    inputs: { mode: 'fromAmount', a: 100000, b: 2.5 },
    expectPrimary: '2 500 ₽',
    expectSecondary: [{ label: 'К получению', value: '97 500 ₽' }],
  },
  {
    name: 'сумма из комиссии: 2 500 при 2,5 % → 100 000',
    inputs: { mode: 'fromCommission', a: 2500, b: 2.5 },
    expectPrimary: '100 000 ₽',
    expectSecondary: [{ label: 'К получению', value: '97 500 ₽' }],
  },
  {
    name: 'ставка из обоих: 2 500 от 100 000 → 2,50 %',
    inputs: { mode: 'rate', a: 100000, b: 2500 },
    expectPrimary: '2,50 %',
  },
  {
    name: 'граница: нулевая ставка даёт нулевую комиссию',
    inputs: { mode: 'fromAmount', a: 100000, b: 0 },
    expectPrimary: '0 ₽',
    expectSecondary: [{ label: 'К получению', value: '100 000 ₽' }],
  },
  {
    name: 'домен: сумма из комиссии при нулевой ставке неопределена',
    inputs: { mode: 'fromCommission', a: 2500, b: 0 },
    expectPrimary: '—',
    expectSecondary: [{ label: 'Проверьте данные', value: 'Ставка комиссии должна быть больше нуля' }],
  },
  {
    name: 'домен: ставка при нулевой сумме неопределена',
    inputs: { mode: 'rate', a: 0, b: 2500 },
    expectPrimary: '—',
    expectSecondary: [{ label: 'Проверьте данные', value: 'Сумма сделки должна быть больше нуля' }],
  },
];
