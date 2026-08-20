import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const emailMetricsReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "12 000 отправлено, 11 640 доставлено, 3 025 открыто, 412 кликов",
    inputs: {"clicked": 412, "delivered": 11640, "opened": 3025, "sent": 12000},
    expectPrimary: "97,00%",
    expectSecondary: [{ label: "Открываемость", value: "25,99%" }, { label: "Кликабельность", value: "3,54%" }, { label: "Кликов на открытие", value: "13,62%" }],
  },
  {
    name: "850 отправлено, 806 доставлено, 298 открыто, 61 клик",
    inputs: {"clicked": 61, "delivered": 806, "opened": 298, "sent": 850},
    expectPrimary: "94,82%",
    expectSecondary: [{ label: "Открываемость", value: "36,97%" }, { label: "Кликабельность", value: "7,57%" }, { label: "Кликов на открытие", value: "20,47%" }],
  },
  {
    name: "открыто, но ни одного клика",
    inputs: {"clicked": 0, "delivered": 4900, "opened": 1200, "sent": 5000},
    expectPrimary: "98,00%",
    expectSecondary: [{ label: "Открываемость", value: "24,49%" }, { label: "Кликабельность", value: "0,00%" }, { label: "Кликов на открытие", value: "0,00%" }],
  },
  {
    name: "доставлено больше, чем отправлено — отклоняется",
    inputs: {"clicked": 0, "delivered": 200, "opened": 0, "sent": 100},
    expectPrimary: "—",
  },
];
