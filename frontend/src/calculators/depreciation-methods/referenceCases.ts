import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 21P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const depreciationMethodsReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "линейный метод, первый год",
    inputs: { cost: 1200000, salvage: 200000, life: 5, method: "straight", year: 1 },
    expectPrimary: "200 000,00 ₽",
    expectSecondary: [
      { label: "Накопленная амортизация", value: "200 000,00 ₽" },
      { label: "Остаточная стоимость", value: "1 000 000,00 ₽" },
    ],
  },
  {
    name: "двойной убывающий, второй год",
    inputs: { cost: 1200000, salvage: 200000, life: 5, method: "ddb", year: 2 },
    expectPrimary: "288 000,00 ₽",
    expectSecondary: [
      { label: "Накопленная амортизация", value: "768 000,00 ₽" },
      { label: "Остаточная стоимость", value: "432 000,00 ₽" },
    ],
  },
  {
    name: "сумма чисел лет, последний год",
    inputs: { cost: 1200000, salvage: 200000, life: 5, method: "syd", year: 5 },
    expectPrimary: "66 666,67 ₽",
    expectSecondary: [
      { label: "Накопленная амортизация", value: "1 000 000,00 ₽" },
      { label: "Остаточная стоимость", value: "200 000,00 ₽" },
    ],
  },
  {
    name: "остаточная не ниже стоимости",
    inputs: { cost: 100000, salvage: 100000, life: 5, method: "straight", year: 1 },
    expectPrimary: "—",
  },
  {
    name: "год вне срока службы",
    inputs: { cost: 1200000, salvage: 200000, life: 5, method: "straight", year: 6 },
    expectPrimary: "—",
  },
];
