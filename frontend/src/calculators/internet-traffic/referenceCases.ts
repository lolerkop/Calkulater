import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15A:
//   5 / 8 · 3600 / 1000 = 2,25 ГБ в час; × 3 = 6,75 в день; × 30 = 202,5 за месяц
//   лимит 100 / 6,75 = 14,8148148… дня; превышение 202,5 − 100 = 102,5
//   25 / 8 · 3,6 = 11,25 в час; × 2 = 22,5 в день; × 31 = 697,5; 500 / 22,5 = 22,2222…
//   лимит ровно 202,5 -> превышения нет, остаток 0
export const internetTrafficReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "три часа в день на пяти мегабитах за месяц",
    inputs: { mbps: 5, hoursPerDay: 3, days: 30, quotaGb: 100 },
    expectPrimary: "202,5 ГБ",
    expectSecondary: [
      { label: "В день", value: "6,75 ГБ" },
      { label: "В час", value: "2,25 ГБ" },
      { label: "Хватит дней при лимите", value: "14,815" },
      { label: "Превышение лимита", value: "102,5 ГБ" },
    ],
  },
  {
    name: "два часа 4K на 25 мегабитах за 31 день",
    inputs: { mbps: 25, hoursPerDay: 2, days: 31, quotaGb: 500 },
    expectPrimary: "697,5 ГБ",
    expectSecondary: [
      { label: "В день", value: "22,5 ГБ" },
      { label: "Хватит дней при лимите", value: "22,222" },
    ],
  },
  {
    name: "граница: лимит ровно равен трафику",
    inputs: { mbps: 5, hoursPerDay: 3, days: 30, quotaGb: 202.5 },
    expectPrimary: "202,5 ГБ",
    expectSecondary: [
      { label: "Хватит дней при лимите", value: "30" },
      { label: "Остаток лимита", value: "0 ГБ" },
    ],
  },
  {
    name: "нулевая скорость отклоняется",
    inputs: { mbps: 0, hoursPerDay: 3, days: 30, quotaGb: 100 },
    expectPrimary: "—",
  },
];
