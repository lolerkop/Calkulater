import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'length': 'Fadenlänge, m',
      'g': 'Fallbeschleunigung, m/s²',
    },
    results: {
      'Период колебаний': 'Schwingungsdauer',
      'Частота': 'Frequenz',
      'Колебаний в минуту': 'Schwingungen je Minute',
      'Длина для периода 1 с': 'Länge für eine Dauer von 1 s',
      'Ускорение свободного падения': 'Fallbeschleunigung',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'с': 's',
      'Гц': 'Hz',
      'м': 'm',
      'м/с²': 'm/s²',
      'Длина подвеса должна быть больше нуля': 'Die Fadenlänge muss größer als null sein',
      'Ускорение свободного падения должно быть больше нуля': 'Die Fallbeschleunigung muss größer als null sein',
    },
  },
  en: {
    fields: { length: 'String length, m', g: 'Acceleration of gravity, m/s²' },
    options: {},
    results: {
      'Период колебаний': 'Oscillation period', 'Частота': 'Frequency',
      'Колебаний в минуту': 'Oscillations per minute', 'Длина для периода 1 с': 'Length for a 1 s period',
      'Ускорение свободного падения': 'Acceleration of gravity', 'Проверьте данные': 'Check the values',
    },
    values: {
      'с': 's', 'Гц': 'Hz', 'м': 'm', 'м/с²': 'm/s²',
      'Длина подвеса должна быть больше нуля': 'The string length must be greater than zero',
      'Ускорение свободного падения должно быть больше нуля': 'The acceleration of gravity must be greater than zero',
    },
  },
  uk: {
    fields: { length: 'Довжина підвісу, м', g: 'Прискорення вільного падіння, м/с²' },
    options: {},
    results: {
      'Период колебаний': 'Період коливань', 'Частота': 'Частота',
      'Колебаний в минуту': 'Коливань за хвилину', 'Длина для периода 1 с': 'Довжина для періоду 1 с',
      'Ускорение свободного падения': 'Прискорення вільного падіння', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'с': 'с', 'Гц': 'Гц', 'м': 'м', 'м/с²': 'м/с²',
      'Длина подвеса должна быть больше нуля': 'Довжина підвісу має бути більшою за нуль',
      'Ускорение свободного падения должно быть больше нуля': 'Прискорення вільного падіння має бути більшим за нуль',
    },
  },
};
