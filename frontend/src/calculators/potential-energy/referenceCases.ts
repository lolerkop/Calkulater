import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из E = mgh при g = 9,80665:
//   5 · 9,80665 · 10 = 490,33250 Дж
//   490,3325 / (5 · 9,80665) = 10 м
//   98,0665 / (9,80665 · 2) = 5 кг
export const potentialEnergyReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "энергия груза 5 кг на высоте 10 м",
    inputs: {"mode": "E", "m": 5, "h": 10},
    expectPrimary: "490,33 Дж",
    expectSecondary: [{ label: "Ускорение свободного падения", value: "9,807 м/с²" }],
  },
  {
    name: "высота по энергии и массе",
    inputs: {"mode": "h", "E": 490.3325, "m2": 5},
    expectPrimary: "10 м",
  },
  {
    name: "масса по энергии и высоте",
    inputs: {"mode": "m", "E2": 98.0665, "h2": 2},
    expectPrimary: "5 кг",
  },
  {
    name: "граница: на нулевой высоте энергии нет",
    inputs: {"mode": "E", "m": 1, "h": 0},
    expectPrimary: "0 Дж",
  },
  {
    name: "нулевая высота при поиске массы отклоняется",
    inputs: {"mode": "m", "E2": 10, "h2": 0},
    expectPrimary: "—",
  },
];
