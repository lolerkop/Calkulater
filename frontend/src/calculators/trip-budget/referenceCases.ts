import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15A:
//   4 ночи × 3500 = 14 000; 5 дней × 2 чел × 1200 = 12 000
//   14 000 + 12 000 + 12 000 + 5000 = 43 000; на человека 21 500; в день 8600
//   7 × 5200 = 36 400; 8 × 4 × 1500 = 48 000; +48 000 +12 000 +3000 = 147 400
//   3 × 2800 = 8400; 4 × 1 × 900 = 3600; +6000 = 18 000 — на одного столько же
export const tripBudgetReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "двое на пять дней и четыре ночи",
    inputs: { nights: 4, days: 5, people: 2, hotelPerNight: 3500, foodPerDayPerPerson: 1200, transport: 12000, activities: 5000, other: 0 },
    expectPrimary: "43 000,00 ₽",
    expectSecondary: [
      { label: "На человека", value: "21 500,00 ₽" },
      { label: "В день", value: "8 600,00 ₽" },
      { label: "Проживание", value: "14 000,00 ₽" },
      { label: "Питание", value: "12 000,00 ₽" },
    ],
  },
  {
    name: "семья из четверых на восемь дней",
    inputs: { nights: 7, days: 8, people: 4, hotelPerNight: 5200, foodPerDayPerPerson: 1500, transport: 48000, activities: 12000, other: 3000 },
    expectPrimary: "147 400,00 ₽",
    expectSecondary: [
      { label: "На человека", value: "36 850,00 ₽" },
      { label: "В день", value: "18 425,00 ₽" },
      { label: "Прочее", value: "3 000,00 ₽" },
    ],
  },
  {
    name: "граница: один человек — на человека равно всему бюджету",
    inputs: { nights: 3, days: 4, people: 1, hotelPerNight: 2800, foodPerDayPerPerson: 900, transport: 6000, activities: 0, other: 0 },
    expectPrimary: "18 000,00 ₽",
    expectSecondary: [{ label: "На человека", value: "18 000,00 ₽" }],
  },
  {
    name: "нулевое число дней отклоняется",
    inputs: { nights: 4, days: 0, people: 2, hotelPerNight: 3500, foodPerDayPerPerson: 1200, transport: 12000, activities: 5000, other: 0 },
    expectPrimary: "—",
  },
];
