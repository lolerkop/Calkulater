import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const waterHeatingReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "100 литров с 10 до 60 при 2 кВт",
    inputs: { volume: 100, tFrom: 10, tTo: 60, power: 2, efficiency: 95 },
    expectPrimary: "3,06 ч",
    expectSecondary: [
      { label: "Часы и минуты", value: "3 ч 4 мин" },
      { label: "Энергия", value: "5,814 кВт·ч" },
      { label: "Полезная мощность", value: "1,9 кВт" },
      { label: "Перепад температур", value: "50 К" },
    ],
  },
  {
    name: "чайник 1,7 литра с 20 до 100 при 2,2 кВт",
    inputs: { volume: 1.7, tFrom: 20, tTo: 100, power: 2.2, efficiency: 100 },
    expectPrimary: "0,0719 ч",
    expectSecondary: [
      { label: "Часы и минуты", value: "0 ч 4 мин" },
      { label: "Энергия", value: "0,1581 кВт·ч" },
      { label: "Полезная мощность", value: "2,2 кВт" },
      { label: "Перепад температур", value: "80 К" },
    ],
  },
  {
    name: "граница: нагрев на один градус",
    inputs: { volume: 100, tFrom: 10, tTo: 11, power: 2, efficiency: 100 },
    expectPrimary: "0,0581 ч",
    expectSecondary: [
      { label: "Часы и минуты", value: "0 ч 3 мин" },
      { label: "Энергия", value: "0,1163 кВт·ч" },
      { label: "Полезная мощность", value: "2 кВт" },
      { label: "Перепад температур", value: "1 К" },
    ],
  },
  {
    name: "конечная температура ниже начальной отклоняется",
    inputs: { volume: 100, tFrom: 60, tTo: 10, power: 2, efficiency: 95 },
    expectPrimary: "—",
  },
  {
    name: "нулевая мощность отклоняется",
    inputs: { volume: 100, tFrom: 10, tTo: 60, power: 0, efficiency: 95 },
    expectPrimary: "—",
  },
];
