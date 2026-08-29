import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Неизвестный член': 'Unknown term', 'Пропорция': 'Proportion', 'Отношение': 'Ratio',
  'Проверка произведений': 'Cross-product check', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Неизвестный член': 'Невідомий член', 'Пропорция': 'Пропорція', 'Отношение': 'Відношення',
  'Проверка произведений': 'Перевірка добутків', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'find': 'Gesuchtes Glied',
      'a': 'Glied a',
      'b': 'Glied b',
      'c': 'Glied c',
      'd': 'Glied d',
    },
    options: {
      'a': 'Erstes Glied a',
      'b': 'Zweites Glied b',
      'c': 'Drittes Glied c',
      'd': 'Viertes Glied d',
    },
    results: {
      'Неизвестный член': 'Gesuchtes Glied',
      'Пропорция': 'Verhältnisgleichung',
      'Отношение': 'Verhältnis',
      'Проверка произведений': 'Probe über die Kreuzprodukte',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Член, стоящий по диагонали от искомого, не может быть нулём': 'Das Glied schräg gegenüber dem gesuchten kann nicht null sein',
      'Результат вне допустимого диапазона': 'Das Ergebnis liegt außerhalb des zulässigen Bereichs',
    },
  },
  en: {
    fields: { find: 'Term to find', a: 'Term a', b: 'Term b', c: 'Term c', d: 'Term d' },
    options: { a: 'First term a', b: 'Second term b', c: 'Third term c', d: 'Fourth term d' },
    results: RESULTS_EN,
    values: {
      'Член, стоящий по диагонали от искомого, не может быть нулём': 'The term diagonally opposite the unknown cannot be zero',
      'Результат вне допустимого диапазона': 'The result is outside the supported range',
    },
  },
  uk: {
    fields: { find: 'Який член шукати', a: 'Член a', b: 'Член b', c: 'Член c', d: 'Член d' },
    options: { a: 'Перший член a', b: 'Другий член b', c: 'Третій член c', d: 'Четвертий член d' },
    results: RESULTS_UK,
    values: {
      'Член, стоящий по диагонали от искомого, не может быть нулём': 'Член, що стоїть по діагоналі від шуканого, не може бути нулем',
      'Результат вне допустимого диапазона': 'Результат поза допустимим діапазоном',
    },
  },
};
