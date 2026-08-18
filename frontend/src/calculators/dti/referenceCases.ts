import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Ожидания посчитаны вручную:
//   45 000 / 150 000 = 0,30 → 30,00 %, ровно на границе комфортной зоны
//   64 500 / 150 000 = 0,43 → 43,00 %, ровно на верхней границе повышенной
//   75 000 / 150 000 = 0,50 → 50,00 %, высокая нагрузка
export const dtiReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'граница комфортной зоны: ровно 30 %',
    inputs: { payments: 45000, income: 150000 },
    expectPrimary: '30,00 %',
    expectSecondary: [{ label: 'Оценка', value: 'Комфортная' }],
  },
  {
    name: 'верхняя граница повышенной зоны: ровно 43 %',
    inputs: { payments: 64500, income: 150000 },
    expectPrimary: '43,00 %',
    expectSecondary: [{ label: 'Оценка', value: 'Повышенная' }],
  },
  {
    name: 'высокая нагрузка: половина дохода уходит на долги',
    inputs: { payments: 75000, income: 150000 },
    expectPrimary: '50,00 %',
    expectSecondary: [
      { label: 'Оценка', value: 'Высокая' },
      { label: 'Остаётся после платежей', value: '75 000 ₽' },
    ],
  },
  {
    name: 'граница: долгов нет',
    inputs: { payments: 0, income: 150000 },
    expectPrimary: '0,00 %',
    expectSecondary: [{ label: 'Оценка', value: 'Комфортная' }],
  },
  {
    name: 'платежи превышают доход',
    inputs: { payments: 180000, income: 150000 },
    expectPrimary: '120,00 %',
    expectSecondary: [{ label: 'Остаётся после платежей', value: '-30 000 ₽' }],
  },
  {
    name: 'недопустимо: нулевой доход',
    inputs: { payments: 45000, income: 0 },
    expectPrimary: '—',
  },
];
