import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   полезная 0,19 − 0,02 = 0,17; 30 × 1,1 = 33 м²; 33 / (3 × 0,17) = 64,7 -> 65
//   полезная 0,15 − 0,01 = 0,14; 12 / (2,5 × 0,14) = 34,29 -> 35
//   полезная 0,20 − 0,19 = 0,01; 10 / (3 × 0,01) = 333,3 -> 334
export const claddingBoardsReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "стена 30 м², доска 3 м с запасом 10 %",
    inputs: { wall_area: 30, board_len: 3, board_width: 0.19, overlap: 0.02, waste: 10 },
    expectPrimary: "65 шт",
    expectSecondary: [
      { label: "Полезная ширина доски", value: "0,17 м" },
      { label: "Площадь с запасом", value: "33 м²" },
      { label: "Перекроют", value: "33,15 м²" },
      { label: "Погонных метров доски", value: "195 м" },
    ],
  },
  {
    name: "стена 12 м² без запаса",
    inputs: { wall_area: 12, board_len: 2.5, board_width: 0.15, overlap: 0.01, waste: 0 },
    expectPrimary: "35 шт",
    expectSecondary: [
      { label: "Полезная ширина доски", value: "0,14 м" },
      { label: "Перекроют", value: "12,25 м²" },
      { label: "Погонных метров доски", value: "87,5 м" },
    ],
  },
  {
    name: "граница: нахлёст почти во всю ширину доски",
    inputs: { wall_area: 10, board_len: 3, board_width: 0.2, overlap: 0.19, waste: 0 },
    expectPrimary: "334 шт",
    expectSecondary: [
      { label: "Полезная ширина доски", value: "0,01 м" },
      { label: "Перекроют", value: "10,02 м²" },
      { label: "Погонных метров доски", value: "1 002 м" },
    ],
  },
  {
    name: "нахлёст больше ширины отклоняется",
    inputs: { wall_area: 10, board_len: 3, board_width: 0.15, overlap: 0.2, waste: 0 },
    expectPrimary: "—",
  },
  {
    name: "запас свыше пятидесяти процентов отклоняется",
    inputs: { wall_area: 10, board_len: 3, board_width: 0.2, overlap: 0.02, waste: 60 },
    expectPrimary: "—",
  },
];
