import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const quarterMileReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { power: 150, mass: 1300 },
    expectPrimary: "15,572 с",
    expectSecondary: [
      { label: "Скорость на финише", value: "140,86 км/ч" },
      { label: "Удельная мощность", value: "115,38 л.с./т" },
      { label: "Масса в фунтах", value: "2 866,01 фунт" },
      { label: "Скорость на финише в милях в час", value: "87,529 миль/ч" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { power: 500, mass: 1600 },
    expectPrimary: "11,172 с",
    expectSecondary: [
      { label: "Скорость на финише", value: "196,35 км/ч" },
      { label: "Удельная мощность", value: "312,5 л.с./т" },
      { label: "Масса в фунтах", value: "3 527,4 фунт" },
      { label: "Скорость на финише в милях в час", value: "122,01 миль/ч" },
    ],
  },
  {
    name: "граница 3",
    inputs: { power: 1, mass: 1000 },
    expectPrimary: "75,812 с",
    expectSecondary: [
      { label: "Скорость на финише", value: "28,935 км/ч" },
      { label: "Удельная мощность", value: "1 л.с./т" },
      { label: "Масса в фунтах", value: "2 204,62 фунт" },
      { label: "Скорость на финише в милях в час", value: "17,979 миль/ч" },
    ],
  },
  {
    name: "мощность должна быть больше нуля",
    inputs: { power: 0, mass: 1300 },
    expectPrimary: "—",
  },
  {
    name: "масса должна быть больше нуля",
    inputs: { power: 150, mass: 0 },
    expectPrimary: "—",
  },
];
