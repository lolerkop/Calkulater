import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const escapeVelocityReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "Земля",
    inputs: { mass24: 5.972, radiusKm: 6371 },
    expectPrimary: "11 185,98 м/с",
    expectSecondary: [
      { label: "Первая космическая скорость", value: "7 909,68 м/с" },
      { label: "В километрах в час", value: "40 269,52 км/ч" },
      { label: "Ускорение свободного падения", value: "9,82 м/с²" },
    ],
  },
  {
    name: "Луна",
    inputs: { mass24: 0.07346, radiusKm: 1737 },
    expectPrimary: "2 375,98 м/с",
    expectSecondary: [
      { label: "Первая космическая скорость", value: "1 680,07 м/с" },
      { label: "В километрах в час", value: "8 553,54 км/ч" },
      { label: "Ускорение свободного падения", value: "1,625 м/с²" },
    ],
  },
  {
    name: "единичная масса и тысяча километров",
    inputs: { mass24: 1, radiusKm: 1000 },
    expectPrimary: "11 553,61 м/с",
    expectSecondary: [
      { label: "Первая космическая скорость", value: "8 169,64 м/с" },
      { label: "В километрах в час", value: "41 593,01 км/ч" },
      { label: "Ускорение свободного падения", value: "66,743 м/с²" },
    ],
  },
  {
    name: "нулевая масса отклоняется",
    inputs: { mass24: 0, radiusKm: 6371 },
    expectPrimary: "—",
  },
  {
    name: "нулевой радиус отклоняется",
    inputs: { mass24: 5.972, radiusKm: 0 },
    expectPrimary: "—",
  },
];
