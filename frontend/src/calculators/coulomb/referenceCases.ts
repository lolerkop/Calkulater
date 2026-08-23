import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const coulombReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "разноимённые заряды 1 и −1 нКл на 10 см",
    inputs: { q1: 1, q2: -1, r: 10 },
    expectPrimary: "8,988·10^-7 Н",
    expectSecondary: [
      { label: "Характер", value: "притяжение" },
      { label: "Напряжённость поля первого заряда", value: "898,76 В/м" },
      { label: "Потенциальная энергия", value: "-8,988·10^-8 Дж" },
      { label: "Расстояние", value: "10 см" },
    ],
  },
  {
    name: "одноимённые 5 и 5 нКл на 2 см",
    inputs: { q1: 5, q2: 5, r: 2 },
    expectPrimary: "0,000562 Н",
    expectSecondary: [
      { label: "Характер", value: "отталкивание" },
      { label: "Напряжённость поля первого заряда", value: "112 344,4 В/м" },
      { label: "Потенциальная энергия", value: "1,123·10^-5 Дж" },
      { label: "Расстояние", value: "2 см" },
    ],
  },
  {
    name: "граница: расстояние один миллиметр",
    inputs: { q1: 1, q2: 1, r: 0.1 },
    expectPrimary: "0,008988 Н",
    expectSecondary: [
      { label: "Характер", value: "отталкивание" },
      { label: "Напряжённость поля первого заряда", value: "8 987 551,79 В/м" },
      { label: "Потенциальная энергия", value: "8,988·10^-6 Дж" },
      { label: "Расстояние", value: "0,1 см" },
    ],
  },
  {
    name: "нулевое расстояние отклоняется",
    inputs: { q1: 1, q2: -1, r: 0 },
    expectPrimary: "—",
  },
  {
    name: "нулевой заряд отклоняется",
    inputs: { q1: 0, q2: -1, r: 10 },
    expectPrimary: "—",
  },
];
