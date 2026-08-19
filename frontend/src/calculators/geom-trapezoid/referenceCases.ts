import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из S = ((a+b)/2)·h:
//   10 и 6 при h = 4  -> средняя линия 8,   S = 32
//   7,5 и 2,5 при h=3 -> средняя линия 5,   S = 15
//   боковые 5 и 5     -> P = 10 + 6 + 5 + 5 = 26
export const geomTrapezoidReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "основания 10 и 6 при высоте 4",
    inputs: {"unit": "m", "a": 10, "b": 6, "h": 4},
    expectPrimary: "32 м²",
    expectSecondary: [{ label: "Средняя линия", value: "8 м" }],
  },
  {
    name: "дробные основания 7,5 и 2,5 при высоте 3",
    inputs: {"unit": "m", "a": 7.5, "b": 2.5, "h": 3},
    expectPrimary: "15 м²",
    expectSecondary: [{ label: "Средняя линия", value: "5 м" }],
  },
  {
    name: "с боковыми сторонами появляется периметр",
    inputs: {"unit": "m", "a": 10, "b": 6, "h": 4, "c": 5, "d": 5},
    expectPrimary: "32 м²",
    expectSecondary: [{ label: "Периметр", value: "26 м" }],
  },
  {
    name: "граница: равные основания дают параллелограмм",
    inputs: {"unit": "m", "a": 5, "b": 5, "h": 2},
    expectPrimary: "10 м²",
    expectSecondary: [{ label: "Средняя линия", value: "5 м" }],
  },
  {
    name: "нулевая высота отклоняется",
    inputs: {"unit": "m", "a": 10, "b": 6, "h": 0},
    expectPrimary: "—",
  },
];
