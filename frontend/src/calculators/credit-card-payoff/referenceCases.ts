import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   100 000 под 24 % платежом 5 000: r = 0,02, n = ⌈25,3⌉ = 26, проценты 28 987,28
//   50 000 под 18 % платежом 10 000: r = 0,015, n = ⌈5,3⌉ = 6, проценты 2 376,65
//   беспроцентная рассрочка: n = ⌈30 000 / 5 000⌉ = 6, проценты нулевые
export const creditCardPayoffReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "100 000 ₽ под 24 % платежом 5 000 ₽",
    inputs: { balance: 100000, apr: 24, payment: 5000 },
    expectPrimary: "26 мес",
    expectSecondary: [
      { label: "Переплата процентами", value: "28 987,28 ₽" },
      { label: "Выплачено всего", value: "128 987,28 ₽" },
      { label: "Доля переплаты", value: "28,99%" },
      { label: "Первый месяц: проценты", value: "2 000,00 ₽" },
      { label: "Первый месяц: тело долга", value: "3 000,00 ₽" },
    ],
  },
  {
    name: "50 000 ₽ под 18 % платежом 10 000 ₽",
    inputs: { balance: 50000, apr: 18, payment: 10000 },
    expectPrimary: "6 мес",
    expectSecondary: [
      { label: "Переплата процентами", value: "2 376,65 ₽" },
      { label: "Выплачено всего", value: "52 376,65 ₽" },
      { label: "Первый месяц: проценты", value: "750,00 ₽" },
    ],
  },
  {
    name: "граница: беспроцентная рассрочка",
    inputs: { balance: 30000, apr: 0, payment: 5000 },
    expectPrimary: "6 мес",
    expectSecondary: [
      { label: "Переплата процентами", value: "0,00 ₽" },
      { label: "Выплачено всего", value: "30 000,00 ₽" },
      { label: "Доля переплаты", value: "0,00%" },
    ],
  },
  {
    name: "платёж не покрывает процент — отклоняется",
    inputs: { balance: 100000, apr: 24, payment: 1500 },
    expectPrimary: "—",
  },
  {
    name: "нулевой платёж отклоняется",
    inputs: { balance: 100000, apr: 24, payment: 0 },
    expectPrimary: "—",
  },
];
