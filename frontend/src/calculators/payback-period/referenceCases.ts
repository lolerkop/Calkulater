import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const paybackPeriodReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "вложение 1 млн при потоке 300 тыс. без дисконта",
    inputs: { investment: 1000000, cashflow: 300000, rate: 0 },
    expectPrimary: "3,333 лет",
    expectSecondary: [
      { label: "В месяцах", value: "40 мес" },
      { label: "Дисконтированный срок", value: "3,333 лет" },
      { label: "Годовой поток", value: "300 000 ₽" },
      { label: "Возврат за простой срок", value: "1 000 000 ₽" },
    ],
  },
  {
    name: "вложение 5 млн при потоке 1,2 млн и ставке 10 %",
    inputs: { investment: 5000000, cashflow: 1200000, rate: 10 },
    expectPrimary: "4,167 лет",
    expectSecondary: [
      { label: "В месяцах", value: "50 мес" },
      { label: "Дисконтированный срок", value: "5,666 лет" },
      { label: "Годовой поток", value: "1 200 000 ₽" },
      { label: "Возврат за простой срок", value: "5 000 000 ₽" },
    ],
  },
  {
    name: "граница: поток равен вложению",
    inputs: { investment: 500000, cashflow: 500000, rate: 0 },
    expectPrimary: "1 лет",
    expectSecondary: [
      { label: "В месяцах", value: "12 мес" },
      { label: "Дисконтированный срок", value: "1 лет" },
      { label: "Годовой поток", value: "500 000 ₽" },
      { label: "Возврат за простой срок", value: "500 000 ₽" },
    ],
  },
  {
    name: "нулевой поток отклоняется",
    inputs: { investment: 1000000, cashflow: 0, rate: 0 },
    expectPrimary: "—",
  },
  {
    name: "дисконтированный поток никогда не покроет отклоняется",
    inputs: { investment: 10000000, cashflow: 300000, rate: 20 },
    expectPrimary: "—",
  },
];
