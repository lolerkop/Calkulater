import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'n': 'Gliednummer n',
    },
    results: {
      'n-й член': 'n-tes Glied',
      'Сумма ряда': 'Summe der Reihe',
      'Отношение к предыдущему': 'Verhältnis zum vorigen Glied',
      'Предыдущий член': 'Voriges Glied',
      'Членов': 'Glieder',
      'Начало ряда': 'Anfang der Reihe',
      '№': 'Nr.',
      'Значение': 'Wert',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Показаны первые 10 членов ряда.': 'Gezeigt werden die ersten 10 Glieder der Reihe.',
      'Номер члена должен быть не меньше единицы': 'Die Gliednummer muss mindestens eins sein',
      'Номер члена должен быть целым': 'Die Gliednummer muss eine ganze Zahl sein',
      'Номер члена больше 78 выходит за предел точного расчёта': 'Eine Gliednummer über 78 überschreitet die Grenze der genauen Rechnung',
    },
  },
  en: {
    fields: { "n": "Term number n" },
    options: {},
    results: {
      "n-й член": "nth term",
      "Сумма ряда": "Sum of the series",
      "Отношение к предыдущему": "Ratio to the previous term",
      "Предыдущий член": "Previous term",
      "Членов": "Terms",
      "Начало ряда": "Start of the series",
      "№": "No.",
      "Значение": "Value",
      "Проверьте данные": "Check the values",
    },
    values: {
      "Показаны первые 10 членов ряда.": "Showing the first 10 terms of the series.",
      "Номер члена должен быть не меньше единицы": "The term number must be at least one",
      "Номер члена должен быть целым": "The term number must be a whole number",
      "Номер члена больше 78 выходит за предел точного расчёта": "A term number above 78 exceeds the exact-arithmetic limit",
    },
  },
  uk: {
    fields: { "n": "Номер члена n" },
    options: {},
    results: {
      "n-й член": "n-й член",
      "Сумма ряда": "Сума ряду",
      "Отношение к предыдущему": "Відношення до попереднього",
      "Предыдущий член": "Попередній член",
      "Членов": "Членів",
      "Начало ряда": "Початок ряду",
      "№": "№",
      "Значение": "Значення",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "Показаны первые 10 членов ряда.": "Показано перші 10 членів ряду.",
      "Номер члена должен быть не меньше единицы": "Номер члена має бути щонайменше одиниця",
      "Номер члена должен быть целым": "Номер члена має бути цілим",
      "Номер члена больше 78 выходит за предел точного расчёта": "Номер члена понад 78 перевищує межу точного обчислення",
    },
  },
};
