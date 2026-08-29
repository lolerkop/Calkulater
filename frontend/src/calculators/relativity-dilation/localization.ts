import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'beta': 'Bruchteil der Lichtgeschwindigkeit',
      'properTime': 'Eigenzeit, s',
    },
    results: {
      'Замедленное время': 'Gedehnte Zeit',
      'Множитель Лоренца': 'Lorentzfaktor',
      'Сокращение длины': 'Längenkontraktion',
      'Скорость': 'Geschwindigkeit',
      'Разница во времени': 'Zeitunterschied',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'с': 's',
      'м/с': 'm/s',
      'Доля скорости света не может быть отрицательной': 'Der Bruchteil der Lichtgeschwindigkeit kann nicht negativ sein',
      'Достичь скорости света нельзя: доля должна быть меньше единицы': 'Die Lichtgeschwindigkeit lässt sich nicht erreichen: der Bruchteil muss unter eins liegen',
      'Собственное время должно быть больше нуля': 'Die Eigenzeit muss größer als null sein',
    },
  },
  en: {
    fields: { beta: 'Fraction of the speed of light', properTime: 'Proper time, s' },
    options: {},
    results: {
      'Замедленное время': 'Dilated time', 'Множитель Лоренца': 'Lorentz factor',
      'Сокращение длины': 'Length contraction', 'Скорость': 'Speed',
      'Разница во времени': 'Time difference', 'Проверьте данные': 'Check the values',
    },
    values: {
      'с': 's', 'м/с': 'm/s',
      'Доля скорости света не может быть отрицательной': 'The fraction of light speed cannot be negative',
      'Достичь скорости света нельзя: доля должна быть меньше единицы':
        'The speed of light cannot be reached: the fraction must be below one',
      'Собственное время должно быть больше нуля': 'The proper time must be greater than zero',
    },
  },
  uk: {
    fields: { beta: 'Частка швидкості світла', properTime: 'Власний час, с' },
    options: {},
    results: {
      'Замедленное время': 'Сповільнений час', 'Множитель Лоренца': 'Множник Лоренца',
      'Сокращение длины': 'Скорочення довжини', 'Скорость': 'Швидкість',
      'Разница во времени': 'Різниця в часі', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'с': 'с', 'м/с': 'м/с',
      'Доля скорости света не может быть отрицательной': 'Частка швидкості світла не може бути від’ємною',
      'Достичь скорости света нельзя: доля должна быть меньше единицы':
        'Досягти швидкості світла не можна: частка має бути меншою за одиницю',
      'Собственное время должно быть больше нуля': 'Власний час має бути більшим за нуль',
    },
  },
};
