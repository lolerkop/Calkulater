import type { CalculatorReferenceCase } from '../../lib/platform/types';

// Значения выведены независимой моделью Phase 15P и повторно посчитаны в 15B:
//   σ/√n = 15/6 = 2,5; предел 1,96 · 2,5 = 4,9; интервал 95,1 … 104,9
//   8,4/10 = 0,84; 2,576 · 0,84 = 2,16384; 70,33616 … 74,66384
//   нулевое отклонение даёт нулевую ошибку и интервал нулевой ширины
export const confidenceIntervalReferenceCases: readonly CalculatorReferenceCase[] = [
  {
    name: "среднее 100, σ 15, n 36, уровень 95 %",
    inputs: { "mean": 100, "sd": 15, "n": 36, "confidence": "95" },
    expectPrimary: "95,1 … 104,9",
    expectSecondary: [{ label: "Предел погрешности", value: "4,9" }, { label: "Стандартная ошибка", value: "2,5" }, { label: "Критическое значение z", value: "1,96" }],
  },
  {
    name: "среднее 72,5, σ 8,4, n 100, уровень 99 %",
    inputs: { "mean": 72.5, "sd": 8.4, "n": 100, "confidence": "99" },
    expectPrimary: "70,3362 … 74,6638",
    expectSecondary: [{ label: "Предел погрешности", value: "2,1638" }, { label: "Стандартная ошибка", value: "0,84" }],
  },
  {
    name: "граница: нулевое отклонение даёт интервал нулевой ширины",
    inputs: { "mean": 50, "sd": 0, "n": 30, "confidence": "95" },
    expectPrimary: "50 … 50",
    expectSecondary: [{ label: "Предел погрешности", value: "0" }, { label: "Стандартная ошибка", value: "0" }],
  },
  {
    name: "выборка из одного наблюдения отклоняется",
    inputs: { "mean": 100, "sd": 15, "n": 1, "confidence": "95" },
    expectPrimary: "—",
  },
];
