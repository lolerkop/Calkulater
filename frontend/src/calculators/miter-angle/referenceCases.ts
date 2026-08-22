import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const miterAngleReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "прямой угол — классический ус",
    inputs: { corner: 90 },
    expectPrimary: "45 °",
    expectSecondary: [
      { label: "Угол на пиле от 90°", value: "45 °" },
      { label: "Угол стыка", value: "90 °" },
      { label: "Сумма двух резов", value: "90 °" },
    ],
  },
  {
    name: "тупой угол 135°",
    inputs: { corner: 135 },
    expectPrimary: "67,5 °",
    expectSecondary: [
      { label: "Угол на пиле от 90°", value: "22,5 °" },
      { label: "Угол стыка", value: "135 °" },
      { label: "Сумма двух резов", value: "135 °" },
    ],
  },
  {
    name: "предельно острый угол",
    inputs: { corner: 1 },
    expectPrimary: "0,5 °",
    expectSecondary: [
      { label: "Угол на пиле от 90°", value: "89,5 °" },
      { label: "Угол стыка", value: "1 °" },
      { label: "Сумма двух резов", value: "1 °" },
    ],
  },
  {
    name: "нулевой угол отклоняется",
    inputs: { corner: 0 },
    expectPrimary: "—",
  },
  {
    name: "развёрнутый угол отклоняется",
    inputs: { corner: 180 },
    expectPrimary: "—",
  },
];
