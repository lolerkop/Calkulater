import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   10 кВт при cosφ 0,8 -> 12,5 кВА, реактив √(156,25 − 100) = 7,5 квар
//   12,5 кВА при cosφ 0,8 -> 10 кВт, тот же реактив с другой стороны
//   cosφ = 1 -> полная равна активной, реактива нет вовсе
export const kvaKwReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "10 кВт при коэффициенте мощности 0,8",
    inputs: { mode: 'kva', kw: 10, kva: 0, pf: 0.8 },
    expectPrimary: "12,5 кВА",
    expectSecondary: [
      { label: "Реактивная мощность", value: "7,5 квар" },
      { label: "Активная мощность", value: "10 кВт" },
    ],
  },
  {
    name: "обратная задача: активная мощность из 12,5 кВА",
    inputs: { mode: 'kw', kw: 0, kva: 12.5, pf: 0.8 },
    expectPrimary: "10 кВт",
    expectSecondary: [
      { label: "Реактивная мощность", value: "7,5 квар" },
      { label: "Полная мощность", value: "12,5 кВА" },
    ],
  },
  {
    name: "граница: при коэффициенте 1 реактива нет",
    inputs: { mode: 'kva', kw: 10, kva: 0, pf: 1 },
    expectPrimary: "10 кВА",
    expectSecondary: [{ label: "Реактивная мощность", value: "0 квар" }],
  },
  {
    name: "нулевой коэффициент мощности отклоняется",
    inputs: { mode: 'kva', kw: 10, kva: 0, pf: 0 },
    expectPrimary: "—",
  },
  {
    name: "коэффициент мощности больше единицы отклоняется",
    inputs: { mode: 'kva', kw: 10, kva: 0, pf: 1.2 },
    expectPrimary: "—",
  },
];
