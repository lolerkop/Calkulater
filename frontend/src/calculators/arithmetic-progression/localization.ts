import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'a1': 'Erstes Glied a₁',
      'd': 'Differenz d',
      'n': 'Gliednummer n',
    },
    results: {
      'n-й член': 'n-tes Glied',
      'Сумма ряда': 'Summe der Reihe',
      'Разность': 'Differenz',
      'Первый член': 'Erstes Glied',
      'Членов': 'Glieder',
      'Первые члены ряда': 'Erste Glieder der Reihe',
      '№ члена': 'Nr. des Glieds',
      'Значение': 'Wert',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Показаны первые 10 членов ряда.': 'Gezeigt werden die ersten 10 Glieder der Reihe.',
      'Номер члена должен быть не меньше единицы': 'Die Gliednummer muss mindestens eins sein',
      'Номер члена должен быть целым': 'Die Gliednummer muss eine ganze Zahl sein',
    },
  },
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
  es: {
    fields: {
      "a1": "Primer término a₁",
      "d": "Diferencia d",
      "n": "Número de término n",
    },
    options: {},
    results: {
      "n-й член": "Término n-ésimo",
      "Сумма ряда": "Suma de la serie",
      "Разность": "Diferencia",
      "Первый член": "Primer término",
      "Членов": "Términos",
      "Первые члены ряда": "Primeros términos de la serie",
      "№ члена": "N.º de término",
      "Значение": "Valor",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Показаны первые 10 членов ряда.": "Se muestran los 10 primeros términos de la serie.",
      "Номер члена должен быть не меньше единицы": "El número de término debe ser al menos uno",
      "Номер члена должен быть целым": "El número de término debe ser un número entero",
    },
  },
};
