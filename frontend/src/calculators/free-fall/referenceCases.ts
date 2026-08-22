import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const freeFallReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "падение с двадцати метров",
    inputs: { mode: "fromHeight", h: 20, t: 0, g: 9.80665 },
    expectPrimary: "19,806 м/с",
    expectSecondary: [
      { label: "Время падения", value: "2,02 с" },
      { label: "Высота падения", value: "20 м" },
      { label: "В километрах в час", value: "71,301 км/ч" },
    ],
  },
  {
    name: "три секунды падения",
    inputs: { mode: "fromTime", h: 0, t: 3, g: 9.80665 },
    expectPrimary: "29,42 м/с",
    expectSecondary: [
      { label: "Время падения", value: "3 с" },
      { label: "Высота падения", value: "44,13 м" },
      { label: "В километрах в час", value: "105,91 км/ч" },
    ],
  },
  {
    name: "миллиметр падения",
    inputs: { mode: "fromHeight", h: 0.001, t: 0, g: 9.80665 },
    expectPrimary: "0,14 м/с",
    expectSecondary: [
      { label: "Время падения", value: "0,0143 с" },
      { label: "Высота падения", value: "0,001 м" },
      { label: "В километрах в час", value: "0,5042 км/ч" },
    ],
  },
  {
    name: "нулевая высота отклоняется",
    inputs: { mode: "fromHeight", h: 0, t: 0, g: 9.80665 },
    expectPrimary: "—",
  },
  {
    name: "нулевое ускорение отклоняется",
    inputs: { mode: "fromHeight", h: 20, t: 0, g: 0 },
    expectPrimary: "—",
  },
];
