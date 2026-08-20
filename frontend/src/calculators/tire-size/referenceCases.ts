import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15A:
//   205/55 R16: боковина 205 × 55 % = 112,75; диск 16 × 25,4 = 406,4
//   внешний 406,4 + 2 × 112,75 = 631,9 мм; окружность π × 631,9 = 1985,17239…
//   оборотов 1 000 000 / 1985,17239… = 503,734588…
//   225/45 R17: боковина 101,25; диск 431,8; внешний 634,3
//   255/30 R20: боковина 76,5; диск 508; внешний 661
export const tireSizeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "типоразмер 205/55 R16",
    inputs: { width: 205, profile: 55, diameter: 16 },
    expectPrimary: "631,9 мм",
    expectSecondary: [
      { label: "Высота профиля", value: "112,75 мм" },
      { label: "Длина окружности", value: "1 985,17 мм" },
      { label: "Оборотов на километр", value: "503,73" },
    ],
  },
  {
    name: "типоразмер 225/45 R17",
    inputs: { width: 225, profile: 45, diameter: 17 },
    expectPrimary: "634,3 мм",
    expectSecondary: [
      { label: "Высота профиля", value: "101,25 мм" },
      { label: "Оборотов на километр", value: "501,83" },
    ],
  },
  {
    name: "граница: низкий профиль 30 на двадцатом диске",
    inputs: { width: 255, profile: 30, diameter: 20 },
    expectPrimary: "661 мм",
    expectSecondary: [{ label: "Высота профиля", value: "76,5 мм" }],
  },
  {
    name: "нулевая ширина отклоняется",
    inputs: { width: 0, profile: 55, diameter: 16 },
    expectPrimary: "—",
  },
];
