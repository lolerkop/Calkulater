import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const transformerRatioReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "понижающий 500/100 витков",
    inputs: { mode: "secondaryVoltage", n1: 500, n2: 100, v1: 220, v2: 0, i1: 2 },
    expectPrimary: "44 В",
    expectSecondary: [
      { label: "Отношение витков", value: "0,2" },
      { label: "Вторичный ток", value: "10 А" },
      { label: "Мощность", value: "440 Вт" },
    ],
  },
  {
    name: "найти отношение витков",
    inputs: { mode: "turnsRatio", n1: 0, n2: 0, v1: 220, v2: 12, i1: 2 },
    expectPrimary: "0,0545",
    expectSecondary: [
      { label: "Отношение витков", value: "0,0545" },
      { label: "Вторичный ток", value: "36,667 А" },
      { label: "Мощность", value: "440 Вт" },
    ],
  },
  {
    name: "равные обмотки",
    inputs: { mode: "secondaryVoltage", n1: 100, n2: 100, v1: 220, v2: 0, i1: 2 },
    expectPrimary: "220 В",
    expectSecondary: [
      { label: "Отношение витков", value: "1" },
      { label: "Вторичный ток", value: "2 А" },
      { label: "Мощность", value: "440 Вт" },
    ],
  },
  {
    name: "нулевые витки первичной отклоняются",
    inputs: { mode: "secondaryVoltage", n1: 0, n2: 100, v1: 220, v2: 0, i1: 2 },
    expectPrimary: "—",
  },
  {
    name: "нулевое первичное напряжение отклоняется",
    inputs: { mode: "turnsRatio", n1: 0, n2: 0, v1: 0, v2: 12, i1: 2 },
    expectPrimary: "—",
  },
];
