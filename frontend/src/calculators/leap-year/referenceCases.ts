import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Ожидания получены применением правила вручную, а не прогоном реализации:
//   2024 делится на 4 и не на 100 → високосный
//   1900 делится на 100, но не на 400 → не високосный, следующий 1904
//   2000 делится на 400 → високосный
//   2023 не делится на 4 → не високосный, следующий 2024, предыдущий 2020
export const leapYearReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: 'обычный високосный: 2024 делится на 4',
    inputs: { year: 2024 },
    expectPrimary: 'Да',
    expectSecondary: [{ label: 'Дней в феврале', value: '29' }],
  },
  {
    name: 'вековое исключение: 1900 не високосный',
    inputs: { year: 1900 },
    expectPrimary: 'Нет',
    expectSecondary: [{ label: 'Следующий високосный', value: '1904' }],
  },
  {
    name: 'исключение из исключения: 2000 делится на 400',
    inputs: { year: 2000 },
    expectPrimary: 'Да',
    expectSecondary: [{ label: 'Дней в году', value: '366' }],
  },
  {
    name: 'обычный невисокосный: 2023',
    inputs: { year: 2023 },
    expectPrimary: 'Нет',
    expectSecondary: [
      { label: 'Следующий високосный', value: '2024' },
      { label: 'Предыдущий високосный', value: '2020' },
    ],
  },
  {
    name: 'граница: 2100 — вековой невисокосный',
    inputs: { year: 2100 },
    expectPrimary: 'Нет',
    expectSecondary: [{ label: 'Следующий високосный', value: '2104' }],
  },
  {
    name: 'граница домена: первый год',
    inputs: { year: 1 },
    expectPrimary: 'Нет',
  },
  {
    name: 'недопустимо: нулевой год',
    inputs: { year: 0 },
    expectPrimary: '—',
  },
];
