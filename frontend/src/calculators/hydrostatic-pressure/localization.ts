import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц не трогается.
const RESULTS_EN = {
  'Давление': 'Pressure',
  'В барах': 'In bar',
  'Тип давления': 'Pressure type',
  'Давление столба': 'Column pressure',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Давление': 'Тиск',
  'В барах': 'У барах',
  'Тип давления': 'Тип тиску',
  'Давление столба': 'Тиск стовпа',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { density: 'Liquid density, kg/m³', depth: 'Depth, m', p0: 'External pressure, Pa', },
    options: { },
    results: RESULTS_EN,
    values: {
      ' Па': ' Pa',
      ' бар': ' bar',
      'избыточное': 'gauge',
      'абсолютное': 'absolute',
      'Плотность должна быть больше нуля': 'The density must be greater than zero',
      'Глубина не может быть отрицательной': 'The depth cannot be negative',
      'Внешнее давление не может быть отрицательным': 'The external pressure cannot be negative',
    },
  },
  uk: {
    fields: { density: 'Густина рідини, кг/м³', depth: 'Глибина, м', p0: 'Зовнішній тиск, Па', },
    options: { },
    results: RESULTS_UK,
    values: {
      ' Па': ' Па',
      ' бар': ' бар',
      'избыточное': 'надлишковий',
      'абсолютное': 'абсолютний',
      'Плотность должна быть больше нуля': 'Густина має бути більшою за нуль',
      'Глубина не может быть отрицательной': 'Глибина не може бути від’ємною',
      'Внешнее давление не может быть отрицательным': 'Зовнішній тиск не може бути від’ємним',
    },
  },
};
