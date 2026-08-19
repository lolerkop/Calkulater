import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из p = m · v:
//   3 · 4 = 12 кг·м/с   ·  30 / 6 = 5 м/с   ·  18 / 9 = 2 кг
//   кинетическая энергия показана как p·v/2: 12 · 4 / 2 = 24 Дж
export const momentumReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "импульс по массе и скорости: 3 · 4 = 12",
    inputs: {"mode": "p", "m": 3, "v": 4},
    expectPrimary: "12 кг·м/с",
    expectSecondary: [{ label: "Кинетическая энергия", value: "24 Дж" }],
  },
  {
    name: "скорость по импульсу и массе: 30 / 6 = 5",
    inputs: {"mode": "v", "p": 30, "m2": 6},
    expectPrimary: "5 м/с",
  },
  {
    name: "масса по импульсу и скорости: 18 / 9 = 2",
    inputs: {"mode": "m", "p2": 18, "v2": 9},
    expectPrimary: "2 кг",
  },
  {
    name: "граница: покоящееся тело импульса не имеет",
    inputs: {"mode": "p", "m": 1000, "v": 0},
    expectPrimary: "0 кг·м/с",
  },
  {
    name: "нулевая скорость при поиске массы отклоняется",
    inputs: {"mode": "m", "p2": 18, "v2": 0},
    expectPrimary: "—",
  },
];
