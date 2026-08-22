import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const luggageLinearReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "ручная кладь в пределах нормы",
    inputs: { l: 55, w: 40, h: 23, limit: 158 },
    expectPrimary: "118 см",
    expectSecondary: [
      { label: "Запас до предела", value: "40 см" },
      { label: "В дюймах", value: "46,457 дюйма" },
      { label: "Объём коробки", value: "50,6 л" },
    ],
  },
  {
    name: "чемодан сверх нормы",
    inputs: { l: 75, w: 50, h: 40, limit: 158 },
    expectPrimary: "165 см",
    expectSecondary: [
      { label: "Запас до предела", value: "-7 см" },
      { label: "В дюймах", value: "64,961 дюйма" },
      { label: "Объём коробки", value: "150 л" },
    ],
  },
  {
    name: "ровно по пределу",
    inputs: { l: 78, w: 50, h: 30, limit: 158 },
    expectPrimary: "158 см",
    expectSecondary: [
      { label: "Запас до предела", value: "0 см" },
      { label: "В дюймах", value: "62,205 дюйма" },
      { label: "Объём коробки", value: "117 л" },
    ],
  },
  {
    name: "нулевая сторона отклоняется",
    inputs: { l: 0, w: 40, h: 23, limit: 158 },
    expectPrimary: "—",
  },
  {
    name: "нулевой предел отклоняется",
    inputs: { l: 55, w: 40, h: 23, limit: 0 },
    expectPrimary: "—",
  },
];
