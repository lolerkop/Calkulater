import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 17P (refmodel.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
export const cogsReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "запас 320 000, закупки 780 000, остаток 415 000",
    inputs: {"beginInventory": 320000, "endInventory": 415000, "purchases": 780000},
    expectPrimary: "685 000,00 ₽",
    expectSecondary: [{ label: "Доступно к продаже", value: "1 100 000,00 ₽" }, { label: "Запас на начало", value: "320 000,00 ₽" }, { label: "Закупки", value: "780 000,00 ₽" }, { label: "Запас на конец", value: "415 000,00 ₽" }],
  },
  {
    name: "запас 54 000, закупки 128 500, остаток 61 200",
    inputs: {"beginInventory": 54000, "endInventory": 61200, "purchases": 128500},
    expectPrimary: "121 300,00 ₽",
    expectSecondary: [{ label: "Доступно к продаже", value: "182 500,00 ₽" }, { label: "Запас на начало", value: "54 000,00 ₽" }, { label: "Закупки", value: "128 500,00 ₽" }, { label: "Запас на конец", value: "61 200,00 ₽" }],
  },
  {
    name: "остаток равен доступному — нулевая себестоимость",
    inputs: {"beginInventory": 100000, "endInventory": 150000, "purchases": 50000},
    expectPrimary: "0,00 ₽",
    expectSecondary: [{ label: "Доступно к продаже", value: "150 000,00 ₽" }, { label: "Запас на начало", value: "100 000,00 ₽" }, { label: "Закупки", value: "50 000,00 ₽" }, { label: "Запас на конец", value: "150 000,00 ₽" }],
  },
  {
    name: "остаток больше доступного отклоняется",
    inputs: {"beginInventory": 10, "endInventory": 100, "purchases": 10},
    expectPrimary: "—",
  },
];
