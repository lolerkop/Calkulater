import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const decibelReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "два равных источника по 80 дБ",
    inputs: { mode: "sum", levels: "80 80", p1: 0, p2: 0, kind: "power" },
    expectPrimary: "83,01 дБ",
    expectSecondary: [
      { label: "Источников", value: "2" },
    ],
  },
  {
    name: "отношение мощностей вдвое",
    inputs: { mode: "ratio", levels: "", p1: 1, p2: 2, kind: "power" },
    expectPrimary: "3,01 дБ",
    expectSecondary: [
      { label: "Во сколько раз по мощности", value: "2" },
      { label: "Во сколько раз по амплитуде", value: "1,414" },
    ],
  },
  {
    name: "равные мощности дают ноль",
    inputs: { mode: "ratio", levels: "", p1: 1, p2: 1, kind: "power" },
    expectPrimary: "0 дБ",
    expectSecondary: [
      { label: "Во сколько раз по мощности", value: "1" },
      { label: "Во сколько раз по амплитуде", value: "1" },
    ],
  },
  {
    name: "пустой список уровней отклоняется",
    inputs: { mode: "sum", levels: "", p1: 1, p2: 2, kind: "power" },
    expectPrimary: "—",
  },
  {
    name: "нулевая мощность отклоняется",
    inputs: { mode: "ratio", levels: "", p1: 0, p2: 2, kind: "power" },
    expectPrimary: "—",
  },
];
