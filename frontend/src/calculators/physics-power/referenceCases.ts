import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из P = W / t:
//   1000 / 10 = 100 Вт   ·  600 / 50 = 12 с   ·  75 · 4 = 300 Дж
//   1 / 10⁻⁶ = 10⁶ Вт    ·  100 / 735,49875 = 0,13596… л.с.
export const physicsPowerReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "мощность по работе и времени: 1000 / 10 = 100",
    inputs: {"mode": "P", "W": 1000, "t": 10},
    expectPrimary: "100 Вт",
    expectSecondary: [{ label: "В метрических лошадиных силах", value: "0,136 л.с." }],
  },
  {
    name: "время по работе и мощности: 600 / 50 = 12",
    inputs: {"mode": "t", "W2": 600, "P": 50},
    expectPrimary: "12 с",
  },
  {
    name: "работа по мощности и времени: 75 · 4 = 300",
    inputs: {"mode": "W", "P2": 75, "t2": 4},
    expectPrimary: "300 Дж",
  },
  {
    name: "граница: работа за микросекунду даёт мегаватт",
    inputs: {"mode": "P", "W": 1, "t": 1e-06},
    expectPrimary: "1 000 000 Вт",
  },
  {
    name: "нулевое время отклоняется",
    inputs: {"mode": "P", "W": 1000, "t": 0},
    expectPrimary: "—",
  },
];
