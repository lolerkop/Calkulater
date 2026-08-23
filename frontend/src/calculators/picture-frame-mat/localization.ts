import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      photoWidth: 'Photograph width, cm', photoHeight: 'Photograph height, cm',
      border: 'Top and side border, cm', bottomExtra: 'Bottom weighting, cm',
    },
    options: {},
    results: {
      'Размер рамы': 'Frame size', 'Нижнее поле': 'Bottom border', 'Верх и бока': 'Top and sides',
      'Площадь паспарту': 'Mat area', 'Соотношение сторон рамы': 'Frame aspect ratio',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'см': 'cm', 'см²': 'cm²',
      'Ширина фотографии должна быть больше нуля': 'The photograph width must be greater than zero',
      'Высота фотографии должна быть больше нуля': 'The photograph height must be greater than zero',
      'Поле паспарту должно быть больше нуля': 'The mat border must be greater than zero',
      'Утяжеление нижнего поля не может быть отрицательным': 'The bottom weighting cannot be negative',
    },
  },
  uk: {
    fields: {
      photoWidth: 'Ширина фотографії, см', photoHeight: 'Висота фотографії, см',
      border: 'Поле згори та з боків, см', bottomExtra: 'Обтяження нижнього поля, см',
    },
    options: {},
    results: {
      'Размер рамы': 'Розмір рами', 'Нижнее поле': 'Нижнє поле', 'Верх и бока': 'Верх і боки',
      'Площадь паспарту': 'Площа паспарту', 'Соотношение сторон рамы': 'Співвідношення сторін рами',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'см': 'см', 'см²': 'см²',
      'Ширина фотографии должна быть больше нуля': 'Ширина фотографії має бути більшою за нуль',
      'Высота фотографии должна быть больше нуля': 'Висота фотографії має бути більшою за нуль',
      'Поле паспарту должно быть больше нуля': 'Поле паспарту має бути більшим за нуль',
      'Утяжеление нижнего поля не может быть отрицательным': 'Обтяження нижнього поля не може бути від’ємним',
    },
  },
};
