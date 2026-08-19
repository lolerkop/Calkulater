import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц не трогается.
const RESULTS_EN = {
  'Площадь': 'Area',
  'Периметр': 'Perimeter',
  'Высота к стороне a': 'Height to side a',
  'Основание': 'Base',
  'Высота': 'Height',
  'Большая диагональ': 'Longer diagonal',
  'Меньшая диагональ': 'Shorter diagonal',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Площадь': 'Площа',
  'Периметр': 'Периметр',
  'Высота к стороне a': 'Висота до сторони a',
  'Основание': 'Основа',
  'Высота': 'Висота',
  'Большая диагональ': 'Більша діагональ',
  'Меньшая диагональ': 'Менша діагональ',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { unit: 'Length unit', mode: 'What is known', a: 'Side a', h: 'Height to side a', b: 'Side b', angle: 'Angle between the sides, degrees', },
    options: { mm: 'millimetres', cm: 'centimetres', m: 'metres', height: 'a base and a height', sides: 'two sides and an angle', },
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
      'Сторона должна быть больше нуля': 'The side must be greater than zero',
      'Вторая сторона должна быть больше нуля': 'The second side must be greater than zero',
      'Угол должен быть больше 0 и меньше 180 градусов': 'The angle must be greater than 0 and less than 180 degrees',
      'При таком угле параллелограмм вырождается в отрезок': 'At that angle the parallelogram collapses into a line',
      'Высота должна быть больше нуля': 'The height must be greater than zero',
    },
  },
  uk: {
    fields: { unit: 'Одиниця довжини', mode: 'Що відомо', a: 'Сторона a', h: 'Висота до сторони a', b: 'Сторона b', angle: 'Кут між сторонами, градусів', },
    options: { mm: 'міліметри', cm: 'сантиметри', m: 'метри', height: 'основа і висота', sides: 'дві сторони і кут', },
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
      'Сторона должна быть больше нуля': 'Сторона має бути більшою за нуль',
      'Вторая сторона должна быть больше нуля': 'Друга сторона має бути більшою за нуль',
      'Угол должен быть больше 0 и меньше 180 градусов': 'Кут має бути більшим за 0 і меншим за 180 градусів',
      'При таком угле параллелограмм вырождается в отрезок': 'За такого кута паралелограм вироджується у відрізок',
      'Высота должна быть больше нуля': 'Висота має бути більшою за нуль',
    },
  },
};
