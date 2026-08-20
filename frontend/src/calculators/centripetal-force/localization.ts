import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      m: 'Mass, kg',
      v: 'Speed along the circle, m/s',
      r: 'Radius, m',
    },
    results: {
      'Центростремительная сила': 'Centripetal force',
      'Центростремительное ускорение': 'Centripetal acceleration',
      'Угловая скорость': 'Angular velocity',
      'Период обращения': 'Period of revolution',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Н': 'N', 'м/с²': 'm/s²', 'рад/с': 'rad/s', 'с': 's',
      'Масса должна быть больше нуля': 'The mass must be greater than zero',
      'Радиус должен быть больше нуля': 'The radius must be greater than zero',
    },
  },
  uk: {
    fields: {
      m: 'Маса, кг',
      v: 'Швидкість по колу, м/с',
      r: 'Радіус, м',
    },
    results: {
      'Центростремительная сила': 'Доцентрова сила',
      'Центростремительное ускорение': 'Доцентрове прискорення',
      'Угловая скорость': 'Кутова швидкість',
      'Период обращения': 'Період обертання',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Н': 'Н', 'м/с²': 'м/с²', 'рад/с': 'рад/с', 'с': 'с',
      'Масса должна быть больше нуля': 'Маса має бути більшою за нуль',
      'Радиус должен быть больше нуля': 'Радіус має бути більшим за нуль',
    },
  },
};
