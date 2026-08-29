import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'shape': 'Körper',
      'm': 'Masse, kg',
      'r': 'Radius oder Länge, m',
    },
    options: {
      'rod-center': 'Stab um seine Mitte',
      'rod-end': 'Stab um sein Ende',
      'disk': 'Vollscheibe',
      'ring': 'dünner Ring',
      'sphere-solid': 'Vollkugel',
      'sphere-hollow': 'Hohlkugel',
    },
    results: {
      'Момент инерции': 'Trägheitsmoment',
      'Масса': 'Masse',
      'Размер': 'Größe',
      'Радиус инерции': 'Trägheitsradius',
      'Тело': 'Körper',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'кг·м²': 'kg·m²',
      'кг': 'kg',
      'м': 'm',
      'стержень через центр': 'Stab um seine Mitte',
      'стержень через конец': 'Stab um sein Ende',
      'сплошной диск': 'Vollscheibe',
      'тонкое кольцо': 'dünner Ring',
      'сплошной шар': 'Vollkugel',
      'полая сфера': 'Hohlkugel',
      'Неизвестное тело': 'Unbekannter Körper',
      'Масса должна быть больше нуля': 'Die Masse muss größer als null sein',
      'Размер должен быть больше нуля': 'Die Größe muss größer als null sein',
    },
  },
  en: {
    fields: { shape: 'Body', m: 'Mass, kg', r: 'Radius or length, m' },
    options: {
      'rod-center': 'rod about its centre', 'rod-end': 'rod about its end', disk: 'solid disk',
      ring: 'thin ring', 'sphere-solid': 'solid sphere', 'sphere-hollow': 'hollow sphere',
    },
    results: {
      'Момент инерции': 'Moment of inertia', 'Масса': 'Mass', 'Размер': 'Size',
      'Радиус инерции': 'Radius of gyration', 'Тело': 'Body', 'Проверьте данные': 'Check the values',
    },
    values: {
      'кг·м²': 'kg·m²', 'кг': 'kg', 'м': 'm',
      'стержень через центр': 'rod about its centre', 'стержень через конец': 'rod about its end',
      'сплошной диск': 'solid disk', 'тонкое кольцо': 'thin ring',
      'сплошной шар': 'solid sphere', 'полая сфера': 'hollow sphere',
      'Неизвестное тело': 'Unknown body',
      'Масса должна быть больше нуля': 'The mass must be greater than zero',
      'Размер должен быть больше нуля': 'The size must be greater than zero',
    },
  },
  uk: {
    fields: { shape: 'Тіло', m: 'Маса, кг', r: 'Радіус або довжина, м' },
    options: {
      'rod-center': 'стрижень через центр', 'rod-end': 'стрижень через кінець', disk: 'суцільний диск',
      ring: 'тонке кільце', 'sphere-solid': 'суцільна куля', 'sphere-hollow': 'порожниста сфера',
    },
    results: {
      'Момент инерции': 'Момент інерції', 'Масса': 'Маса', 'Размер': 'Розмір',
      'Радиус инерции': 'Радіус інерції', 'Тело': 'Тіло', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'кг·м²': 'кг·м²', 'кг': 'кг', 'м': 'м',
      'стержень через центр': 'стрижень через центр', 'стержень через конец': 'стрижень через кінець',
      'сплошной диск': 'суцільний диск', 'тонкое кольцо': 'тонке кільце',
      'сплошной шар': 'суцільна куля', 'полая сфера': 'порожниста сфера',
      'Неизвестное тело': 'Невідоме тіло',
      'Масса должна быть больше нуля': 'Маса має бути більшою за нуль',
      'Размер должен быть больше нуля': 'Розмір має бути більшим за нуль',
    },
  },
};
