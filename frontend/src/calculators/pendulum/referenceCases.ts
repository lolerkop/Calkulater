import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const pendulumReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "подвес один метр",
    inputs: { length: 1, g: 9.80665 },
    expectPrimary: "2,006 с",
    expectSecondary: [
      { label: "Частота", value: "0,4984 Гц" },
      { label: "Колебаний в минуту", value: "29,904" },
      { label: "Длина для периода 1 с", value: "0,2484 м" },
      { label: "Ускорение свободного падения", value: "9,807 м/с²" },
    ],
  },
  {
    name: "секундный маятник 0,2483 м",
    inputs: { length: 0.2483, g: 9.80665 },
    expectPrimary: "0,9998 с",
    expectSecondary: [
      { label: "Частота", value: "1 Гц" },
      { label: "Колебаний в минуту", value: "60,013" },
      { label: "Длина для периода 1 с", value: "0,2484 м" },
      { label: "Ускорение свободного падения", value: "9,807 м/с²" },
    ],
  },
  {
    name: "граница: подвес один сантиметр",
    inputs: { length: 0.01, g: 9.80665 },
    expectPrimary: "0,2006 с",
    expectSecondary: [
      { label: "Частота", value: "4,984 Гц" },
      { label: "Колебаний в минуту", value: "299,04" },
      { label: "Длина для периода 1 с", value: "0,2484 м" },
      { label: "Ускорение свободного падения", value: "9,807 м/с²" },
    ],
  },
  {
    name: "нулевая длина отклоняется",
    inputs: { length: 0, g: 9.80665 },
    expectPrimary: "—",
  },
  {
    name: "нулевое ускорение отклоняется",
    inputs: { length: 1, g: 0 },
    expectPrimary: "—",
  },
];
