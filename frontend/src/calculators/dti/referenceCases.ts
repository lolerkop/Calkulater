import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Числовые ожидания посчитаны вручную и сохранены.
// Описания зон заменены после проверки определения DTI: эти границы
// не определяют комфорт бюджета или вероятность одобрения кредита.
//   45 000 / 150 000 = 0,30 → 30,00 %, ровно на условной границе 30 %
//   64 500 / 150 000 = 0,43 → 43,00 %, ровно на условной границе 43 %
//   75 000 / 150 000 = 0,50 → 50,00 %, выше условной границы 43 %
export const dtiReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'граница условной зоны до 30 %: ровно 30 %',
    inputs: { payments: 45000, income: 150000 },
    expectPrimary: '30,00 %',
    expectSecondary: [{ label: 'Оценка', value: 'До 30 % (условная зона)' }],
  },
  {
    name: 'верхняя граница условной зоны до 43 %: ровно 43 %',
    inputs: { payments: 64500, income: 150000 },
    expectPrimary: '43,00 %',
    expectSecondary: [{ label: 'Оценка', value: 'От 30 до 43 % (условная зона)' }],
  },
  {
    name: 'высокая нагрузка: половина дохода уходит на долги',
    inputs: { payments: 75000, income: 150000 },
    expectPrimary: '50,00 %',
    expectSecondary: [
      { label: 'Оценка', value: 'Выше 43 % (условная зона)' },
      { label: 'Остаётся после платежей', value: '75 000 ₽' },
    ],
  },
  {
    name: 'граница: долгов нет',
    inputs: { payments: 0, income: 150000 },
    expectPrimary: '0,00 %',
    expectSecondary: [{ label: 'Оценка', value: 'До 30 % (условная зона)' }],
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
