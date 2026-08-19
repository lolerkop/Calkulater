import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из p = F / A:
//   1000 / 2 = 500 Па        ·  2000 / 100000 = 0,02 м²
//   101325 · 1 = 101325 Н    ·  1 / 10⁻⁶ = 10⁶ Па
export const pressureReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "давление по силе и площади: 1000 / 2 = 500",
    inputs: {"mode": "p", "F": 1000, "A": 2},
    expectPrimary: "500 Па",
  },
  {
    name: "площадь по силе и давлению: 2000 / 100000 = 0,02",
    inputs: {"mode": "A", "F2": 2000, "p2": 100000},
    expectPrimary: "0,02 м²",
  },
  {
    name: "одна атмосфера на квадратный метр",
    inputs: {"mode": "F", "p": 101325, "A2": 1},
    expectPrimary: "101 325 Н",
    expectSecondary: [{ label: "В атмосферах", value: "1 атм" }],
  },
  {
    name: "граница: игольное остриё даёт мегапаскаль",
    inputs: {"mode": "p", "F": 1, "A": 1e-06},
    expectPrimary: "1 000 000 Па",
  },
  {
    name: "нулевая площадь отклоняется",
    inputs: {"mode": "p", "F": 100, "A": 0},
    expectPrimary: "—",
  },
];
