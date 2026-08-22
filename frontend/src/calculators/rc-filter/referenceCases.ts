import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   10 кОм и 100 нФ -> τ = 1 мс, fc = 159,15494 Гц
//   1 кОм и 1000 нФ -> та же τ и та же частота: произведение R·C одно
//   1 Ом и 1 нФ     -> τ = 10⁻⁹ с, fc = 159 154 943 Гц
export const rcFilterReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "10 кОм и 100 нФ",
    inputs: { r: 10000, c: 100 },
    expectPrimary: "159,15 Гц",
    expectSecondary: [
      { label: "Постоянная времени", value: "0,001 с" },
      { label: "Заряд почти до конца", value: "0,005 с" },
    ],
  },
  {
    name: "1 кОм и 1000 нФ дают то же произведение",
    inputs: { r: 1000, c: 1000 },
    expectPrimary: "159,15 Гц",
    expectSecondary: [
      { label: "Постоянная времени", value: "0,001 с" },
      { label: "Сопротивление", value: "1 000 Ом" },
    ],
  },
  {
    name: "граница: наносекундная цепь из 1 Ом и 1 нФ",
    inputs: { r: 1, c: 1 },
    expectPrimary: "159 154 943,09 Гц",
    expectSecondary: [{ label: "Постоянная времени", value: "1,000·10^-9 с" }],
  },
  {
    name: "нулевое сопротивление отклоняется",
    inputs: { r: 0, c: 100 },
    expectPrimary: "—",
  },
  {
    name: "нулевая ёмкость отклоняется",
    inputs: { r: 10000, c: 0 },
    expectPrimary: "—",
  },
];
