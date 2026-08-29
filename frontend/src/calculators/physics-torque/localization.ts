import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц не трогается.
const RESULTS_EN = {
  'Момент силы': 'Torque',
  'Плечо силы': 'Moment arm',
  'Синус угла': 'Sine of the angle',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Момент силы': 'Момент сили',
  'Плечо силы': 'Плече сили',
  'Синус угла': 'Синус кута',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'force': 'Kraft, N',
      'radius': 'Hebelarm, m',
      'angle': 'Winkel zwischen Kraft und Hebel, Grad',
    },
    results: {
      'Момент силы': 'Drehmoment',
      'Плечо силы': 'Wirksamer Hebelarm',
      'Синус угла': 'Sinus des Winkels',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      ' Н·м': ' N·m',
      'Сила не может быть отрицательной': 'Die Kraft kann nicht negativ sein',
      'Плечо не может быть отрицательным': 'Der Hebelarm kann nicht negativ sein',
      'Угол должен лежать в диапазоне от 0 до 180 градусов': 'Der Winkel muss zwischen 0 und 180 Grad liegen',
    },
  },
  en: {
    fields: { force: 'Force, N', radius: 'Lever arm, m', angle: 'Angle between force and lever, degrees', },
    options: { },
    results: RESULTS_EN,
    values: {
      ' Н·м': ' N·m',
      'Сила не может быть отрицательной': 'The force cannot be negative',
      'Плечо не может быть отрицательным': 'The lever arm cannot be negative',
      'Угол должен лежать в диапазоне от 0 до 180 градусов': 'The angle must lie between 0 and 180 degrees',
    },
  },
  uk: {
    fields: { force: 'Сила, Н', radius: 'Плече, м', angle: 'Кут між силою і плечем, градусів', },
    options: { },
    results: RESULTS_UK,
    values: {
      ' Н·м': ' Н·м',
      'Сила не может быть отрицательной': 'Сила не може бути від’ємною',
      'Плечо не может быть отрицательным': 'Плече не може бути від’ємним',
      'Угол должен лежать в диапазоне от 0 до 180 градусов': 'Кут має лежати в діапазоні від 0 до 180 градусів',
    },
  },
};
