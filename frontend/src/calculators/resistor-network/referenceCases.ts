import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
//   последовательно R = ΣRᵢ; параллельно R = 1/Σ(1/Rᵢ)
export const resistorNetworkReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "последовательно 100, 220, 330 Ом",
    inputs: { "resistances": "100 220 330", "mode": "series" },
    expectPrimary: "650 Ом",
    expectSecondary: [{ label: "Резисторов", value: "3" }, { label: "Наименьший", value: "100 Ом" }, { label: "Наибольший", value: "330 Ом" }],
  },
  {
    name: "параллельно 100 и 300 Ом",
    inputs: { "resistances": "100 300", "mode": "parallel" },
    expectPrimary: "75 Ом",
    expectSecondary: [{ label: "Резисторов", value: "2" }, { label: "Наименьший", value: "100 Ом" }, { label: "Наибольший", value: "300 Ом" }],
  },
  {
    name: "два одинаковых параллельно — половина",
    inputs: { "resistances": "470 470", "mode": "parallel" },
    expectPrimary: "235 Ом",
    expectSecondary: [{ label: "Резисторов", value: "2" }, { label: "Наименьший", value: "470 Ом" }, { label: "Наибольший", value: "470 Ом" }],
  },
  {
    name: "нулевое сопротивление отклоняется",
    inputs: { "resistances": "100 0", "mode": "parallel" },
    expectPrimary: "—",
  },
];
