import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15A:
//   2000 · 17 % = 340; 2000 · 1,5 % = 30; удержано 340 + 30 + 55 = 425
//   выплата 2000 − 425 = 1575; прибыль 1575 − 900 = 675; доля 425 / 2000 = 21,25 %
//   5000 · 22 % = 1100; 5000 · 2 % = 100; удержано 1100 + 100 + 120 + 35 = 1355
//   выплата 5000 − 1355 = 3645; прибыль 3645 − 2600 = 1045
export const feeChainReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "маркетплейс 17 % и эквайринг 1,5 % при цене 2000",
    inputs: { price: 2000, commissionPct: 17, acquiringPct: 1.5, logistics: 55, storage: 0, cost: 900 },
    expectPrimary: "1 575,00 ₽",
    expectSecondary: [
      { label: "Комиссия площадки", value: "340,00 ₽" },
      { label: "Удержано всего", value: "425,00 ₽" },
      { label: "Прибыль", value: "675,00 ₽" },
      { label: "Доля удержаний", value: "21,25%" },
    ],
  },
  {
    name: "цена 5000 с логистикой и хранением",
    inputs: { price: 5000, commissionPct: 22, acquiringPct: 2, logistics: 120, storage: 35, cost: 2600 },
    expectPrimary: "3 645,00 ₽",
    expectSecondary: [
      { label: "Комиссия площадки", value: "1 100,00 ₽" },
      { label: "Хранение", value: "35,00 ₽" },
      { label: "Удержано всего", value: "1 355,00 ₽" },
      { label: "Прибыль", value: "1 045,00 ₽" },
    ],
  },
  {
    name: "граница: нулевые удержания — выплата равна цене",
    inputs: { price: 1000, commissionPct: 0, acquiringPct: 0, logistics: 0, storage: 0, cost: 0 },
    expectPrimary: "1 000,00 ₽",
    expectSecondary: [
      { label: "Удержано всего", value: "0,00 ₽" },
      { label: "Доля удержаний", value: "0,00%" },
    ],
  },
  {
    name: "нулевая цена отклоняется",
    inputs: { price: 0, commissionPct: 17, acquiringPct: 1.5, logistics: 55, storage: 0, cost: 900 },
    expectPrimary: "—",
  },
];
