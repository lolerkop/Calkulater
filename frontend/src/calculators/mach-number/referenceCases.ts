import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const machNumberReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { v: 900, t: -50 },
    expectPrimary: "0,8349",
    expectSecondary: [
      { label: "Скорость звука", value: "299,45 м/с" },
      { label: "Режим", value: "околозвуковой" },
      { label: "Скорость в метрах в секунду", value: "250 м/с" },
      { label: "Скорость звука в километрах в час", value: "1 078,01 км/ч" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { v: 2400, t: 15 },
    expectPrimary: "1,959",
    expectSecondary: [
      { label: "Скорость звука", value: "340,28 м/с" },
      { label: "Режим", value: "сверхзвуковой" },
      { label: "Скорость в метрах в секунду", value: "666,67 м/с" },
      { label: "Скорость звука в километрах в час", value: "1 224,99 км/ч" },
    ],
  },
  {
    name: "граница 3",
    inputs: { v: 0, t: 20 },
    expectPrimary: "0",
    expectSecondary: [
      { label: "Скорость звука", value: "343,21 м/с" },
      { label: "Режим", value: "дозвуковой" },
      { label: "Скорость в метрах в секунду", value: "0 м/с" },
      { label: "Скорость звука в километрах в час", value: "1 235,57 км/ч" },
    ],
  },
  {
    name: "поле не принимает отрицательные значения",
    inputs: { v: -10, t: 20 },
    expectPrimary: "—",
  },
  {
    name: "температура вне диапазона от −80 до 80 °C",
    inputs: { v: 900, t: 200 },
    expectPrimary: "—",
  },
];
