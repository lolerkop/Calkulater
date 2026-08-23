import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { values: 'Numbers separated by spaces or new lines' },
    options: {},
    results: {
      'Медиана': 'Median', 'Первый квартиль': 'First quartile', 'Третий квартиль': 'Third quartile',
      'Межквартильный размах': 'Interquartile range', 'Границы усов': 'Whisker bounds',
      'Выбросов': 'Outliers', 'Значений': 'Values', 'Проверьте данные': 'Check the values',
    },
    values: {
      'Введите числа через пробел или с новой строки': 'Enter numbers separated by spaces or new lines',
      'Нужно не меньше четырёх значений': 'At least four values are needed',
    },
  },
  uk: {
    fields: { values: 'Числа через пробіл або з нового рядка' },
    options: {},
    results: {
      'Медиана': 'Медіана', 'Первый квартиль': 'Перший квартиль', 'Третий квартиль': 'Третій квартиль',
      'Межквартильный размах': 'Міжквартильний розмах', 'Границы усов': 'Межі вусів',
      'Выбросов': 'Викидів', 'Значений': 'Значень', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Введите числа через пробел или с новой строки': 'Введіть числа через пробіл або з нового рядка',
      'Нужно не меньше четырёх значений': 'Потрібно щонайменше чотири значення',
    },
  },
};
