import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const cycleTimeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "смена 480 минут на 120 изделий",
    inputs: { availableMinutes: 480, demand: 120, actualCycle: 3.5 },
    expectPrimary: "4 мин/шт",
    expectSecondary: [
      { label: "Единиц в час", value: "15" },
      { label: "Фактический цикл", value: "3,5 мин" },
      { label: "Загрузка такта", value: "87,5 %" },
      { label: "Возможный выпуск за смену", value: "137,14 шт" },
    ],
  },
  {
    name: "две смены 960 минут на 400 изделий",
    inputs: { availableMinutes: 960, demand: 400, actualCycle: 2.2 },
    expectPrimary: "2,4 мин/шт",
    expectSecondary: [
      { label: "Единиц в час", value: "25" },
      { label: "Фактический цикл", value: "2,2 мин" },
      { label: "Загрузка такта", value: "91,6667 %" },
      { label: "Возможный выпуск за смену", value: "436,36 шт" },
    ],
  },
  {
    name: "граница: одно изделие за смену",
    inputs: { availableMinutes: 480, demand: 1, actualCycle: 480 },
    expectPrimary: "480 мин/шт",
    expectSecondary: [
      { label: "Единиц в час", value: "0,125" },
      { label: "Фактический цикл", value: "480 мин" },
      { label: "Загрузка такта", value: "100 %" },
      { label: "Возможный выпуск за смену", value: "1 шт" },
    ],
  },
  {
    name: "нулевой спрос отклоняется",
    inputs: { availableMinutes: 480, demand: 0, actualCycle: 3.5 },
    expectPrimary: "—",
  },
  {
    name: "нулевое доступное время отклоняется",
    inputs: { availableMinutes: 0, demand: 120, actualCycle: 3.5 },
    expectPrimary: "—",
  },
];
