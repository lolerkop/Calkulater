import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { capacitances: 'Capacitances separated by spaces, µF', mode: 'Connection' },
    options: { series: 'series', parallel: 'parallel' },
    results: {
      'Общая ёмкость': 'Total capacitance', 'Конденсаторов': 'Capacitors', 'Наименьший': 'Smallest',
      'Наибольший': 'Largest', 'Соединение': 'Connection', 'Проверьте данные': 'Check the values',
    },
    values: {
      'мкФ': 'µF', 'последовательное': 'series', 'параллельное': 'parallel',
      'Введите ёмкости через пробел, каждая больше нуля': 'Enter capacitances separated by spaces, each greater than zero',
    },
  },
  uk: {
    fields: { capacitances: 'Ємності через пробіл, мкФ', mode: 'Зʼєднання' },
    options: { series: 'послідовне', parallel: 'паралельне' },
    results: {
      'Общая ёмкость': 'Загальна ємність', 'Конденсаторов': 'Конденсаторів', 'Наименьший': 'Найменший',
      'Наибольший': 'Найбільший', 'Соединение': 'Зʼєднання', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'мкФ': 'мкФ', 'последовательное': 'послідовне', 'параллельное': 'паралельне',
      'Введите ёмкости через пробел, каждая больше нуля': 'Введіть ємності через пробіл, кожна більша за нуль',
    },
  },
};
