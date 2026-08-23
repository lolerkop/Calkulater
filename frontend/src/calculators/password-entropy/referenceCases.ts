import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const passwordEntropyReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "12 знаков из букв и цифр",
    inputs: { length: 12, charset: "alnum", rate: 10 },
    expectPrimary: "71,45 бит",
    expectSecondary: [
      { label: "Вариантов пароля", value: "3,226·10^21" },
      { label: "Средний перебор", value: "161 313 338 119,89 с" },
      { label: "В годах", value: "5 111,71" },
      { label: "Размер алфавита", value: "62 знаков" },
    ],
  },
  {
    name: "8 знаков только цифры",
    inputs: { length: 8, charset: "digits", rate: 10 },
    expectPrimary: "26,575 бит",
    expectSecondary: [
      { label: "Вариантов пароля", value: "100 000 000" },
      { label: "Средний перебор", value: "0,005 с" },
      { label: "В годах", value: "1,584·10^-10" },
      { label: "Размер алфавита", value: "10 знаков" },
    ],
  },
  {
    name: "граница: один знак",
    inputs: { length: 1, charset: "digits", rate: 10 },
    expectPrimary: "3,322 бит",
    expectSecondary: [
      { label: "Вариантов пароля", value: "10" },
      { label: "Средний перебор", value: "5,000·10^-10 с" },
      { label: "В годах", value: "1,584·10^-17" },
      { label: "Размер алфавита", value: "10 знаков" },
    ],
  },
  {
    name: "нулевая длина отклоняется",
    inputs: { length: 0, charset: "alnum", rate: 10 },
    expectPrimary: "—",
  },
  {
    name: "неизвестный алфавит отклоняется",
    inputs: { length: 12, charset: "runes", rate: 10 },
    expectPrimary: "—",
  },
];
