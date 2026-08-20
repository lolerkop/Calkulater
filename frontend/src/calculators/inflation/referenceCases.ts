import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const inflationReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "100 000 при 8 % за 10 лет",
    inputs: { "amount": 100000, "ratePct": 8, "years": 10 },
    expectPrimary: "46 319,35 ₽",
    expectSecondary: [{ label: "Столько же в будущих деньгах", value: "215 892,50 ₽" }, { label: "Потеряно покупательной способности", value: "53 680,65 ₽" }, { label: "Доля потери", value: "53,68%" }],
  },
  {
    name: "1 000 000 при 4,5 % за 25 лет",
    inputs: { "amount": 1000000, "ratePct": 4.5, "years": 25 },
    expectPrimary: "332 730,60 ₽",
    expectSecondary: [{ label: "Столько же в будущих деньгах", value: "3 005 434,46 ₽" }, { label: "Потеряно покупательной способности", value: "667 269,40 ₽" }, { label: "Доля потери", value: "66,73%" }],
  },
  {
    name: "нулевая инфляция — покупательная способность не меняется",
    inputs: { "amount": 50000, "ratePct": 0, "years": 5 },
    expectPrimary: "50 000,00 ₽",
    expectSecondary: [{ label: "Столько же в будущих деньгах", value: "50 000,00 ₽" }, { label: "Потеряно покупательной способности", value: "0,00 ₽" }, { label: "Доля потери", value: "0,00%" }],
  },
  {
    name: "нулевой срок отклоняется",
    inputs: { "amount": 100000, "ratePct": 8, "years": 0 },
    expectPrimary: "—",
  },
];
