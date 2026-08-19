import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную из ρ = m / V:
//   1000 / 1 = 1000 кг/м³ (вода)      ·  7850 / 7850 = 1 м³ (сталь)
//   2700 · 0,5 = 1350 кг (алюминий)   ·  10⁻⁶ / 10⁻⁶ = 1 кг/м³
export const densityReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "вода: 1000 кг в кубометре",
    inputs: {"mode": "rho", "m": 1000, "V": 1},
    expectPrimary: "1 000 кг/м³",
    expectSecondary: [{ label: "В граммах на кубический сантиметр", value: "1 г/см³" }],
  },
  {
    name: "сталь: 7850 кг при плотности 7850",
    inputs: {"mode": "V", "m2": 7850, "rho2": 7850},
    expectPrimary: "1 м³",
  },
  {
    name: "алюминий: 2700 · 0,5 = 1350 кг",
    inputs: {"mode": "m", "rho": 2700, "V2": 0.5},
    expectPrimary: "1 350 кг",
  },
  {
    name: "граница: микроскопические масса и объём дают 1 кг/м³",
    inputs: {"mode": "rho", "m": 1e-06, "V": 1e-06},
    expectPrimary: "1 кг/м³",
  },
  {
    name: "нулевой объём отклоняется",
    inputs: {"mode": "rho", "m": 10, "V": 0},
    expectPrimary: "—",
  },
];
