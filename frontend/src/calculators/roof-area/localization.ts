import type { CalculatorLocalization } from '../../lib/platform/types';

// Единицы принадлежат калькулятору: центральный словарь единиц не трогается.
const RESULTS_EN = {
  'Площадь крыши': 'Roof area',
  'Площадь одного ската': 'Area of one slope',
  'Скатов': 'Slopes',
  'Площадь основания': 'Footprint area',
  'Уклон': 'Pitch',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Площадь крыши': 'Площа даху',
  'Площадь одного ската': 'Площа одного схилу',
  'Скатов': 'Схилів',
  'Площадь основания': 'Площа основи',
  'Уклон': 'Ухил',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { mode: 'Roof shape', length: 'Footprint length, m', width: 'Footprint width, m', slopeMode: 'How the pitch is given', angle: 'Pitch, degrees', slopePercent: 'Pitch, %', },
    options: { shed: 'single-slope', gable: 'gable', hip: 'hip', degrees: 'in degrees', percent: 'as a percentage', },
    results: RESULTS_EN,
    values: {
      'Размеры основания должны быть больше нуля': 'The footprint dimensions must be greater than zero',
      'Уклон не может быть отрицательным': 'The pitch cannot be negative',
      'Уклон должен быть меньше 90 градусов': 'The pitch must be less than 90 degrees',
    },
  },
  uk: {
    fields: { mode: 'Форма даху', length: 'Довжина основи, м', width: 'Ширина основи, м', slopeMode: 'Як задано ухил', angle: 'Ухил, градусів', slopePercent: 'Ухил, %', },
    options: { shed: 'односхилий', gable: 'двосхилий', hip: 'вальмовий', degrees: 'у градусах', percent: 'у відсотках', },
    results: RESULTS_UK,
    values: {
      'Размеры основания должны быть больше нуля': 'Розміри основи мають бути більшими за нуль',
      'Уклон не может быть отрицательным': 'Ухил не може бути від’ємним',
      'Уклон должен быть меньше 90 градусов': 'Ухил має бути меншим за 90 градусів',
    },
  },
};
