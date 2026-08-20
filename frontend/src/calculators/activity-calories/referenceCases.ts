import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15A:
//   ккал = MET × 3,5 × масса ÷ 200 × минуты
//   7,5 × 3,5 × 70 / 200 = 9,1875 в минуту; × 45 = 413,4375 -> 413
//   3,5 × 3,5 × 85 / 200 = 5,20625 в минуту; × 60 = 312,375 -> 312
//   9,8 × 3,5 × 70 / 200 = 12,005 в минуту; × 1 = 12,005 -> 12
export const activityCaloriesReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "велосипед 45 минут при массе 70 кг",
    inputs: { activity: 'cycling', met: 7.5, weightKg: 70, minutes: 45 },
    expectPrimary: "413 ккал",
    expectSecondary: [
      { label: "Калорий в минуту", value: "9,188" },
      { label: "Расход в час", value: "551 ккал" },
      { label: "Коэффициент MET", value: "7,5" },
    ],
  },
  {
    name: "ходьба час при массе 85 кг",
    inputs: { activity: 'walking', met: 3.5, weightKg: 85, minutes: 60 },
    expectPrimary: "312 ккал",
    expectSecondary: [
      { label: "Калорий в минуту", value: "5,206" },
      { label: "Коэффициент MET", value: "3,5" },
    ],
  },
  {
    name: "граница: одна минута бега",
    inputs: { activity: 'running', met: 9.8, weightKg: 70, minutes: 1 },
    expectPrimary: "12 ккал",
    expectSecondary: [{ label: "Калорий в минуту", value: "12,005" }],
  },
  {
    name: "нулевая масса тела отклоняется",
    inputs: { activity: 'cycling', met: 7.5, weightKg: 0, minutes: 45 },
    expectPrimary: "—",
  },
];
