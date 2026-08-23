import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения закреплены Phase 22P (refcases.json) и выведены независимой
// моделью на Python. Файл СГЕНЕРИРОВАН из артефакта: ожидания несут
// неразрывные пробелы, и ручная перепечатка их портит.
export const paperQuantityReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "пачка A4 по 80 г/м², 500 листов",
    inputs: { format: "a4", grammage: 80, sheets: 500 },
    expectPrimary: "2,495 кг",
    expectSecondary: [
      { label: "Масса одного листа", value: "4,99 г" },
      { label: "Площадь листа", value: "0,0624 м²" },
      { label: "Размер листа", value: "210×297 мм" },
      { label: "Листов в килограмме", value: "200,42 шт" },
    ],
  },
  {
    name: "плотная A3 по 200 г/м², 100 листов",
    inputs: { format: "a3", grammage: 200, sheets: 100 },
    expectPrimary: "2,495 кг",
    expectSecondary: [
      { label: "Масса одного листа", value: "24,948 г" },
      { label: "Площадь листа", value: "0,1247 м²" },
      { label: "Размер листа", value: "297×420 мм" },
      { label: "Листов в килограмме", value: "40,083 шт" },
    ],
  },
  {
    name: "граница: один лист A0",
    inputs: { format: "a0", grammage: 80, sheets: 1 },
    expectPrimary: "0,08 кг",
    expectSecondary: [
      { label: "Масса одного листа", value: "79,996 г" },
      { label: "Площадь листа", value: "0,9999 м²" },
      { label: "Размер листа", value: "841×1189 мм" },
      { label: "Листов в килограмме", value: "12,501 шт" },
    ],
  },
  {
    name: "нулевая плотность отклоняется",
    inputs: { format: "a4", grammage: 0, sheets: 500 },
    expectPrimary: "—",
  },
  {
    name: "неизвестный формат отклоняется",
    inputs: { format: "b5", grammage: 80, sheets: 500 },
    expectPrimary: "—",
  },
];
