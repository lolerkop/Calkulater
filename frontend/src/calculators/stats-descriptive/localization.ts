import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Среднее': 'Mean', 'Количество': 'Count', 'Сумма': 'Sum', 'Медиана': 'Median', 'Мода': 'Mode',
  'Минимум': 'Minimum', 'Максимум': 'Maximum', 'Размах': 'Range', 'Дисперсия': 'Variance',
  'Стандартное отклонение': 'Standard deviation',
  'Проверьте данные': 'Check the values', 'Не число': 'Not a number',
};
const RESULTS_UK = {
  'Среднее': 'Середнє', 'Количество': 'Кількість', 'Сумма': 'Сума', 'Медиана': 'Медіана', 'Мода': 'Мода',
  'Минимум': 'Мінімум', 'Максимум': 'Максимум', 'Размах': 'Розмах', 'Дисперсия': 'Дисперсія',
  'Стандартное отклонение': 'Стандартне відхилення',
  'Проверьте данные': 'Перевірте дані', 'Не число': 'Не число',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'values': 'Zahlen — eine je Zeile oder mit Leerzeichen getrennt',
      'mode': 'Varianz',
    },
    options: {
      'sample': 'Stichprobe (n−1)',
      'population': 'Grundgesamtheit (n)',
    },
    results: {
      'Среднее': 'Mittelwert',
      'Количество': 'Anzahl',
      'Сумма': 'Summe',
      'Медиана': 'Median',
      'Мода': 'Modus',
      'Минимум': 'Kleinster Wert',
      'Максимум': 'Größter Wert',
      'Размах': 'Spannweite',
      'Дисперсия': 'Varianz',
      'Стандартное отклонение': 'Standardabweichung',
      'Проверьте данные': 'Prüfe die Werte',
      'Не число': 'Keine Zahl',
    },
    values: {
      'Введите хотя бы одно число': 'Trage mindestens eine Zahl ein',
    },
  },
  en: {
    fields: { values: 'Numbers — one per line or separated by spaces', mode: 'Variance' },
    options: { sample: 'sample (n−1)', population: 'population (n)' },
    results: RESULTS_EN,
    values: { 'Введите хотя бы одно число': 'Enter at least one number' },
  },
  uk: {
    fields: { values: 'Числа — по одному в рядку або через пропуск', mode: 'Дисперсія' },
    options: { sample: 'вибіркова (n−1)', population: 'генеральна (n)' },
    results: RESULTS_UK,
    values: { 'Введите хотя бы одно число': 'Введіть щонайменше одне число' },
  },
  es: {
    fields: {
      "values": "Números: uno por línea o separados por espacios",
      "mode": "Varianza",
    },
    options: {
      "sample": "muestral (n−1)",
      "population": "poblacional (n)",
    },
    results: {
      "Среднее": "Media",
      "Количество": "Cantidad",
      "Сумма": "Suma",
      "Медиана": "Mediana",
      "Мода": "Moda",
      "Минимум": "Mínimo",
      "Максимум": "Máximo",
      "Размах": "Rango",
      "Дисперсия": "Varianza",
      "Стандартное отклонение": "Desviación típica",
      "Не число": "No es un número",
      "Проверьте данные": "Revisa los datos",
    },
    values: {
      "Введите хотя бы одно число": "Introduce al menos un número",
    },
  },
};
