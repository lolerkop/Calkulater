import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из E = ½mv²:
//   ½ · 2 · 3² = 9 Дж      ·  √(2·100 / 8) = √25 = 5 м/с
//   2 · 50 / 10² = 1 кг    ·  при v = 0 энергия равна нулю
export const kineticEnergyReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "энергия по массе и скорости: ½·2·9 = 9",
    inputs: {"mode": "E", "m": 2, "v": 3},
    expectPrimary: "9 Дж",
  },
  {
    name: "скорость по энергии и массе: √(200/8) = 5",
    inputs: {"mode": "v", "E": 100, "m2": 8},
    expectPrimary: "5 м/с",
    expectSecondary: [{ label: "Кинетическая энергия", value: "100 Дж" }],
  },
  {
    name: "масса по энергии и скорости: 100/100 = 1",
    inputs: {"mode": "m", "E2": 50, "v2": 10},
    expectPrimary: "1 кг",
  },
  {
    name: "граница: покоящееся тело не несёт энергии",
    inputs: {"mode": "E", "m": 1, "v": 0},
    expectPrimary: "0 Дж",
  },
  {
    name: "нулевая скорость при поиске массы отклоняется",
    inputs: {"mode": "m", "E2": 50, "v2": 0},
    expectPrimary: "—",
  },
];
