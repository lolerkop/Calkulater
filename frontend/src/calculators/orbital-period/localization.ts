import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mass24': 'Masse des Zentralkörpers, ×10²⁴ kg',
      'radiusKm': 'Bahnradius, km',
    },
    results: {
      'Период обращения': 'Umlaufzeit',
      'В часах': 'In Stunden',
      'Орбитальная скорость': 'Bahngeschwindigkeit',
      'Оборотов в сутки': 'Umläufe je Tag',
      'Радиус орбиты': 'Bahnradius',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'с': 's',
      'ч': 'h',
      'м/с': 'm/s',
      'км': 'km',
      'Масса центрального тела должна быть больше нуля': 'Die Masse des Zentralkörpers muss größer als null sein',
      'Радиус орбиты должен быть больше нуля': 'Der Bahnradius muss größer als null sein',
    },
  },
  en: {
    fields: { mass24: 'Central body mass, ×10²⁴ kg', radiusKm: 'Orbit radius, km' },
    options: {},
    results: {
      'Период обращения': 'Orbital period', 'В часах': 'In hours', 'Орбитальная скорость': 'Orbital speed',
      'Оборотов в сутки': 'Laps per day', 'Радиус орбиты': 'Orbit radius', 'Проверьте данные': 'Check the values',
    },
    values: {
      'с': 's', 'ч': 'h', 'м/с': 'm/s', 'км': 'km',
      'Масса центрального тела должна быть больше нуля': 'The central body mass must be greater than zero',
      'Радиус орбиты должен быть больше нуля': 'The orbit radius must be greater than zero',
    },
  },
  uk: {
    fields: { mass24: 'Маса центрального тіла, ×10²⁴ кг', radiusKm: 'Радіус орбіти, км' },
    options: {},
    results: {
      'Период обращения': 'Період обертання', 'В часах': 'У годинах', 'Орбитальная скорость': 'Орбітальна швидкість',
      'Оборотов в сутки': 'Обертів на добу', 'Радиус орбиты': 'Радіус орбіти', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'с': 'с', 'ч': 'год', 'м/с': 'м/с', 'км': 'км',
      'Масса центрального тела должна быть больше нуля': 'Маса центрального тіла має бути більшою за нуль',
      'Радиус орбиты должен быть больше нуля': 'Радіус орбіти має бути більшим за нуль',
    },
  },
};
