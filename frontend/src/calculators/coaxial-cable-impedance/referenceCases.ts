import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const coaxialCableImpedanceReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { dIn: 0.9, dOut: 2.95, eps: 2.25 },
    expectPrimary: "47,433 Ом",
    expectSecondary: [
      { label: "Ёмкость на метр", value: "105,44 пФ/м" },
      { label: "Коэффициент укорочения", value: "0,6667" },
      { label: "Задержка на метр", value: "5,003 нс/м" },
      { label: "Отношение диаметров", value: "3,278" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { dIn: 1.63, dOut: 7.25, eps: 2.3 },
    expectPrimary: "58,978 Ом",
    expectSecondary: [
      { label: "Ёмкость на метр", value: "85,736 пФ/м" },
      { label: "Коэффициент укорочения", value: "0,6594" },
      { label: "Задержка на метр", value: "5,059 нс/м" },
      { label: "Отношение диаметров", value: "4,448" },
    ],
  },
  {
    name: "граница 3",
    inputs: { dIn: 1, dOut: 2, eps: 1 },
    expectPrimary: "41,542 Ом",
    expectSecondary: [
      { label: "Ёмкость на метр", value: "80,261 пФ/м" },
      { label: "Коэффициент укорочения", value: "1" },
      { label: "Задержка на метр", value: "3,336 нс/м" },
      { label: "Отношение диаметров", value: "2" },
    ],
  },
  {
    name: "внешний диаметр должен быть больше внутреннего",
    inputs: { dIn: 3, dOut: 2, eps: 2.25 },
    expectPrimary: "—",
  },
  {
    name: "диэлектрическая проницаемость не может быть меньше единицы",
    inputs: { dIn: 0.9, dOut: 2.95, eps: 0.5 },
    expectPrimary: "—",
  },
];
