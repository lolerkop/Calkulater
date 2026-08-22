import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const engineDisplacementReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "четыре цилиндра 82×86",
    inputs: { bore: 82, stroke: 86, cylinders: 4 },
    expectPrimary: "1 816,67 см³",
    expectSecondary: [
      { label: "Объём одного цилиндра", value: "454,17 см³" },
      { label: "В литрах", value: "1,817 л" },
      { label: "Отношение хода к диаметру", value: "1,049" },
    ],
  },
  {
    name: "шесть цилиндров 96×92",
    inputs: { bore: 96, stroke: 92, cylinders: 6 },
    expectPrimary: "3 995,5 см³",
    expectSecondary: [
      { label: "Объём одного цилиндра", value: "665,92 см³" },
      { label: "В литрах", value: "3,996 л" },
      { label: "Отношение хода к диаметру", value: "0,9583" },
    ],
  },
  {
    name: "один цилиндр 50×50",
    inputs: { bore: 50, stroke: 50, cylinders: 1 },
    expectPrimary: "98,175 см³",
    expectSecondary: [
      { label: "Объём одного цилиндра", value: "98,175 см³" },
      { label: "В литрах", value: "0,0982 л" },
      { label: "Отношение хода к диаметру", value: "1" },
    ],
  },
  {
    name: "нулевой диаметр отклоняется",
    inputs: { bore: 0, stroke: 86, cylinders: 4 },
    expectPrimary: "—",
  },
  {
    name: "ноль цилиндров отклоняется",
    inputs: { bore: 82, stroke: 86, cylinders: 0 },
    expectPrimary: "—",
  },
];
