import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   55 + 45/60 + 30/3600 = 55,758333… -> показ 55,7583
//   |−37,6173| -> 37°, (0,6173·60) = 37,038′ -> 37′, 0,038·60 = 2,28″
//   180° 0′ 0″ — ровно предел области
export const coordinateConvertReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "55°45′30″ северной широты в десятичные",
    inputs: { mode: 'toDecimal', deg: 55, minutes: 45, seconds: 30, decimal: 0, hemisphere: 'N' },
    expectPrimary: "55,7583°",
    expectSecondary: [
      { label: "Градусы, минуты, секунды", value: "55° 45′ 30″" },
      { label: "Полушарие", value: "северное или восточное" },
    ],
  },
  {
    name: "−37,6173 в градусы, минуты и секунды",
    inputs: { mode: 'toDms', deg: 0, minutes: 0, seconds: 0, decimal: -37.6173, hemisphere: 'S' },
    expectPrimary: "37° 37′ 2,28″",
    expectSecondary: [
      { label: "Десятичные градусы", value: "-37,6173°" },
      { label: "Полушарие", value: "южное или западное" },
    ],
  },
  {
    name: "граница: ровно 180 градусов",
    inputs: { mode: 'toDecimal', deg: 180, minutes: 0, seconds: 0, decimal: 0, hemisphere: 'N' },
    expectPrimary: "180°",
    expectSecondary: [{ label: "Градусы, минуты, секунды", value: "180° 0′ 0″" }],
  },
  {
    name: "шестьдесят минут отклоняются",
    inputs: { mode: 'toDecimal', deg: 10, minutes: 60, seconds: 0, decimal: 0, hemisphere: 'N' },
    expectPrimary: "—",
  },
  {
    name: "больше 180 градусов в десятичных отклоняется",
    inputs: { mode: 'toDms', deg: 0, minutes: 0, seconds: 0, decimal: 200, hemisphere: 'N' },
    expectPrimary: "—",
  },
];
