import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 16P (refcases.py)
// и перенесены сюда машинно, без ручного переписывания разрядов.
//   вес = мука · процент / 100; тесто = мука + сумма весов
//   гидратация = вес воды / вес муки
export const bakersPercentageReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "500 г муки, гидратация 68 %",
    inputs: { "flour": 500, "ingredients": "вода 68\nсоль 2\nдрожжи 1,2" },
    expectPrimary: "856 г",
    expectSecondary: [{ label: "Гидратация", value: "68,00%" }, { label: "Мука", value: "500 г" }],
  },
  {
    name: "1200 г муки, гидратация 75 %",
    inputs: { "flour": 1200, "ingredients": "вода 75\nсоль 2,2\nзакваска 20" },
    expectPrimary: "2 366,4 г",
    expectSecondary: [{ label: "Гидратация", value: "75,00%" }, { label: "Мука", value: "1 200 г" }],
  },
  {
    name: "только мука и соль",
    inputs: { "flour": 300, "ingredients": "соль 2" },
    expectPrimary: "306 г",
    expectSecondary: [{ label: "Гидратация", value: "0,00%" }, { label: "Мука", value: "300 г" }],
  },
  {
    name: "нулевой вес муки отклоняется",
    inputs: { "flour": 0, "ingredients": "вода 68\nсоль 2\nдрожжи 1,2" },
    expectPrimary: "—",
  },
];
