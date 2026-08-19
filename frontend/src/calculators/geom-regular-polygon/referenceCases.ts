import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из S = n·a² / (4·tg(π/n)):
//   n=6, a=2 -> 24 / (4·0,5773503) = 10,3923048…, внутренний угол 120°
//   n=3, a=2 -> 12 / (4·1,7320508) = 1,7320508…,  внутренний угол 60°
//   n=4, a=5 -> 100 / (4·1)        = 25,          внутренний угол 90°
export const geomRegularPolygonReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "шестиугольник со стороной 2",
    inputs: {"unit": "cm", "n": 6, "side": 2},
    expectPrimary: "10,392 см²",
    expectSecondary: [{ label: "Периметр", value: "12 см" }, { label: "Внутренний угол", value: "120°" }],
  },
  {
    name: "равносторонний треугольник со стороной 2",
    inputs: {"unit": "cm", "n": 3, "side": 2},
    expectPrimary: "1,732 см²",
    expectSecondary: [{ label: "Внутренний угол", value: "60°" }],
  },
  {
    name: "квадрат как частный случай: 4 стороны по 5",
    inputs: {"unit": "m", "n": 4, "side": 5},
    expectPrimary: "25 м²",
    expectSecondary: [{ label: "Периметр", value: "20 м" }, { label: "Внутренний угол", value: "90°" }],
  },
  {
    name: "граница: минимальные три стороны по 0,5",
    inputs: {"unit": "m", "n": 3, "side": 0.5},
    expectPrimary: "0,1083 м²",
    expectSecondary: [{ label: "Периметр", value: "1,5 м" }],
  },
  {
    name: "две стороны отклоняются",
    inputs: {"unit": "cm", "n": 2, "side": 5},
    expectPrimary: "—",
  },
  {
    name: "нулевая сторона отклоняется",
    inputs: {"unit": "cm", "n": 6, "side": 0},
    expectPrimary: "—",
  },
];
