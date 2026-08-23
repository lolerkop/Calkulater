import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const sampleSizeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "95 % при ошибке 5 % и доле 50 %",
    inputs: { confidence: "95", margin: 5, proportion: 50, population: 0 },
    expectPrimary: "385 чел",
    expectSecondary: [
      { label: "Без поправки на совокупность", value: "385 чел" },
      { label: "Критическое значение z", value: "1,96" },
      { label: "Предельная ошибка", value: "5 %" },
      { label: "Доля от совокупности", value: "0 %" },
    ],
  },
  {
    name: "99 % при ошибке 3 % на совокупности 10000",
    inputs: { confidence: "99", margin: 3, proportion: 50, population: 10000 },
    expectPrimary: "1 557 чел",
    expectSecondary: [
      { label: "Без поправки на совокупность", value: "1 844 чел" },
      { label: "Критическое значение z", value: "2,576" },
      { label: "Предельная ошибка", value: "3 %" },
      { label: "Доля от совокупности", value: "15,57 %" },
    ],
  },
  {
    name: "граница: доля ровно ноль",
    inputs: { confidence: "95", margin: 5, proportion: 0, population: 0 },
    expectPrimary: "0 чел",
    expectSecondary: [
      { label: "Без поправки на совокупность", value: "0 чел" },
      { label: "Критическое значение z", value: "1,96" },
      { label: "Предельная ошибка", value: "5 %" },
      { label: "Доля от совокупности", value: "0 %" },
    ],
  },
  {
    name: "нулевая предельная ошибка отклоняется",
    inputs: { confidence: "95", margin: 0, proportion: 50, population: 0 },
    expectPrimary: "—",
  },
  {
    name: "доля больше ста отклоняется",
    inputs: { confidence: "95", margin: 5, proportion: 120, population: 0 },
    expectPrimary: "—",
  },
];
