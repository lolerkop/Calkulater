import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const rainfallVolumeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { area: 60, depth: 25, coeff: 0.9 },
    expectPrimary: "1 350 л",
    expectSecondary: [
      { label: "В кубометрах", value: "1,35 м³" },
      { label: "Бочек по 200 литров", value: "7 шт" },
      { label: "Собрано с квадратного метра", value: "22,5 л" },
      { label: "Потеряно на стоке и испарении", value: "150 л" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { area: 120, depth: 8, coeff: 0.85 },
    expectPrimary: "816 л",
    expectSecondary: [
      { label: "В кубометрах", value: "0,816 м³" },
      { label: "Бочек по 200 литров", value: "5 шт" },
      { label: "Собрано с квадратного метра", value: "6,8 л" },
      { label: "Потеряно на стоке и испарении", value: "144 л" },
    ],
  },
  {
    name: "граница 3",
    inputs: { area: 10, depth: 1, coeff: 1 },
    expectPrimary: "10 л",
    expectSecondary: [
      { label: "В кубометрах", value: "0,01 м³" },
      { label: "Бочек по 200 литров", value: "1 шт" },
      { label: "Собрано с квадратного метра", value: "1 л" },
      { label: "Потеряно на стоке и испарении", value: "0 л" },
    ],
  },
  {
    name: "площадь должна быть больше нуля",
    inputs: { area: 0, depth: 25, coeff: 0.9 },
    expectPrimary: "—",
  },
  {
    name: "коэффициент стока задаётся от 0 до 1",
    inputs: { area: 60, depth: 25, coeff: 1.4 },
    expectPrimary: "—",
  },
];
