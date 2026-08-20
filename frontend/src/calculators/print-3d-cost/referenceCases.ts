import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15A:
//   85 / 1000 × 1800 = 153; 0,12 кВт × 6,5 ч × 5,5 = 4,29; итого 157,29
//   340 / 1000 × 2400 = 816; 0,15 × 21,5 × 6,2 = 19,995; износ 3 × 21,5 = 64,5
//   сумма 900,495; с наценкой 25 % -> 1125,61875 -> 1125,62
//   вся катушка: 1000 / 1000 × 1800 = 1800; 0,12 × 40 × 5,5 = 26,4; итого 1826,40
export const print3dCostReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "деталь 85 граммов за 6,5 часа печати",
    inputs: { grams: 85, spoolPrice: 1800, spoolWeight: 1000, hours: 6.5, powerW: 120, kwhPrice: 5.5, wearPerHour: 0, markupPct: 0 },
    expectPrimary: "157,29 ₽",
    expectSecondary: [
      { label: "Пластик", value: "153,00 ₽" },
      { label: "Электричество", value: "4,29 ₽" },
      { label: "Цена грамма пластика", value: "1,80 ₽" },
    ],
  },
  {
    name: "крупная модель с амортизацией и наценкой 25 процентов",
    inputs: { grams: 340, spoolPrice: 2400, spoolWeight: 1000, hours: 21.5, powerW: 150, kwhPrice: 6.2, wearPerHour: 3, markupPct: 25 },
    expectPrimary: "1 125,62 ₽",
    expectSecondary: [
      { label: "Пластик", value: "816,00 ₽" },
      { label: "Электричество", value: "20,00 ₽" },
      { label: "Амортизация принтера", value: "64,50 ₽" },
    ],
  },
  {
    name: "граница: расходуется ровно вся катушка",
    inputs: { grams: 1000, spoolPrice: 1800, spoolWeight: 1000, hours: 40, powerW: 120, kwhPrice: 5.5, wearPerHour: 0, markupPct: 0 },
    expectPrimary: "1 826,40 ₽",
    expectSecondary: [{ label: "Пластик", value: "1 800,00 ₽" }],
  },
  {
    name: "нулевой вес катушки отклоняется",
    inputs: { grams: 85, spoolPrice: 1800, spoolWeight: 0, hours: 6.5, powerW: 120, kwhPrice: 5.5, wearPerHour: 0, markupPct: 0 },
    expectPrimary: "—",
  },
];
