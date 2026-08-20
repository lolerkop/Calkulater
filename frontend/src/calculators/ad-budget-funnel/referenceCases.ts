import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const adBudgetFunnelReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "бюджет 150 000, CPC 24, конверсия 2,4 %, чек 4 900",
    inputs: {"aov": 4900, "budget": 150000, "cpc": 24, "crPct": 2.4},
    expectPrimary: "735 000,00 ₽",
    expectSecondary: [{ label: "Кликов", value: "6 250" }, { label: "Заказов", value: "150" }, { label: "ROAS", value: "4,9" }, { label: "Цена заказа", value: "1 000,00 ₽" }],
  },
  {
    name: "бюджет 40 000, CPC 8,5, конверсия 1,2 %, чек 12 000",
    inputs: {"aov": 12000, "budget": 40000, "cpc": 8.5, "crPct": 1.2},
    expectPrimary: "677 647,06 ₽",
    expectSecondary: [{ label: "Кликов", value: "4 705,88" }, { label: "Заказов", value: "56,471" }, { label: "ROAS", value: "16,9412" }, { label: "Цена заказа", value: "708,33 ₽" }],
  },
  {
    name: "конверсия 100 %",
    inputs: {"aov": 700, "budget": 10000, "cpc": 50, "crPct": 100},
    expectPrimary: "140 000,00 ₽",
    expectSecondary: [{ label: "Кликов", value: "200" }, { label: "Заказов", value: "200" }, { label: "ROAS", value: "14" }, { label: "Цена заказа", value: "50,00 ₽" }],
  },
  {
    name: "нулевой CPC отклоняется",
    inputs: {"aov": 100, "budget": 1000, "cpc": 0, "crPct": 2},
    expectPrimary: "—",
  },
];
