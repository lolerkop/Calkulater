import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Латинские имена кейсов заменены русскими —
// на арифметику это не влияет, доходом читается только последний токен.
//   80000 : 120000 из 60000 -> 24000 и 36000
//   поровну на троих из 60000 -> по 20000
//   сто на троих: 33,333… -> 33,33 ×3 = 99,99, копейка к наибольшей доле
export const budgetSplitReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "пропорционально доходу на двоих",
    inputs: { "incomes": "анна 80000\nборис 120000", "mode": "income", "total": 60000 },
    expectPrimary: "36 000,00 ₽",
    expectSecondary: [
      { label: "Наименьший взнос", value: "24 000,00 ₽" },
      { label: "Участников", value: "2" },
      { label: "Проверка суммы", value: "60 000,00 ₽" },
    ],
  },
  {
    name: "поровну на троих",
    inputs: { "incomes": "анна 80000\nборис 120000\nвера 100000", "mode": "equal", "total": 60000 },
    expectPrimary: "20 000,00 ₽",
    expectSecondary: [
      { label: "Наименьший взнос", value: "20 000,00 ₽" },
      { label: "Участников", value: "3" },
      { label: "Проверка суммы", value: "60 000,00 ₽" },
    ],
  },
  {
    name: "граница: сто рублей на троих, копейка дрейфа",
    inputs: { "incomes": "анна 1\nборис 1\nвера 1", "mode": "income", "total": 100 },
    expectPrimary: "33,34 ₽",
    expectSecondary: [
      { label: "Наименьший взнос", value: "33,33 ₽" },
      { label: "Участников", value: "3" },
      { label: "Проверка суммы", value: "100,00 ₽" },
    ],
  },
  {
    name: "нулевая сумма отклоняется",
    inputs: { "incomes": "анна 1", "mode": "equal", "total": 0 },
    expectPrimary: "—",
  },
  {
    name: "нулевой суммарный доход отклоняется",
    inputs: { "incomes": "анна 0\nборис 0", "mode": "income", "total": 100 },
    expectPrimary: "—",
  },
];
