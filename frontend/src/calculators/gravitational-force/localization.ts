import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      m1: 'First mass, kg',
      m2: 'Second mass, kg',
      r: 'Distance between centres, m',
    },
    results: {
      'Сила притяжения': 'Gravitational force',
      'Ускорение первого тела': 'Acceleration of the first body',
      'Расстояние': 'Distance',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Н': 'N', 'м/с²': 'm/s²', 'м': 'm',
      'Первая масса должна быть больше нуля': 'The first mass must be greater than zero',
      'Вторая масса должна быть больше нуля': 'The second mass must be greater than zero',
      'Расстояние должно быть больше нуля': 'The distance must be greater than zero',
    },
  },
  uk: {
    fields: {
      m1: 'Перша маса, кг',
      m2: 'Друга маса, кг',
      r: 'Відстань між центрами, м',
    },
    results: {
      'Сила притяжения': 'Сила притягання',
      'Ускорение первого тела': 'Прискорення першого тіла',
      'Расстояние': 'Відстань',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Н': 'Н', 'м/с²': 'м/с²', 'м': 'м',
      'Первая масса должна быть больше нуля': 'Перша маса має бути більшою за нуль',
      'Вторая масса должна быть больше нуля': 'Друга маса має бути більшою за нуль',
      'Расстояние должно быть больше нуля': 'Відстань має бути більшою за нуль',
    },
  },
};
