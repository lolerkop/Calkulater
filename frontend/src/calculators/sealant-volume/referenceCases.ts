import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const sealantVolumeReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { width: 6, depth: 6, length: 12, cart: 310, waste: 10 },
    expectPrimary: "475,2 мл",
    expectSecondary: [
      { label: "Без запаса", value: "432 мл" },
      { label: "Картриджей", value: "2 шт" },
      { label: "Метров из одного картриджа", value: "8,611 м" },
      { label: "Сечение шва", value: "36 мм²" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { width: 10, depth: 8, length: 5, cart: 600, waste: 5 },
    expectPrimary: "420 мл",
    expectSecondary: [
      { label: "Без запаса", value: "400 мл" },
      { label: "Картриджей", value: "1 шт" },
      { label: "Метров из одного картриджа", value: "7,5 м" },
      { label: "Сечение шва", value: "80 мм²" },
    ],
  },
  {
    name: "граница 3",
    inputs: { width: 4, depth: 4, length: 1, cart: 310, waste: 0 },
    expectPrimary: "16 мл",
    expectSecondary: [
      { label: "Без запаса", value: "16 мл" },
      { label: "Картриджей", value: "1 шт" },
      { label: "Метров из одного картриджа", value: "19,375 м" },
      { label: "Сечение шва", value: "16 мм²" },
    ],
  },
  {
    name: "ширина шва должна быть больше нуля",
    inputs: { width: 0, depth: 6, length: 12, cart: 310, waste: 10 },
    expectPrimary: "—",
  },
  {
    name: "объём картриджа должен быть больше нуля",
    inputs: { width: 6, depth: 6, length: 12, cart: 0, waste: 10 },
    expectPrimary: "—",
  },
];
