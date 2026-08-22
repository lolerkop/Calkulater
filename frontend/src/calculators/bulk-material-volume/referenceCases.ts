import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 20P (refcases.json) и выведены независимой моделью:
//   5 × 4 × 0,10 = 2 м³; с запасом 5 % -> 2,1; × 1,6 = 3,36 т; мешков ⌈134,4⌉ = 135
//   10 × 1 × 0,05 = 0,5 м³; +10 % -> 0,55; × 1,5 = 0,825 т = 825 кг; мешков РОВНО 33
// Артефакт Phase 20P давал здесь 34: 0,5·1,1 в двоичной записи равно
// 0,55000000000000004, и обычный Math.ceil добавлял целый лишний мешок.
// Выпущенный `ceilUnits` этот шум гасит; в рациональной арифметике ответ 33.
// См. refcase-corrections.md.
//   2 × 2 × 0,01 = 0,04 м³; × 1,4 = 0,056 т; мешков ⌈2,24⌉ = 3
export const bulkMaterialVolumeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "площадка 5×4 м, слой 10 см, щебень с запасом 5 %",
    inputs: { length: 5, width: 4, depth: 10, density: 1.6, waste: 5 },
    expectPrimary: "2,1 м³",
    expectSecondary: [
      { label: "Чистый объём", value: "2 м³" },
      { label: "Масса", value: "3,36 т" },
      { label: "Мешков по 25 кг", value: "135 шт" },
      { label: "Площадь основания", value: "20 м²" },
    ],
  },
  {
    name: "дорожка 10×1 м, слой 5 см, песок с запасом 10 %",
    inputs: { length: 10, width: 1, depth: 5, density: 1.5, waste: 10 },
    expectPrimary: "0,55 м³",
    expectSecondary: [
      { label: "Чистый объём", value: "0,5 м³" },
      { label: "Масса", value: "0,825 т" },
      { label: "Мешков по 25 кг", value: "33 шт" },
    ],
  },
  {
    name: "граница: слой в один сантиметр",
    inputs: { length: 2, width: 2, depth: 1, density: 1.4, waste: 0 },
    expectPrimary: "0,04 м³",
    expectSecondary: [
      { label: "Масса", value: "0,056 т" },
      { label: "Мешков по 25 кг", value: "3 шт" },
    ],
  },
  {
    name: "нулевая толщина слоя отклоняется",
    inputs: { length: 5, width: 4, depth: 0, density: 1.6, waste: 0 },
    expectPrimary: "—",
  },
  {
    name: "запас свыше пятидесяти процентов отклоняется",
    inputs: { length: 5, width: 4, depth: 10, density: 1.6, waste: 55 },
    expectPrimary: "—",
  },
];
