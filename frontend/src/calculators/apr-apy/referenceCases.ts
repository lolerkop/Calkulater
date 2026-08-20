import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const aprApyReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "номинальные 18 % при ежемесячном начислении",
    inputs: {"mode": "toApy", "periods": 12, "rate": 18},
    expectPrimary: "19,56%",
    expectSecondary: [{ label: "Номинальная ставка", value: "18,00%" }, { label: "Ставка за период", value: "1,50%" }, { label: "Периодов в году", value: "12" }, { label: "Множитель за год", value: "1,1956" }],
  },
  {
    name: "номинальные 7,5 % при ежеквартальном",
    inputs: {"mode": "toApy", "periods": 4, "rate": 7.5},
    expectPrimary: "7,71%",
    expectSecondary: [{ label: "Номинальная ставка", value: "7,50%" }, { label: "Ставка за период", value: "1,88%" }, { label: "Периодов в году", value: "4" }, { label: "Множитель за год", value: "1,0771" }],
  },
  {
    name: "ежегодное начисление — APY равен номиналу",
    inputs: {"mode": "toApy", "periods": 1, "rate": 9},
    expectPrimary: "9,00%",
    expectSecondary: [{ label: "Номинальная ставка", value: "9,00%" }, { label: "Ставка за период", value: "9,00%" }, { label: "Периодов в году", value: "1" }, { label: "Множитель за год", value: "1,09" }],
  },
  {
    name: "ноль периодов начисления отклоняется",
    inputs: {"mode": "toApy", "periods": 0, "rate": 10},
    expectPrimary: "—",
  },
];
