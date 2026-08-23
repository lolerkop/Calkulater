import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const epoxyVolumeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "столешница 100×50 см слоем 5 мм",
    inputs: { length: 100, width: 50, thickness: 5, density: 1.1, ratio: 2 },
    expectPrimary: "2,75 кг",
    expectSecondary: [
      { label: "Смолы", value: "1,833 кг" },
      { label: "Отвердителя", value: "0,9167 кг" },
      { label: "Объём заливки", value: "2,5 л" },
      { label: "Площадь заливки", value: "0,5 м²" },
    ],
  },
  {
    name: "поднос 40×30 см слоем 3 мм при пропорции 3:1",
    inputs: { length: 40, width: 30, thickness: 3, density: 1.15, ratio: 3 },
    expectPrimary: "0,414 кг",
    expectSecondary: [
      { label: "Смолы", value: "0,3105 кг" },
      { label: "Отвердителя", value: "0,1035 кг" },
      { label: "Объём заливки", value: "0,36 л" },
      { label: "Площадь заливки", value: "0,12 м²" },
    ],
  },
  {
    name: "граница: слой в одну десятую миллиметра",
    inputs: { length: 10, width: 10, thickness: 0.1, density: 1.1, ratio: 2 },
    expectPrimary: "0,0011 кг",
    expectSecondary: [
      { label: "Смолы", value: "0,000733 кг" },
      { label: "Отвердителя", value: "0,000367 кг" },
      { label: "Объём заливки", value: "0,001 л" },
      { label: "Площадь заливки", value: "0,01 м²" },
    ],
  },
  {
    name: "нулевая толщина отклоняется",
    inputs: { length: 100, width: 50, thickness: 0, density: 1.1, ratio: 2 },
    expectPrimary: "—",
  },
  {
    name: "нулевая пропорция отклоняется",
    inputs: { length: 100, width: 50, thickness: 5, density: 1.1, ratio: 0 },
    expectPrimary: "—",
  },
];
