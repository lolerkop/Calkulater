import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'a1': 'Erstes Glied',
      'r': 'Quotient',
      'n': 'Zahl der Glieder',
    },
    results: {
      'n-й член': 'n-tes Glied',
      'Сумма ряда': 'Summe der Reihe',
      'Знаменатель': 'Quotient',
      'Первый член': 'Erstes Glied',
      'Членов': 'Glieder',
      'Сумма бесконечного ряда': 'Summe der unendlichen Reihe',
      'Члены прогрессии': 'Glieder der Folge',
      '№ члена': 'Nr. des Glieds',
      'Значение': 'Wert',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Число членов должно быть целым от 1 до 50': 'Die Zahl der Glieder muss eine ganze Zahl von 1 bis 50 sein',
      'Знаменатель не может быть нулём': 'Der Quotient kann nicht null sein',
      'Ряд выходит за область представимости: уменьшите знаменатель или число членов': 'Die Reihe verlässt den darstellbaren Bereich — verringere den Quotienten oder die Zahl der Glieder',
    },
  },
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
