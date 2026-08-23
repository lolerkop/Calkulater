import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const curtainSizeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "карниз 140 см с коэффициентом 2",
    inputs: { windowWidth: 140, fullness: 2, fabricWidth: 280, height: 250, hem: 20 },
    expectPrimary: "2,7 м",
    expectSecondary: [
      { label: "Полотнищ", value: "1 шт" },
      { label: "Ширина в сборке", value: "280 см" },
      { label: "Длина отреза", value: "270 см" },
      { label: "Коэффициент сборки", value: "2" },
    ],
  },
  {
    name: "карниз 300 см с коэффициентом 2,5 на узком полотне",
    inputs: { windowWidth: 300, fullness: 2.5, fabricWidth: 150, height: 270, hem: 25 },
    expectPrimary: "14,75 м",
    expectSecondary: [
      { label: "Полотнищ", value: "5 шт" },
      { label: "Ширина в сборке", value: "750 см" },
      { label: "Длина отреза", value: "295 см" },
      { label: "Коэффициент сборки", value: "2,5" },
    ],
  },
  {
    name: "граница: сборка ровно в одно полотнище",
    inputs: { windowWidth: 140, fullness: 2, fabricWidth: 280, height: 200, hem: 0 },
    expectPrimary: "2 м",
    expectSecondary: [
      { label: "Полотнищ", value: "1 шт" },
      { label: "Ширина в сборке", value: "280 см" },
      { label: "Длина отреза", value: "200 см" },
      { label: "Коэффициент сборки", value: "2" },
    ],
  },
  {
    name: "нулевая ширина полотна отклоняется",
    inputs: { windowWidth: 140, fullness: 2, fabricWidth: 0, height: 250, hem: 20 },
    expectPrimary: "—",
  },
  {
    name: "нулевой коэффициент сборки отклоняется",
    inputs: { windowWidth: 140, fullness: 0, fabricWidth: 280, height: 250, hem: 20 },
    expectPrimary: "—",
  },
];
