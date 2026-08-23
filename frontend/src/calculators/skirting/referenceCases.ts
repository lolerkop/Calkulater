import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 23P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const skirtingReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "обычный 1",
    inputs: { length: 5.2, width: 3.4, doors: 2, doorWidth: 0.9, plank: 2.5, waste: 5 },
    expectPrimary: "16,17 м",
    expectSecondary: [
      { label: "Периметр комнаты", value: "17,2 м" },
      { label: "Вычет на проёмы", value: "1,8 м" },
      { label: "Планок", value: "7 шт" },
      { label: "Куплено с запасом", value: "17,5 м" },
    ],
  },
  {
    name: "обычный 2",
    inputs: { length: 4, width: 4, doors: 1, doorWidth: 0.8, plank: 2, waste: 10 },
    expectPrimary: "16,72 м",
    expectSecondary: [
      { label: "Периметр комнаты", value: "16 м" },
      { label: "Вычет на проёмы", value: "0,8 м" },
      { label: "Планок", value: "9 шт" },
      { label: "Куплено с запасом", value: "18 м" },
    ],
  },
  {
    name: "граница 3",
    inputs: { length: 3, width: 3, doors: 0, doorWidth: 0, plank: 2.5, waste: 0 },
    expectPrimary: "12 м",
    expectSecondary: [
      { label: "Периметр комнаты", value: "12 м" },
      { label: "Вычет на проёмы", value: "0 м" },
      { label: "Планок", value: "5 шт" },
      { label: "Куплено с запасом", value: "12,5 м" },
    ],
  },
  {
    name: "длина комнаты должна быть больше нуля",
    inputs: { length: 0, width: 3, doors: 0, doorWidth: 0, plank: 2.5, waste: 0 },
    expectPrimary: "—",
  },
  {
    name: "проёмы длиннее периметра — проверьте данные",
    inputs: { length: 3, width: 3, doors: 10, doorWidth: 1.5, plank: 2.5, waste: 0 },
    expectPrimary: "—",
  },
];
