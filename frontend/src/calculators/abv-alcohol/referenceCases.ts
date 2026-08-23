import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const abvAlcoholReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "сусло 1,050 сбродило до 1,010",
    inputs: { og: 1.05, fg: 1.01, factor: 131.25 },
    expectPrimary: "5,25 %",
    expectSecondary: [
      { label: "Степень сбраживания", value: "80 %" },
      { label: "Падение плотности", value: "0,04" },
      { label: "Начальная плотность", value: "1,05" },
      { label: "Конечная плотность", value: "1,01" },
    ],
  },
  {
    name: "плотное сусло 1,075 до 1,015",
    inputs: { og: 1.075, fg: 1.015, factor: 131.25 },
    expectPrimary: "7,875 %",
    expectSecondary: [
      { label: "Степень сбраживания", value: "80 %" },
      { label: "Падение плотности", value: "0,06" },
      { label: "Начальная плотность", value: "1,075" },
      { label: "Конечная плотность", value: "1,015" },
    ],
  },
  {
    name: "граница: брожения не было",
    inputs: { og: 1.05, fg: 1.05, factor: 131.25 },
    expectPrimary: "0 %",
    expectSecondary: [
      { label: "Степень сбраживания", value: "0 %" },
      { label: "Падение плотности", value: "0" },
      { label: "Начальная плотность", value: "1,05" },
      { label: "Конечная плотность", value: "1,05" },
    ],
  },
  {
    name: "конечная плотность выше начальной отклоняется",
    inputs: { og: 1.01, fg: 1.05, factor: 131.25 },
    expectPrimary: "—",
  },
  {
    name: "начальная плотность воды отклоняется",
    inputs: { og: 1, fg: 0.99, factor: 131.25 },
    expectPrimary: "—",
  },
];
