import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { fuel: 'Petrol, L', ratio: 'Ratio 1:N' },
    options: {},
    results: {
      'Масла': 'Oil', 'Объём смеси': 'Mixture volume', 'Доля масла': 'Oil share',
      'Соотношение': 'Ratio', 'Бензина': 'Petrol', 'Проверьте данные': 'Check the values',
    },
    values: {
      'мл': 'mL', 'л': 'L',
      'Объём топлива должен быть больше нуля': 'The fuel volume must be greater than zero',
      'Пропорция допустима от 1:20 до 1:100': 'The ratio must be between 1:20 and 1:100',
    },
  },
  uk: {
    fields: { fuel: 'Бензину, л', ratio: 'Пропорція 1:N' },
    options: {},
    results: {
      'Масла': 'Оливи', 'Объём смеси': 'Об’єм суміші', 'Доля масла': 'Частка оливи',
      'Соотношение': 'Співвідношення', 'Бензина': 'Бензину', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'мл': 'мл', 'л': 'л',
      'Объём топлива должен быть больше нуля': 'Об’єм пального має бути більшим за нуль',
      'Пропорция допустима от 1:20 до 1:100': 'Пропорція допустима від 1:20 до 1:100',
    },
  },
};
