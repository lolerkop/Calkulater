import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'values': 'Zahlen mit Leerzeichen oder Zeilenumbrüchen getrennt',
    },
    results: {
      'Медиана': 'Median',
      'Первый квартиль': 'Erstes Quartil',
      'Третий квартиль': 'Drittes Quartil',
      'Межквартильный размах': 'Interquartilsabstand',
      'Границы усов': 'Whisker-Grenzen',
      'Выбросов': 'Ausreißer',
      'Значений': 'Werte',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Введите числа через пробел или с новой строки': 'Trage Zahlen mit Leerzeichen oder Zeilenumbrüchen getrennt ein',
      'Нужно не меньше четырёх значений': 'Es werden mindestens vier Werte gebraucht',
    },
  },
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
