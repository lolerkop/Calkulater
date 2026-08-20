import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15B:
//   (5·3 + 4·4 + 3·2) / (3 + 4 + 2) = 37 / 9 = 4,1111
//   (4·5 + 5·3 + 3·4 + 5·2) / 14 = 57 / 14 = 4,0714
//   без кредитов все веса равны единице, и средний балл совпадает с простым средним
export const gpaReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "три предмета с разными кредитами",
    inputs: { "grades": "5 3\n4 4\n3 2" },
    expectPrimary: "4,1111",
    expectSecondary: [{ label: "Сумма кредитов", value: "9" }, { label: "Сумма произведений", value: "37" }, { label: "Предметов", value: "3" }, { label: "Простое среднее", value: "4" }],
  },
  {
    name: "четыре предмета",
    inputs: { "grades": "4 5\n5 3\n3 4\n5 2" },
    expectPrimary: "4,0714",
    expectSecondary: [{ label: "Сумма кредитов", value: "14" }, { label: "Предметов", value: "4" }],
  },
  {
    name: "граница: кредиты не заданы — все веса по единице",
    inputs: { "grades": "5\n4\n3" },
    expectPrimary: "4",
    expectSecondary: [{ label: "Сумма кредитов", value: "3" }, { label: "Простое среднее", value: "4" }],
  },
  {
    name: "нечисловая строка отклоняется",
    inputs: { "grades": "отлично 3\n4 4" },
    expectPrimary: "—",
  },
];
