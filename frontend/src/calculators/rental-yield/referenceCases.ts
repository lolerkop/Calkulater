import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены вручную:
//   600 000 / 10 000 000 = 6,00 %                (валовая)
//   50 000 × 12 = 600 000 -> те же 6,00 %
//   (600 000 − 120 000) / 10 000 000 = 4,80 %    (чистая)
export const rentalYieldReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "валовая доходность 6 % при годовой аренде",
    inputs: {"price": 10000000, "rentMode": "annual", "annualRent": 600000, "annualCosts": 0},
    expectPrimary: "6,00%",
    expectSecondary: [{ label: "Аренда за год", value: "600 000,00 ₽" }],
  },
  {
    name: "месячная аренда 50 000 даёт те же 6 %",
    inputs: {"price": 10000000, "rentMode": "monthly", "monthlyRent": 50000, "annualCosts": 0},
    expectPrimary: "6,00%",
    expectSecondary: [{ label: "Аренда за год", value: "600 000,00 ₽" }],
  },
  {
    name: "расходы 120 000 снижают чистую доходность до 4,8 %",
    inputs: {"price": 10000000, "rentMode": "annual", "annualRent": 600000, "annualCosts": 120000},
    expectPrimary: "6,00%",
    expectSecondary: [{ label: "Чистая доходность", value: "4,80%" }],
  },
  {
    name: "граница: без аренды доходность нулевая",
    inputs: {"price": 10000000, "rentMode": "annual", "annualRent": 0, "annualCosts": 0},
    expectPrimary: "0,00%",
  },
  {
    name: "нулевая цена отклоняется",
    inputs: {"price": 0, "rentMode": "annual", "annualRent": 600000, "annualCosts": 0},
    expectPrimary: "—",
  },
];
