import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const pipeFlowReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "10 м³/ч по трубе 50 мм",
    inputs: { flow: 10, diameter: 50 },
    expectPrimary: "1,415 м/с",
    expectSecondary: [
      { label: "Площадь сечения", value: "1 963,5 мм²" },
      { label: "Расход в литрах в секунду", value: "2,778 л/с" },
      { label: "Расход в литрах в минуту", value: "166,67 л/мин" },
      { label: "Внутренний диаметр", value: "50 мм" },
    ],
  },
  {
    name: "2 м³/ч по трубе 20 мм",
    inputs: { flow: 2, diameter: 20 },
    expectPrimary: "1,768 м/с",
    expectSecondary: [
      { label: "Площадь сечения", value: "314,16 мм²" },
      { label: "Расход в литрах в секунду", value: "0,5556 л/с" },
      { label: "Расход в литрах в минуту", value: "33,333 л/мин" },
      { label: "Внутренний диаметр", value: "20 мм" },
    ],
  },
  {
    name: "граница: труба в один миллиметр",
    inputs: { flow: 0.01, diameter: 1 },
    expectPrimary: "3,537 м/с",
    expectSecondary: [
      { label: "Площадь сечения", value: "0,7854 мм²" },
      { label: "Расход в литрах в секунду", value: "0,002778 л/с" },
      { label: "Расход в литрах в минуту", value: "0,1667 л/мин" },
      { label: "Внутренний диаметр", value: "1 мм" },
    ],
  },
  {
    name: "нулевой расход отклоняется",
    inputs: { flow: 0, diameter: 50 },
    expectPrimary: "—",
  },
  {
    name: "нулевой диаметр отклоняется",
    inputs: { flow: 10, diameter: 0 },
    expectPrimary: "—",
  },
];
