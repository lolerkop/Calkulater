import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц не трогается.
const RESULTS_EN = {
  'Площадь сектора': 'Sector area',
  'Длина дуги': 'Arc length',
  'Хорда': 'Chord',
  'Периметр сектора': 'Sector perimeter',
  'Доля круга': 'Share of the circle',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Площадь сектора': 'Площа сектора',
  'Длина дуги': 'Довжина дуги',
  'Хорда': 'Хорда',
  'Периметр сектора': 'Периметр сектора',
  'Доля круга': 'Частка кола',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { unit: 'Length unit', radius: 'Radius', angle: 'Central angle, degrees', },
    options: { mm: 'millimetres', cm: 'centimetres', m: 'metres', },
    results: RESULTS_EN,
    values: {
      'мм': 'mm',
      'см': 'cm',
      'м': 'm',
      'мм²': 'mm²',
      'см²': 'cm²',
      'м²': 'm²',
      'мм³': 'mm³',
      'см³': 'cm³',
      'м³': 'm³',
      'Радиус должен быть больше нуля': 'The radius must be greater than zero',
      'Угол должен быть больше нуля': 'The angle must be greater than zero',
      'Угол сектора не может превышать 360 градусов': 'A sector angle cannot exceed 360 degrees',
    },
  },
  uk: {
    fields: { unit: 'Одиниця довжини', radius: 'Радіус', angle: 'Центральний кут, градусів', },
    options: { mm: 'міліметри', cm: 'сантиметри', m: 'метри', },
    results: RESULTS_UK,
    values: {
      'мм': 'мм',
      'см': 'см',
      'м': 'м',
      'мм²': 'мм²',
      'см²': 'см²',
      'м²': 'м²',
      'мм³': 'мм³',
      'см³': 'см³',
      'м³': 'м³',
      'Радиус должен быть больше нуля': 'Радіус має бути більшим за нуль',
      'Угол должен быть больше нуля': 'Кут має бути більшим за нуль',
      'Угол сектора не может превышать 360 градусов': 'Кут сектора не може перевищувати 360 градусів',
    },
  },
};
