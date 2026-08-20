import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const earlyRepaymentReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "3 000 000 под 18 % на 20 лет, доплата 10 000",
    inputs: {"amount": 3000000, "extra": 10000, "rate": 18, "years": 20},
    expectPrimary: "5 039 148,29 ₽",
    expectSecondary: [{ label: "Платёж по графику", value: "46 299,35 ₽" }, { label: "Платежей вместо графика", value: "108" }, { label: "Платежей по графику", value: "240" }, { label: "Всего выплат", value: "6 072 694,68 ₽" }],
  },
  {
    name: "1 200 000 под 12 % на 7 лет, доплата 5 000",
    inputs: {"amount": 1200000, "extra": 5000, "rate": 12, "years": 7},
    expectPrimary: "166 166,99 ₽",
    expectSecondary: [{ label: "Платёж по графику", value: "21 183,28 ₽" }, { label: "Платежей вместо графика", value: "62" }, { label: "Платежей по графику", value: "84" }, { label: "Всего выплат", value: "1 613 228,48 ₽" }],
  },
  {
    name: "без доплаты — срок не меняется",
    inputs: {"amount": 800000, "extra": 0, "rate": 15, "years": 5},
    expectPrimary: "0,00 ₽",
    expectSecondary: [{ label: "Платёж по графику", value: "19 031,94 ₽" }, { label: "Платежей вместо графика", value: "60" }, { label: "Платежей по графику", value: "60" }, { label: "Всего выплат", value: "1 141 916,64 ₽" }],
  },
  {
    name: "нулевой срок отклоняется",
    inputs: {"amount": 100000, "extra": 0, "rate": 10, "years": 0},
    expectPrimary: "—",
  },
];
