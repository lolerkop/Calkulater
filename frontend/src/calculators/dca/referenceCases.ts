import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
//   за период uᵢ = взнос/цена, цена растёт на g; средняя = вложено/Σu
export const dcaReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "10 000 ₽ в месяц 12 месяцев, рост цены 2 %",
    inputs: { "monthly": 10000, "months": 12, "priceGrowthPct": 2, "startPrice": 5000 },
    expectPrimary: "134 120,90 ₽",
    expectSecondary: [{ label: "Вложено всего", value: "120 000,00 ₽" }, { label: "Куплено единиц", value: "21,574" }, { label: "Средняя цена", value: "5 562,33 ₽" }, { label: "Результат", value: "14 120,90 ₽" }],
  },
  {
    name: "5 000 ₽ 24 месяца, падение цены 1 %",
    inputs: { "monthly": 5000, "months": 24, "priceGrowthPct": -1, "startPrice": 200 },
    expectPrimary: "107 160,93 ₽",
    expectSecondary: [{ label: "Вложено всего", value: "120 000,00 ₽" }, { label: "Куплено единиц", value: "675,14" }, { label: "Средняя цена", value: "177,74 ₽" }, { label: "Результат", value: "-12 839,07 ₽" }],
  },
  {
    name: "цена не меняется — средняя равна цене",
    inputs: { "monthly": 8000, "months": 6, "priceGrowthPct": 0, "startPrice": 1000 },
    expectPrimary: "48 000,00 ₽",
    expectSecondary: [{ label: "Вложено всего", value: "48 000,00 ₽" }, { label: "Куплено единиц", value: "48" }, { label: "Средняя цена", value: "1 000,00 ₽" }, { label: "Результат", value: "0,00 ₽" }],
  },
  {
    name: "нулевой взнос отклоняется",
    inputs: { "monthly": 0, "months": 12, "priceGrowthPct": 2, "startPrice": 5000 },
    expectPrimary: "—",
  },
];
