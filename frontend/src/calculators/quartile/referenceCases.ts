import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const quartileReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { values: "2 4 4 5 7 9 11 12" },
    expectPrimary: "6",
    expectSecondary: [
      { label: "Первый квартиль", value: "4" },
      { label: "Третий квартиль", value: "9,5" },
      { label: "Межквартильный размах", value: "5,5" },
      { label: "Границы усов", value: "-4,25 … 17,75" },
      { label: "Выбросов", value: "0" },
      { label: "Значений", value: "8" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { values: "1 2 3 4 5 6 7 8 9 100" },
    expectPrimary: "5,5",
    expectSecondary: [
      { label: "Первый квартиль", value: "3,25" },
      { label: "Третий квартиль", value: "7,75" },
      { label: "Межквартильный размах", value: "4,5" },
      { label: "Границы усов", value: "-3,5 … 14,5" },
      { label: "Выбросов", value: "1" },
      { label: "Значений", value: "10" },
    ],
  },
  {
    name: "граница 3",
    inputs: { values: "5 5 5 5" },
    expectPrimary: "5",
    expectSecondary: [
      { label: "Первый квартиль", value: "5" },
      { label: "Третий квартиль", value: "5" },
      { label: "Межквартильный размах", value: "0" },
      { label: "Границы усов", value: "5 … 5" },
      { label: "Выбросов", value: "0" },
      { label: "Значений", value: "4" },
    ],
  },
  {
    name: "нужно не меньше четырёх значений",
    inputs: { values: "1 2 3" },
    expectPrimary: "—",
  },
  {
    name: "введите числа через пробел или с новой строки",
    inputs: { values: "" },
    expectPrimary: "—",
  },
];
