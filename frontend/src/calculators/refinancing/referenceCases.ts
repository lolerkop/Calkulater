import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Имена полей приведены к именам определения.
//   2 000 000 под 14 % и 10 % на 120 месяцев, расходы 30 000 -> выгода 524 776,76
//   удлинение срока 48 -> 60 при 18 -> 16 % даёт МИНУС 39 266,76: платёж ниже, переплата выше
export const refinancingReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "выгодное рефинансирование на том же сроке",
    inputs: { "balance": 2000000, "fee": 30000, "newMonths": 120, "newRate": 10, "oldMonths": 120, "oldRate": 14 },
    expectPrimary: "524 776,76 ₽",
    expectSecondary: [
      { label: "Платёж сейчас", value: "31 053,29 ₽" },
      { label: "Платёж после", value: "26 430,15 ₽" },
      { label: "Итого сейчас", value: "3 726 394,44 ₽" },
      { label: "Итого после", value: "3 201 617,69 ₽" },
    ],
  },
  {
    name: "удлинение срока даёт отрицательную выгоду",
    inputs: { "balance": 800000, "fee": 0, "newMonths": 60, "newRate": 16, "oldMonths": 48, "oldRate": 18 },
    expectPrimary: "-39 266,76 ₽",
    expectSecondary: [
      { label: "Платёж сейчас", value: "23 500,00 ₽" },
      { label: "Платёж после", value: "19 454,45 ₽" },
      { label: "Итого сейчас", value: "1 127 999,98 ₽" },
      { label: "Итого после", value: "1 167 266,74 ₽" },
    ],
  },
  {
    name: "граница: нулевые ставки — просто деление",
    inputs: { "balance": 100000, "fee": 0, "newMonths": 12, "newRate": 0, "oldMonths": 12, "oldRate": 0 },
    expectPrimary: "0,00 ₽",
    expectSecondary: [
      { label: "Платёж сейчас", value: "8 333,33 ₽" },
      { label: "Платёж после", value: "8 333,33 ₽" },
      { label: "Итого сейчас", value: "100 000,00 ₽" },
      { label: "Итого после", value: "100 000,00 ₽" },
    ],
  },
  {
    name: "нулевой остаток отклоняется",
    inputs: { "balance": 0, "fee": 0, "newMonths": 120, "newRate": 10, "oldMonths": 120, "oldRate": 14 },
    expectPrimary: "—",
  },
  {
    name: "нулевой срок отклоняется",
    inputs: { "balance": 100000, "fee": 0, "newMonths": 12, "newRate": 10, "oldMonths": 0, "oldRate": 14 },
    expectPrimary: "—",
  },
];
