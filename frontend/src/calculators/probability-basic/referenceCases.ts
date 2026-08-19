import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную:
//   1 из 6            -> 0,1666666… -> 16,66667 %
//   противоположное   -> 1 − 1/6 = 0,8333333…
//   оба по 0,5        -> 0,25
//   хотя бы одно      -> 0,5 + 0,5 − 0,25 = 0,75  (а НЕ 1,0)
export const probabilityBasicReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "один исход из шести",
    inputs: {"mode": "single", "favourable": 1, "total": 6},
    expectPrimary: "0,1667",
    expectSecondary: [{ label: "В процентах", value: "16,667%" }],
  },
  {
    name: "противоположное событие: 5 из 6",
    inputs: {"mode": "complement", "favourable2": 1, "total2": 6},
    expectPrimary: "0,8333",
  },
  {
    name: "оба независимых события по 0,5",
    inputs: {"mode": "independentBoth", "p1": 0.5, "p2": 0.5},
    expectPrimary: "0,25",
  },
  {
    name: "хотя бы одно из двух по 0,5 — 0,75, а не 1",
    inputs: {"mode": "independentEither", "p3": 0.5, "p4": 0.5},
    expectPrimary: "0,75",
  },
  {
    name: "граница: достоверное событие",
    inputs: {"mode": "single", "favourable": 6, "total": 6},
    expectPrimary: "1",
    expectSecondary: [{ label: "В процентах", value: "100%" }],
  },
  {
    name: "благоприятных больше общего числа отклоняется",
    inputs: {"mode": "single", "favourable": 7, "total": 6},
    expectPrimary: "—",
  },
  {
    name: "нулевое число исходов отклоняется",
    inputs: {"mode": "single", "favourable": 1, "total": 0},
    expectPrimary: "—",
  },
];
