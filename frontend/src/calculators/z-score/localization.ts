import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Z-оценка': 'Z-score', 'Отклонение': 'Deviation', 'Положение': 'Position',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Z-оценка': 'Z-оцінка', 'Отклонение': 'Відхилення', 'Положение': 'Положення',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { x: 'Value', mean: 'Mean', sd: 'Standard deviation' },
    options: {},
    results: RESULTS_EN,
    values: {
      'выше среднего': 'above the mean',
      'ниже среднего': 'below the mean',
      'равно среднему': 'equal to the mean',
      'Стандартное отклонение должно быть больше нуля': 'The standard deviation must be greater than zero',
    },
  },
  uk: {
    fields: { x: 'Значення', mean: 'Середнє', sd: 'Стандартне відхилення' },
    options: {},
    results: RESULTS_UK,
    values: {
      'выше среднего': 'вище за середнє',
      'ниже среднего': 'нижче за середнє',
      'равно среднему': 'дорівнює середньому',
      'Стандартное отклонение должно быть больше нуля': 'Стандартне відхилення має бути більшим за нуль',
    },
  },
};
