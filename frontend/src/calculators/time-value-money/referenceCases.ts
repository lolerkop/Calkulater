import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const timeValueMoneyReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "100 000 под 12 % на 5 лет, ежемесячно",
    inputs: { "mode": "fv", "amount": 100000, "rate": 12, "years": 5, "compounding": "month" },
    expectPrimary: "181 669,67 ₽",
    expectSecondary: [{ label: "Множитель роста", value: "1,8167" }, { label: "Эффективная годовая ставка", value: "12,68%" }, { label: "Периодов начисления", value: "60" }],
  },
  {
    name: "дисконт 500 000 через 8 лет под 9 % годовых",
    inputs: { "mode": "pv", "amount": 500000, "rate": 9, "years": 8, "compounding": "year" },
    expectPrimary: "250 933,14 ₽",
    expectSecondary: [{ label: "Множитель роста", value: "1,9926" }, { label: "Эффективная годовая ставка", value: "9,00%" }, { label: "Периодов начисления", value: "8" }],
  },
  {
    name: "нулевая ставка — деньги не меняются",
    inputs: { "mode": "fv", "amount": 250000, "rate": 0, "years": 10, "compounding": "year" },
    expectPrimary: "250 000,00 ₽",
    expectSecondary: [{ label: "Множитель роста", value: "1" }, { label: "Эффективная годовая ставка", value: "0,00%" }, { label: "Периодов начисления", value: "10" }],
  },
  {
    name: "нулевой срок отклоняется",
    inputs: { "mode": "fv", "amount": 100000, "rate": 12, "years": 0, "compounding": "year" },
    expectPrimary: "—",
  },
];
