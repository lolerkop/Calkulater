import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { mass24: 'Body mass, ×10²⁴ kg', radiusKm: 'Radius, km' },
    options: {},
    results: {
      'Вторая космическая скорость': 'Escape velocity', 'Первая космическая скорость': 'Orbital velocity',
      'В километрах в час': 'In kilometres per hour',
      'Ускорение свободного падения': 'Surface gravity', 'Масса тела': 'Body mass',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'м/с': 'm/s', 'км/ч': 'km/h', 'м/с²': 'm/s²', 'кг': 'kg',
      'Масса должна быть больше нуля': 'The mass must be greater than zero',
      'Радиус должен быть больше нуля': 'The radius must be greater than zero',
    },
  },
  uk: {
    fields: { mass24: 'Маса тіла, ×10²⁴ кг', radiusKm: 'Радіус, км' },
    options: {},
    results: {
      'Вторая космическая скорость': 'Друга космічна швидкість',
      'Первая космическая скорость': 'Перша космічна швидкість',
      'В километрах в час': 'У кілометрах за годину',
      'Ускорение свободного падения': 'Прискорення вільного падіння', 'Масса тела': 'Маса тіла',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'м/с': 'м/с', 'км/ч': 'км/год', 'м/с²': 'м/с²', 'кг': 'кг',
      'Масса должна быть больше нуля': 'Маса має бути більшою за нуль',
      'Радиус должен быть больше нуля': 'Радіус має бути більшим за нуль',
    },
  },
};
