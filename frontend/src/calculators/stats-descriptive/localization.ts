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
};
