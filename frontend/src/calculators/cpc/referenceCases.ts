import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const cpcReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "бюджет 36 000, 1 450 кликов, 92 000 показов",
    inputs: {"clicks": 1450, "cost": 36000, "impressions": 92000},
    expectPrimary: "24,83 ₽",
    expectSecondary: [{ label: "Кликов", value: "1 450" }, { label: "Бюджет", value: "36 000,00 ₽" }, { label: "CPM", value: "391,30 ₽" }, { label: "Кликабельность", value: "1,58%" }],
  },
  {
    name: "бюджет 5 200, 260 кликов, показы не заданы",
    inputs: {"clicks": 260, "cost": 5200, "impressions": 0},
    expectPrimary: "20,00 ₽",
    expectSecondary: [{ label: "Кликов", value: "260" }, { label: "Бюджет", value: "5 200,00 ₽" }],
  },
  {
    name: "один клик",
    inputs: {"clicks": 1, "cost": 750, "impressions": 4000},
    expectPrimary: "750,00 ₽",
    expectSecondary: [{ label: "Кликов", value: "1" }, { label: "Бюджет", value: "750,00 ₽" }, { label: "CPM", value: "187,50 ₽" }, { label: "Кликабельность", value: "0,03%" }],
  },
  {
    name: "нулевое число кликов отклоняется",
    inputs: {"clicks": 0, "cost": 100, "impressions": 0},
    expectPrimary: "—",
  },
];
