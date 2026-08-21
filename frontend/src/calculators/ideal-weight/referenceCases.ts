import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения зафиксированы независимой моделью Phase 19P (refmodel.py) и
// перенесены сюда машинно: разряды и неразрывные пробелы собраны
// форматтером, а не руками. Имена полей приведены к именам определения.
//   180 см = 70,866 дюйма, свыше пяти футов 10,866
//   Девайн 50 + 2,3×10,866 = 74,992; среднее четырёх 74,124
export const idealWeightReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "мужчина ста восьмидесяти сантиметров",
    inputs: { "height": 180, "sex": "male" },
    expectPrimary: "74,124 кг",
    expectSecondary: [
      { label: "Девайн", value: "74,992 кг" },
      { label: "Робинсон", value: "72,646 кг" },
      { label: "Миллер", value: "71,521 кг" },
      { label: "Хамви", value: "77,339 кг" },
    ],
  },
  {
    name: "женщина ста шестидесяти пяти сантиметров",
    inputs: { "height": 165, "sex": "female" },
    expectPrimary: "57,651 кг",
    expectSecondary: [
      { label: "Девайн", value: "56,909 кг" },
      { label: "Робинсон", value: "57,433 кг" },
      { label: "Миллер", value: "59,846 кг" },
      { label: "Хамви", value: "56,413 кг" },
    ],
  },
  {
    name: "граница: нижний край диапазона роста",
    inputs: { "height": 120, "sex": "male" },
    expectPrimary: "51,55 кг",
    expectSecondary: [
      { label: "Девайн", value: "50 кг" },
      { label: "Робинсон", value: "52 кг" },
      { label: "Миллер", value: "56,2 кг" },
      { label: "Хамви", value: "48 кг" },
    ],
  },
  {
    name: "рост ниже границы отклоняется",
    inputs: { "height": 119, "sex": "male" },
    expectPrimary: "—",
  },
  {
    name: "неизвестный пол отклоняется",
    inputs: { "height": 180, "sex": "other" },
    expectPrimary: "—",
  },
];
