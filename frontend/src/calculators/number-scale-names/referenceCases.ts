import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const numberScaleNamesReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "25 лакхов в миллионы",
    inputs: { value: 25, from: "lakh", to: "million" },
    expectPrimary: "2,5",
    expectSecondary: [
      { label: "В единицах", value: "2 500 000" },
      { label: "В лакхах", value: "25" },
      { label: "В крорах", value: "0,25" },
    ],
  },
  {
    name: "3 крора в миллионы",
    inputs: { value: 3, from: "crore", to: "million" },
    expectPrimary: "30",
    expectSecondary: [
      { label: "В единицах", value: "30 000 000" },
      { label: "В лакхах", value: "300" },
      { label: "В крорах", value: "3" },
    ],
  },
  {
    name: "единица в единицу",
    inputs: { value: 1, from: "unit", to: "unit" },
    expectPrimary: "1",
    expectSecondary: [
      { label: "В единицах", value: "1" },
      { label: "В лакхах", value: "1,000·10^-5" },
      { label: "В крорах", value: "1,000·10^-7" },
    ],
  },
  {
    name: "нулевое значение отклоняется",
    inputs: { value: 0, from: "lakh", to: "million" },
    expectPrimary: "—",
  },
  {
    name: "отрицательное значение отклоняется",
    inputs: { value: -5, from: "lakh", to: "million" },
    expectPrimary: "—",
  },
];
