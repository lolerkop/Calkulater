import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { "a1": "First term a₁", "d": "Common difference d", "n": "Term number n" },
    options: {},
    results: {
      "n-й член": "nth term",
      "Сумма ряда": "Sum of the series",
      "Разность": "Common difference",
      "Первый член": "First term",
      "Членов": "Terms",
      "Первые члены ряда": "First terms of the series",
      "№ члена": "Term no.",
      "Значение": "Value",
      "Проверьте данные": "Check the values",
    },
    values: {
      "Показаны первые 10 членов ряда.": "Showing the first 10 terms of the series.",
      "Номер члена должен быть не меньше единицы": "The term number must be at least one",
      "Номер члена должен быть целым": "The term number must be a whole number",
    },
  },
  uk: {
    fields: { "a1": "Перший член a₁", "d": "Різниця d", "n": "Номер члена n" },
    options: {},
    results: {
      "n-й член": "n-й член",
      "Сумма ряда": "Сума ряду",
      "Разность": "Різниця",
      "Первый член": "Перший член",
      "Членов": "Членів",
      "Первые члены ряда": "Перші члени ряду",
      "№ члена": "№ члена",
      "Значение": "Значення",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "Показаны первые 10 членов ряда.": "Показано перші 10 членів ряду.",
      "Номер члена должен быть не меньше единицы": "Номер члена має бути щонайменше одиниця",
      "Номер члена должен быть целым": "Номер члена має бути цілим",
    },
  },
};
