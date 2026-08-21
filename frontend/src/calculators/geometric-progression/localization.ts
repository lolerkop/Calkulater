import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { "a1": "First term", "r": "Common ratio", "n": "Number of terms" },
    options: {},
    results: {
      "n-й член": "n-th term",
      "Сумма ряда": "Sum of the series",
      "Знаменатель": "Common ratio",
      "Первый член": "First term",
      "Членов": "Terms",
      "Сумма бесконечного ряда": "Sum of the infinite series",
      "Члены прогрессии": "Terms of the progression",
      "№ члена": "Term no.",
      "Значение": "Value",
      "Проверьте данные": "Check the values",
    },
    values: {
      "Число членов должно быть целым от 1 до 50": "The number of terms must be a whole number from 1 to 50",
      "Знаменатель не может быть нулём": "The common ratio cannot be zero",
      "Ряд выходит за область представимости: уменьшите знаменатель или число членов": "The series leaves the representable range — reduce the ratio or the number of terms",
    },
  },
  uk: {
    fields: { "a1": "Перший член", "r": "Знаменник", "n": "Кількість членів" },
    options: {},
    results: {
      "n-й член": "n-й член",
      "Сумма ряда": "Сума ряду",
      "Знаменатель": "Знаменник",
      "Первый член": "Перший член",
      "Членов": "Членів",
      "Сумма бесконечного ряда": "Сума нескінченного ряду",
      "Члены прогрессии": "Члени прогресії",
      "№ члена": "№ члена",
      "Значение": "Значення",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "Число членов должно быть целым от 1 до 50": "Кількість членів має бути цілим числом від 1 до 50",
      "Знаменатель не может быть нулём": "Знаменник не може дорівнювати нулю",
      "Ряд выходит за область представимости: уменьшите знаменатель или число членов": "Ряд виходить за межі представимості — зменште знаменник або кількість членів",
    },
  },
};
