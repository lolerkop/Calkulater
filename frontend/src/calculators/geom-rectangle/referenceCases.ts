import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из S = a·b, P = 2(a+b), d = √(a²+b²):
//   8 × 3   -> S = 24, P = 22, d = √73 = 8,5440037…
//   2,5 × 4 -> S = 10, P = 13
//   S = 30 при a = 6 -> b = 5, P = 22
export const geomRectangleReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "по сторонам: 8 × 3 = 24",
    inputs: {"mode": "sides", "unit": "cm", "a": 8, "b": 3},
    expectPrimary: "24 см²",
    expectSecondary: [{ label: "Периметр", value: "22 см" }, { label: "Диагональ", value: "8,544 см" }],
  },
  {
    name: "дробные стороны: 2,5 × 4 = 10",
    inputs: {"mode": "sides", "unit": "m", "a": 2.5, "b": 4},
    expectPrimary: "10 м²",
    expectSecondary: [{ label: "Периметр", value: "13 м" }],
  },
  {
    name: "по площади и стороне: 30 / 6 = 5",
    inputs: {"mode": "areaSide", "unit": "m", "area": 30, "a": 6},
    expectPrimary: "30 м²",
    expectSecondary: [{ label: "Вторая сторона", value: "5 м" }, { label: "Периметр", value: "22 м" }],
  },
  {
    name: "граница: равные стороны дают квадрат",
    inputs: {"mode": "sides", "unit": "cm", "a": 1, "b": 1},
    expectPrimary: "1 см²",
    expectSecondary: [{ label: "Периметр", value: "4 см" }],
  },
  {
    name: "нулевая сторона отклоняется",
    inputs: {"mode": "sides", "unit": "cm", "a": 0, "b": 5},
    expectPrimary: "—",
  },
];
