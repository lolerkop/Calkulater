import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками.
//   взнос: (1 000 000 − 100 000·(1+i)^60)·i/((1+i)^60 − 1) при i = 8/1200
//   срок: помесячно, пока накопленное не достигнет цели -> 40 месяцев
export const savingsGoalReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "взнос к цели за пять лет под восемь процентов",
    inputs: { "goal": 1000000, "initial": 100000, "mode": "payment", "monthly": 0, "rate": 8, "years": 5 },
    expectPrimary: "11 582,09 ₽",
    expectSecondary: [
      { label: "Месяцев", value: "60" },
      { label: "Всего взносов", value: "694 925,29 ₽" },
      { label: "Итоговая сумма", value: "1 000 000,00 ₽" },
    ],
  },
  {
    name: "срок при взносе десять тысяч под шесть процентов",
    inputs: { "goal": 500000, "initial": 50000, "mode": "term", "monthly": 10000, "rate": 6, "years": 0 },
    expectPrimary: "40 мес",
    expectSecondary: [
      { label: "Итоговая сумма", value: "502 628,18 ₽" },
      { label: "Всего взносов", value: "400 000,00 ₽" },
      { label: "Цель", value: "500 000,00 ₽" },
    ],
  },
  {
    name: "граница: нулевая ставка — просто деление",
    inputs: { "goal": 1000000, "initial": 100000, "mode": "payment", "monthly": 0, "rate": 0, "years": 5 },
    expectPrimary: "15 000,00 ₽",
    expectSecondary: [
      { label: "Месяцев", value: "60" },
      { label: "Всего взносов", value: "900 000,00 ₽" },
      { label: "Итоговая сумма", value: "1 000 000,00 ₽" },
    ],
  },
  {
    name: "режим срока без взноса отклоняется",
    inputs: { "goal": 500000, "initial": 0, "mode": "term", "monthly": 0, "rate": 6, "years": 0 },
    expectPrimary: "—",
  },
  {
    name: "нулевая цель отклоняется",
    inputs: { "goal": 0, "initial": 0, "mode": "payment", "monthly": 0, "rate": 8, "years": 5 },
    expectPrimary: "—",
  },
];
