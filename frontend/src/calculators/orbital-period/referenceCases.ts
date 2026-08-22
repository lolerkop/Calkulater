import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const orbitalPeriodReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "низкая околоземная орбита",
    inputs: { mass24: 5.972, radiusKm: 6771 },
    expectPrimary: "5 544,93 с",
    expectSecondary: [
      { label: "В часах", value: "1,54 ч" },
      { label: "Орбитальная скорость", value: "7 672,49 м/с" },
      { label: "Оборотов в сутки", value: "15,582" },
    ],
  },
  {
    name: "геостационар",
    inputs: { mass24: 5.972, radiusKm: 42164 },
    expectPrimary: "86 164,79 с",
    expectSecondary: [
      { label: "В часах", value: "23,935 ч" },
      { label: "Орбитальная скорость", value: "3 074,62 м/с" },
      { label: "Оборотов в сутки", value: "1,003" },
    ],
  },
  {
    name: "единичная масса и тысяча километров",
    inputs: { mass24: 1, radiusKm: 1000 },
    expectPrimary: "769,09 с",
    expectSecondary: [
      { label: "В часах", value: "0,2136 ч" },
      { label: "Орбитальная скорость", value: "8 169,64 м/с" },
      { label: "Оборотов в сутки", value: "112,34" },
    ],
  },
  {
    name: "нулевая масса отклоняется",
    inputs: { mass24: 0, radiusKm: 6771 },
    expectPrimary: "—",
  },
  {
    name: "нулевой радиус отклоняется",
    inputs: { mass24: 5.972, radiusKm: 0 },
    expectPrimary: "—",
  },
];
