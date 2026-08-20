import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const mrrArrReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "420 подписчиков по 1 490 ₽, рост 4 %",
    inputs: { "subscribers": 420, "arpuMonth": 1490, "growthPct": 4 },
    expectPrimary: "625 800,00 ₽",
    expectSecondary: [{ label: "ARR", value: "7 509 600,00 ₽" }, { label: "MRR через месяц", value: "650 832,00 ₽" }, { label: "Прирост за месяц", value: "25 032,00 ₽" }],
  },
  {
    name: "1 850 подписчиков по 690 ₽, рост 7,5 %",
    inputs: { "subscribers": 1850, "arpuMonth": 690, "growthPct": 7.5 },
    expectPrimary: "1 276 500,00 ₽",
    expectSecondary: [{ label: "ARR", value: "15 318 000,00 ₽" }, { label: "MRR через месяц", value: "1 372 237,50 ₽" }, { label: "Прирост за месяц", value: "95 737,50 ₽" }],
  },
  {
    name: "нулевой рост",
    inputs: { "subscribers": 300, "arpuMonth": 2000, "growthPct": 0 },
    expectPrimary: "600 000,00 ₽",
    expectSecondary: [{ label: "ARR", value: "7 200 000,00 ₽" }, { label: "MRR через месяц", value: "600 000,00 ₽" }, { label: "Прирост за месяц", value: "0,00 ₽" }],
  },
  {
    name: "нулевой ARPU отклоняется",
    inputs: { "subscribers": 420, "arpuMonth": 0, "growthPct": 4 },
    expectPrimary: "—",
  },
];
