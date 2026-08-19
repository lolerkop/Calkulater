import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Взвешенное среднее': 'Weighted mean', 'Сумма весов': 'Sum of weights',
  'Сумма произведений': 'Sum of products', 'Количество пар': 'Pairs',
  'Проверьте данные': 'Check the values', 'Строка не разобрана': 'Line not understood',
};
const RESULTS_UK = {
  'Взвешенное среднее': 'Зважене середнє', 'Сумма весов': 'Сума ваг',
  'Сумма произведений': 'Сума добутків', 'Количество пар': 'Кількість пар',
  'Проверьте данные': 'Перевірте дані', 'Строка не разобрана': 'Рядок не розібрано',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { pairs: 'Value and weight pairs — one per line' },
    options: {},
    results: RESULTS_EN,
    values: {
      'Введите хотя бы одну пару «значение вес»': 'Enter at least one value and weight pair',
      'Сумма весов должна быть больше нуля': 'The sum of the weights must be greater than zero',
    },
  },
  uk: {
    fields: { pairs: 'Пари «значення вага» — по одній у рядку' },
    options: {},
    results: RESULTS_UK,
    values: {
      'Введите хотя бы одну пару «значение вес»': 'Введіть щонайменше одну пару «значення вага»',
      'Сумма весов должна быть больше нуля': 'Сума ваг має бути більшою за нуль',
    },
  },
};
