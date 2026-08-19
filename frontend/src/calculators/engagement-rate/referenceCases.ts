import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную:
//   450 / 9000 = 5,00 %        ·  37 / 1240 = 2,9839 % -> 2,98 %
//   120 / 4000 = 3,00 % (база — подписчики)
export const engagementRateReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "450 реакций при охвате 9000",
    inputs: {"engagements": 450, "base": "reach", "reach": 9000},
    expectPrimary: "5,00%",
    expectSecondary: [{ label: "База расчёта", value: "охват" }],
  },
  {
    name: "37 реакций при охвате 1240",
    inputs: {"engagements": 37, "base": "reach", "reach": 1240},
    expectPrimary: "2,98%",
  },
  {
    name: "база — подписчики: 120 из 4000",
    inputs: {"engagements": 120, "base": "followers", "followers": 4000},
    expectPrimary: "3,00%",
    expectSecondary: [{ label: "База расчёта", value: "подписчики" }],
  },
  {
    name: "граница: без реакций вовлечённость нулевая",
    inputs: {"engagements": 0, "base": "reach", "reach": 1000},
    expectPrimary: "0,00%",
  },
  {
    name: "нулевой охват отклоняется",
    inputs: {"engagements": 100, "base": "reach", "reach": 0},
    expectPrimary: "—",
  },
];
