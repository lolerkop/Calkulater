import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Сила на втором плече': 'Force on the second arm', 'Второе плечо': 'Second arm',
  'Выигрыш в силе': 'Mechanical advantage', 'Момент первой силы': 'Moment of the first force',
  'Первое плечо': 'First arm', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Сила на втором плече': 'Сила на другому плечі', 'Второе плечо': 'Друге плече',
  'Выигрыш в силе': 'Виграш у силі', 'Момент первой силы': 'Момент першої сили',
  'Первое плечо': 'Перше плече', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      mode: 'What to find', f1: 'Force on the first arm, N', d1: 'First arm, m',
      d2: 'Second arm, m', f2: 'Force on the second arm, N',
    },
    options: { force2: 'the force on the second arm', distance2: 'the length of the second arm' },
    results: RESULTS_EN,
    values: {
      'Н·м': 'N·m', 'Н': 'N', 'м': 'm',
      'Первое плечо должно быть больше нуля': 'The first arm must be greater than zero',
      'Второе плечо должно быть больше нуля': 'The second arm must be greater than zero',
      'Вторая сила должна быть больше нуля': 'The second force must be greater than zero',
    },
  },
  uk: {
    fields: {
      mode: 'Що знайти', f1: 'Сила на першому плечі, Н', d1: 'Перше плече, м',
      d2: 'Друге плече, м', f2: 'Сила на другому плечі, Н',
    },
    options: { force2: 'силу на другому плечі', distance2: 'довжину другого плеча' },
    results: RESULTS_UK,
    values: {
      'Н·м': 'Н·м', 'Н': 'Н', 'м': 'м',
      'Первое плечо должно быть больше нуля': 'Перше плече має бути більшим за нуль',
      'Второе плечо должно быть больше нуля': 'Друге плече має бути більшим за нуль',
      'Вторая сила должна быть больше нуля': 'Друга сила має бути більшою за нуль',
    },
  },
};
