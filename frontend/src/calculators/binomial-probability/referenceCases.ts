import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15B:
//   C(10,3) = 120; 120 · 0,5³ · 0,5⁷ = 120/1024 = 0,1171875
//   n = 20, p = 0,3: сумма C(20,i)·0,3ⁱ·0,7²⁰⁻ⁱ по i = 0…5
//   p = 1 и k = n: единственный исход, вероятность 1, отклонение 0
export const binomialProbabilityReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "ровно 3 успеха из 10 при p = 0,5",
    inputs: { "n": 10, "k": 3, "p": 0.5, "mode": "exactly" },
    expectPrimary: "0,1172",
    expectSecondary: [{ label: "В процентах", value: "11,72%" }, { label: "Не более k", value: "0,1719" }, { label: "Не менее k", value: "0,9453" }, { label: "Число сочетаний", value: "120" }],
  },
  {
    name: "не более 5 успехов из 20 при p = 0,3",
    inputs: { "n": 20, "k": 5, "p": 0.3, "mode": "atMost" },
    expectPrimary: "0,4164",
    expectSecondary: [{ label: "Вероятность ровно k", value: "0,1789" }, { label: "Математическое ожидание", value: "6" }, { label: "Стандартное отклонение", value: "2,0494" }],
  },
  {
    name: "граница: p = 1 и k = n — событие достоверно",
    inputs: { "n": 10, "k": 10, "p": 1, "mode": "exactly" },
    expectPrimary: "1",
    expectSecondary: [{ label: "В процентах", value: "100,00%" }, { label: "Стандартное отклонение", value: "0" }],
  },
  {
    name: "граница: p = 0 и k = 0 — единственный возможный исход",
    inputs: { "n": 8, "k": 0, "p": 0, "mode": "exactly" },
    expectPrimary: "1",
    expectSecondary: [{ label: "Математическое ожидание", value: "0" }],
  },
  {
    name: "число успехов больше числа испытаний отклоняется",
    inputs: { "n": 5, "k": 7, "p": 0.5, "mode": "exactly" },
    expectPrimary: "—",
  },
];
