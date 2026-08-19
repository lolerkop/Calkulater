import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную:
//   150 / 0,5 = 300 за кг
//   150 / 0,5 = 300 против 260 / 1 = 260 -> выгоднее B, переплата 40 за кг
export const pricePerUnitReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "полкило за 150 — это 300 за килограмм",
    inputs: {"mode": "single", "unit": "kg", "price": 150, "amount": 0.5},
    expectPrimary: "300,00 ₽ за кг",
  },
  {
    name: "литровая упаковка за 89",
    inputs: {"mode": "single", "unit": "l", "price": 89, "amount": 1},
    expectPrimary: "89,00 ₽ за л",
  },
  {
    name: "сравнение: килограмм за 260 выгоднее полкило за 150",
    inputs: {"mode": "compare", "unit": "kg", "priceA": 150, "amountA": 0.5, "priceB": 260, "amountB": 1},
    expectPrimary: "B",
    expectSecondary: [{ label: "Упаковка A", value: "300,00 ₽ за кг" }, { label: "Упаковка B", value: "260,00 ₽ за кг" }, { label: "Переплата за единицу", value: "40,00 ₽ за кг" }],
  },
  {
    name: "граница: одинаковые удельные цены",
    inputs: {"mode": "compare", "unit": "kg", "priceA": 100, "amountA": 1, "priceB": 100, "amountB": 1},
    expectPrimary: "одинаково",
  },
  {
    name: "нулевое количество отклоняется",
    inputs: {"mode": "single", "unit": "kg", "price": 150, "amount": 0},
    expectPrimary: "—",
  },
];
