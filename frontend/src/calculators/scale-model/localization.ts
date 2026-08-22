import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Размер модели': 'Model size', 'Размер натуры': 'Real size', 'Масштаб': 'Scale',
  'Натура больше модели во столько раз': 'The original is larger by a factor of',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Размер модели': 'Розмір моделі', 'Размер натуры': 'Розмір натури', 'Масштаб': 'Масштаб',
  'Натура больше модели во столько раз': 'Натура більша за модель у стільки разів',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      mode: 'What to find', real: 'Real size, mm', model: 'Model size, mm',
      scale: 'Scale denominator, 1:N',
    },
    options: { toModel: 'model size', toReal: 'real size', findScale: 'scale' },
    results: RESULTS_EN,
    values: {
      'мм': 'mm',
      'Знаменатель масштаба должен быть больше нуля': 'The scale denominator must be greater than zero',
      'Размер модели должен быть больше нуля': 'The model size must be greater than zero',
      'Размер натуры должен быть больше нуля': 'The real size must be greater than zero',
    },
  },
  uk: {
    fields: {
      mode: 'Що знайти', real: 'Розмір натури, мм', model: 'Розмір моделі, мм',
      scale: 'Знаменник масштабу, 1:N',
    },
    options: { toModel: 'розмір моделі', toReal: 'розмір натури', findScale: 'масштаб' },
    results: RESULTS_UK,
    values: {
      'мм': 'мм',
      'Знаменатель масштаба должен быть больше нуля': 'Знаменник масштабу має бути більшим за нуль',
      'Размер модели должен быть больше нуля': 'Розмір моделі має бути більшим за нуль',
      'Размер натуры должен быть больше нуля': 'Розмір натури має бути більшим за нуль',
    },
  },
};
