import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную:
//   5 000 000 × 20 % = 1 000 000, в кредит 4 000 000
//   1 500 000 / 5 000 000 = 30 %, в кредит 3 500 000
//   3 200 000 × 15 % = 480 000, в кредит 2 720 000
export const downPaymentReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "взнос 20 % от 5 000 000",
    inputs: {"mode": "percent", "price": 5000000, "percent": 20},
    expectPrimary: "1 000 000,00 ₽",
    expectSecondary: [{ label: "Сумма кредита", value: "4 000 000,00 ₽" }, { label: "Доля взноса", value: "20,00%" }],
  },
  {
    name: "по накопленной сумме: 1 500 000 из 5 000 000 — это 30 %",
    inputs: {"mode": "amount", "price": 5000000, "downPayment": 1500000},
    expectPrimary: "1 500 000,00 ₽",
    expectSecondary: [{ label: "Доля взноса", value: "30,00%" }, { label: "Сумма кредита", value: "3 500 000,00 ₽" }],
  },
  {
    name: "взнос 15 % от 3 200 000",
    inputs: {"mode": "percent", "price": 3200000, "percent": 15},
    expectPrimary: "480 000,00 ₽",
    expectSecondary: [{ label: "Сумма кредита", value: "2 720 000,00 ₽" }],
  },
  {
    name: "граница: полная оплата обнуляет кредит",
    inputs: {"mode": "percent", "price": 5000000, "percent": 100},
    expectPrimary: "5 000 000,00 ₽",
    expectSecondary: [{ label: "Сумма кредита", value: "0,00 ₽" }],
  },
  {
    name: "доля больше 100 % отклоняется",
    inputs: {"mode": "percent", "price": 5000000, "percent": 120},
    expectPrimary: "—",
  },
  {
    name: "нулевая цена отклоняется",
    inputs: {"mode": "percent", "price": 0, "percent": 20},
    expectPrimary: "—",
  },
];
