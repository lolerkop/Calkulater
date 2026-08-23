import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const homeEquityReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { value: 9000000, balance: 3200000, ltv: 80, rate: 18, years: 10 },
    expectPrimary: "4 000 000 ₽",
    expectSecondary: [
      { label: "Собственный капитал в жилье", value: "5 800 000 ₽" },
      { label: "Предел по доле залога", value: "7 200 000 ₽" },
      { label: "Доля собственного капитала", value: "64,444 %" },
      { label: "Платёж по такому кредиту", value: "72 074,08 ₽" },
    ],
  },
  {
    name: "граница 2",
    inputs: { value: 5000000, balance: 0, ltv: 70, rate: 15, years: 5 },
    expectPrimary: "3 500 000 ₽",
    expectSecondary: [
      { label: "Собственный капитал в жилье", value: "5 000 000 ₽" },
      { label: "Предел по доле залога", value: "3 500 000 ₽" },
      { label: "Доля собственного капитала", value: "100 %" },
      { label: "Платёж по такому кредиту", value: "83 264,76 ₽" },
    ],
  },
  {
    name: "обычный 3",
    inputs: { value: 4000000, balance: 3500000, ltv: 80, rate: 20, years: 7 },
    expectPrimary: "0 ₽",
    expectSecondary: [
      { label: "Собственный капитал в жилье", value: "500 000 ₽" },
      { label: "Предел по доле залога", value: "3 200 000 ₽" },
      { label: "Доля собственного капитала", value: "12,5 %" },
      { label: "Платёж по такому кредиту", value: "0 ₽" },
    ],
  },
  {
    name: "остаток долга не может превышать стоимость жилья",
    inputs: { value: 1000000, balance: 1500000, ltv: 80, rate: 18, years: 10 },
    expectPrimary: "—",
  },
  {
    name: "доля залога задаётся от 0 до 100 процентов",
    inputs: { value: 9000000, balance: 0, ltv: 120, rate: 18, years: 10 },
    expectPrimary: "—",
  },
];
