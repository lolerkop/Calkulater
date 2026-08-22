import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const capacitorNetworkReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "три конденсатора последовательно",
    inputs: { capacitances: "100 220 470", mode: "series" },
    expectPrimary: "59,977 мкФ",
    expectSecondary: [
      { label: "Конденсаторов", value: "3" },
      { label: "Наименьший", value: "100 мкФ" },
      { label: "Наибольший", value: "470 мкФ" },
    ],
  },
  {
    name: "те же параллельно",
    inputs: { capacitances: "100 220 470", mode: "parallel" },
    expectPrimary: "790 мкФ",
    expectSecondary: [
      { label: "Конденсаторов", value: "3" },
      { label: "Наименьший", value: "100 мкФ" },
      { label: "Наибольший", value: "470 мкФ" },
    ],
  },
  {
    name: "один конденсатор",
    inputs: { capacitances: "100", mode: "series" },
    expectPrimary: "100 мкФ",
    expectSecondary: [
      { label: "Конденсаторов", value: "1" },
      { label: "Наименьший", value: "100 мкФ" },
      { label: "Наибольший", value: "100 мкФ" },
    ],
  },
  {
    name: "пустой список отклоняется",
    inputs: { capacitances: "", mode: "series" },
    expectPrimary: "—",
  },
  {
    name: "нулевая ёмкость отклоняется",
    inputs: { capacitances: "100 0", mode: "series" },
    expectPrimary: "—",
  },
];
