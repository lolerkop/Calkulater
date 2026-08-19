import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц не трогается.
const RESULTS_EN = {
  'Большая часть': 'Larger part',
  'Меньшая часть': 'Smaller part',
  'Больший отрезок': 'Larger segment',
  'Меньший отрезок': 'Smaller segment',
  'φ': 'φ',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Большая часть': 'Більша частина',
  'Меньшая часть': 'Менша частина',
  'Больший отрезок': 'Більший відрізок',
  'Меньший отрезок': 'Менший відрізок',
  'φ': 'φ',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { mode: 'What you need', total: 'Segment length', a: 'Known size', },
    options: { split: 'split a segment', grow: 'find the partner', },
    results: RESULTS_EN,
    values: {
      'Значение должно быть больше нуля': 'The value must be greater than zero',
      'Длина отрезка должна быть больше нуля': 'The segment length must be greater than zero',
    },
  },
  uk: {
    fields: { mode: 'Що потрібно', total: 'Довжина відрізка', a: 'Відомий розмір', },
    options: { split: 'поділити відрізок', grow: 'підібрати партнера', },
    results: RESULTS_UK,
    values: {
      'Значение должно быть больше нуля': 'Значення має бути більшим за нуль',
      'Длина отрезка должна быть больше нуля': 'Довжина відрізка має бути більшою за нуль',
    },
  },
};
