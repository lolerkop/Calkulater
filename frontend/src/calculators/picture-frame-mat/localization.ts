import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'photoWidth': 'Breite des Fotos, cm',
      'photoHeight': 'Höhe des Fotos, cm',
      'border': 'Rand oben und seitlich, cm',
      'bottomExtra': 'Beschwerung des unteren Randes, cm',
    },
    results: {
      'Размер рамы': 'Rahmengröße',
      'Нижнее поле': 'Unterer Rand',
      'Верх и бока': 'Oben und seitlich',
      'Площадь паспарту': 'Fläche des Passepartouts',
      'Соотношение сторон рамы': 'Seitenverhältnis des Rahmens',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'см': 'cm',
      'см²': 'cm²',
      'Ширина фотографии должна быть больше нуля': 'Die Breite des Fotos muss größer als null sein',
      'Высота фотографии должна быть больше нуля': 'Die Höhe des Fotos muss größer als null sein',
      'Поле паспарту должно быть больше нуля': 'Der Rand des Passepartouts muss größer als null sein',
      'Утяжеление нижнего поля не может быть отрицательным': 'Die Beschwerung des unteren Randes kann nicht negativ sein',
    },
  },
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
