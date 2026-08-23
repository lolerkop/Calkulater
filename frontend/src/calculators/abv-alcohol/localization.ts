import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { og: 'Original gravity', fg: 'Final gravity', factor: 'Conversion factor' },
    options: {},
    results: {
      'Крепость': 'Alcohol by volume', 'Степень сбраживания': 'Apparent attenuation',
      'Падение плотности': 'Gravity drop', 'Начальная плотность': 'Original gravity',
      'Конечная плотность': 'Final gravity', 'Проверьте данные': 'Check the values',
    },
    values: {
      'Начальная плотность должна быть больше единицы': 'The original gravity must be greater than one',
      'Конечная плотность должна быть больше нуля': 'The final gravity must be greater than zero',
      'Конечная плотность не может быть выше начальной': 'The final gravity cannot exceed the original gravity',
    },
  },
  uk: {
    fields: { og: 'Початкова щільність', fg: 'Кінцева щільність', factor: 'Коефіцієнт перерахунку' },
    options: {},
    results: {
      'Крепость': 'Міцність', 'Степень сбраживания': 'Ступінь зброджування',
      'Падение плотности': 'Падіння щільності', 'Начальная плотность': 'Початкова щільність',
      'Конечная плотность': 'Кінцева щільність', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Начальная плотность должна быть больше единицы': 'Початкова щільність має бути більшою за одиницю',
      'Конечная плотность должна быть больше нуля': 'Кінцева щільність має бути більшою за нуль',
      'Конечная плотность не может быть выше начальной': 'Кінцева щільність не може бути вищою за початкову',
    },
  },
};
