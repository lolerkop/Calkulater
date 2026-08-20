import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const overtimeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "ставка 650, 160 обычных, 14 сверхурочных, коэффициент 1,5",
    inputs: {"multiplier": 1.5, "normalHours": 160, "overtimeHours": 14, "rate": 650},
    expectPrimary: "117 650,00 ₽",
    expectSecondary: [{ label: "Оплата обычных часов", value: "104 000,00 ₽" }, { label: "Оплата сверхурочных", value: "13 650,00 ₽" }, { label: "Средняя ставка за час", value: "676,15 ₽" }],
  },
  {
    name: "ставка 1 200, 40 обычных, 6 сверхурочных, коэффициент 2",
    inputs: {"multiplier": 2, "normalHours": 40, "overtimeHours": 6, "rate": 1200},
    expectPrimary: "62 400,00 ₽",
    expectSecondary: [{ label: "Оплата обычных часов", value: "48 000,00 ₽" }, { label: "Оплата сверхурочных", value: "14 400,00 ₽" }, { label: "Средняя ставка за час", value: "1 356,52 ₽" }],
  },
  {
    name: "без сверхурочных",
    inputs: {"multiplier": 1.5, "normalHours": 168, "overtimeHours": 0, "rate": 800},
    expectPrimary: "134 400,00 ₽",
    expectSecondary: [{ label: "Оплата обычных часов", value: "134 400,00 ₽" }, { label: "Оплата сверхурочных", value: "0,00 ₽" }, { label: "Средняя ставка за час", value: "800,00 ₽" }],
  },
  {
    name: "коэффициент меньше единицы отклоняется",
    inputs: {"multiplier": 0.5, "normalHours": 10, "overtimeHours": 1, "rate": 100},
    expectPrimary: "—",
  },
];
