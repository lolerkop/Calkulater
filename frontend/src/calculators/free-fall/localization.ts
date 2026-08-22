import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      mode: 'What is known', h: 'Height, m', t: 'Fall time, s',
      g: 'Gravitational acceleration, m/s²',
    },
    options: { fromHeight: 'height', fromTime: 'time' },
    results: {
      'Скорость у земли': 'Impact speed', 'Время падения': 'Fall time', 'Высота падения': 'Fall height',
      'В километрах в час': 'In kilometres per hour',
      'Кинетическая энергия на килограмм': 'Kinetic energy per kilogram',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'м/с': 'm/s', 'с': 's', 'м': 'm', 'км/ч': 'km/h', 'Дж/кг': 'J/kg',
      'Ускорение свободного падения должно быть больше нуля': 'The gravitational acceleration must be greater than zero',
      'Время падения должно быть больше нуля': 'The fall time must be greater than zero',
      'Высота должна быть больше нуля': 'The height must be greater than zero',
    },
  },
  uk: {
    fields: {
      mode: 'Що відомо', h: 'Висота, м', t: 'Час падіння, с',
      g: 'Прискорення вільного падіння, м/с²',
    },
    options: { fromHeight: 'висота', fromTime: 'час' },
    results: {
      'Скорость у земли': 'Швидкість біля землі', 'Время падения': 'Час падіння',
      'Высота падения': 'Висота падіння', 'В километрах в час': 'У кілометрах за годину',
      'Кинетическая энергия на килограмм': 'Кінетична енергія на кілограм',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'м/с': 'м/с', 'с': 'с', 'м': 'м', 'км/ч': 'км/год', 'Дж/кг': 'Дж/кг',
      'Ускорение свободного падения должно быть больше нуля': 'Прискорення вільного падіння має бути більшим за нуль',
      'Время падения должно быть больше нуля': 'Час падіння має бути більшим за нуль',
      'Высота должна быть больше нуля': 'Висота має бути більшою за нуль',
    },
  },
};
