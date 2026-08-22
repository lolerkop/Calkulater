import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const numberToWordsReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "тысяча двести тридцать четыре",
    inputs: { value: 1234 },
    expectPrimary: "одна тысяча двести тридцать четыре",
    expectSecondary: [
      { label: "Цифрами", value: "1 234" },
      { label: "Триад в записи", value: "2" },
      { label: "Знаков в числе", value: "4" },
    ],
  },
  {
    name: "отрицательное с пропуском разряда",
    inputs: { value: -2000105 },
    expectPrimary: "минус два миллиона сто пять",
    expectSecondary: [
      { label: "Цифрами", value: "-2 000 105" },
      { label: "Триад в записи", value: "3" },
      { label: "Знаков в числе", value: "7" },
    ],
  },
  {
    name: "ноль",
    inputs: { value: 0 },
    expectPrimary: "ноль",
    expectSecondary: [
      { label: "Цифрами", value: "0" },
      { label: "Триад в записи", value: "1" },
      { label: "Знаков в числе", value: "1" },
    ],
  },
  {
    name: "нецелое отклоняется",
    inputs: { value: 1.5 },
    expectPrimary: "—",
  },
  {
    name: "за пределом триллиона отклоняется",
    inputs: { value: 10000000000000 },
    expectPrimary: "—",
  },
];
