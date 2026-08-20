import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15A:
//   9:00–18:00 = 540 мин; минус перерыв 60 -> 480 мин = 8 ч; × 21 = 168 ч
//   заработок 168 × 500 = 84 000
//   22:00–06:00 переходит полночь: 360 − 1320 = −960, +1440 = 480 мин
//   минус 45 -> 435 мин = 7,25 ч; × 15 = 108,75 ч
//   9:30–17:45 = 495 мин без перерыва = 8,25 ч; × 10 = 82,5 ч
export const workHoursReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "смена 9:00–18:00 с часовым перерывом, 21 смена",
    inputs: { startHour: 9, startMin: 0, endHour: 18, endMin: 0, breakMin: 60, days: 21, ratePerHour: 500 },
    expectPrimary: "168 ч",
    expectSecondary: [
      { label: "Часов в смену", value: "8 ч" },
      { label: "В часах и минутах", value: "8 ч 0 мин" },
      { label: "Заработок", value: "84 000,00 ₽" },
    ],
  },
  {
    name: "ночная смена 22:00–06:00 через полночь",
    inputs: { startHour: 22, startMin: 0, endHour: 6, endMin: 0, breakMin: 45, days: 15, ratePerHour: 700 },
    expectPrimary: "108,75 ч",
    expectSecondary: [
      { label: "Часов в смену", value: "7,25 ч" },
      { label: "В часах и минутах", value: "7 ч 15 мин" },
      { label: "Длина смены до перерыва", value: "8 ч 0 мин" },
    ],
  },
  {
    name: "граница: смена без перерыва и без ставки",
    inputs: { startHour: 9, startMin: 30, endHour: 17, endMin: 45, breakMin: 0, days: 10, ratePerHour: 0 },
    expectPrimary: "82,5 ч",
    expectSecondary: [{ label: "В часах и минутах", value: "8 ч 15 мин" }],
  },
  {
    name: "перерыв длиннее смены отклоняется",
    inputs: { startHour: 9, startMin: 0, endHour: 12, endMin: 0, breakMin: 200, days: 21, ratePerHour: 500 },
    expectPrimary: "—",
  },
];
