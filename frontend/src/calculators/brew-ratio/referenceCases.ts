import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   500 мл при 1:16 -> 500 / 16 = 31,25 г
//   30 г при 1:15   -> 30 × 15 = 450 мл
//   480 мл на 30 г  -> соотношение 1:16
export const brewRatioReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "500 мл воды при соотношении 1:16",
    inputs: { mode: 'coffee', water: 500, coffee: 30, ratio: 16 },
    expectPrimary: "31,25 г",
    expectSecondary: [
      { label: "Вода", value: "500 мл" },
      { label: "Кофе", value: "31,25 г" },
      { label: "Соотношение", value: "1:16" },
    ],
  },
  {
    name: "30 г кофе при соотношении 1:15",
    inputs: { mode: 'water', water: 500, coffee: 30, ratio: 15 },
    expectPrimary: "450 мл",
    expectSecondary: [
      { label: "Вода", value: "450 мл" },
      { label: "Кофе", value: "30 г" },
      { label: "Соотношение", value: "1:15" },
    ],
  },
  {
    name: "граница: обратная задача — найти соотношение по чашке",
    inputs: { mode: 'ratio', water: 480, coffee: 30, ratio: 16 },
    expectPrimary: "1:16",
    expectSecondary: [
      { label: "Вода", value: "480 мл" },
      { label: "Кофе", value: "30 г" },
    ],
  },
  {
    name: "нулевое соотношение отклоняется",
    inputs: { mode: 'coffee', water: 500, coffee: 30, ratio: 0 },
    expectPrimary: "—",
  },
  {
    name: "нулевая вода в режиме соотношения отклоняется",
    inputs: { mode: 'ratio', water: 0, coffee: 30, ratio: 1 },
    expectPrimary: "—",
  },
];
