import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      unit: 'Length unit',
      sides: 'Sides of the base',
      side: 'Base side length',
      height: 'Pyramid height',
    },
    options: { mm: 'millimetres', cm: 'centimetres', m: 'metres' },
    results: {
      'Объём': 'Volume',
      'Площадь основания': 'Base area',
      'Апофема': 'Slant height',
      'Боковая поверхность': 'Lateral surface',
      'Полная поверхность': 'Total surface',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'мм': 'mm', 'см': 'cm', 'м': 'm',
      'Число сторон основания должно быть целым': 'The number of base sides must be a whole number',
      'Сторон основания должно быть не меньше трёх': 'The base must have at least three sides',
      'Длина стороны должна быть больше нуля': 'The side length must be greater than zero',
      'Высота должна быть больше нуля': 'The height must be greater than zero',
    },
  },
  uk: {
    fields: {
      unit: 'Одиниця довжини',
      sides: 'Сторін основи',
      side: 'Сторона основи',
      height: 'Висота піраміди',
    },
    options: { mm: 'міліметри', cm: 'сантиметри', m: 'метри' },
    results: {
      'Объём': 'Об’єм',
      'Площадь основания': 'Площа основи',
      'Апофема': 'Апофема',
      'Боковая поверхность': 'Бічна поверхня',
      'Полная поверхность': 'Повна поверхня',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'мм': 'мм', 'см': 'см', 'м': 'м',
      'Число сторон основания должно быть целым': 'Кількість сторін основи має бути цілою',
      'Сторон основания должно быть не меньше трёх': 'Основа має мати не менше трьох сторін',
      'Длина стороны должна быть больше нуля': 'Довжина сторони має бути більшою за нуль',
      'Высота должна быть больше нуля': 'Висота має бути більшою за нуль',
    },
  },
};
