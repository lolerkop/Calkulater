import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Високосный год': 'Leap year', 'Дней в году': 'Days in the year',
  'Дней в феврале': 'Days in February', 'Следующий високосный': 'Next leap year',
  'Предыдущий високосный': 'Previous leap year', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Високосный год': 'Високосний рік', 'Дней в году': 'Днів у році',
  'Дней в феврале': 'Днів у лютому', 'Следующий високосный': 'Наступний високосний',
  'Предыдущий високосный': 'Попередній високосний', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { year: 'Year' },
    results: RESULTS_EN,
    values: {
      'Да': 'Yes', 'Нет': 'No',
      'Введите целый год начиная с первого': 'Enter a whole year from one onwards',
    },
  },
  uk: {
    fields: { year: 'Рік' },
    results: RESULTS_UK,
    values: {
      'Да': 'Так', 'Нет': 'Ні',
      'Введите целый год начиная с первого': 'Введіть цілий рік починаючи з першого',
    },
  },
};
