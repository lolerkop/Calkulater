import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { m: 'Body mass, kg', angle: 'Slope angle, °', mu: 'Friction coefficient' },
    options: {},
    results: {
      'Скатывающая сила': 'Force along the slope', 'Сила нормального давления': 'Normal force',
      'Сила трения': 'Friction force', 'Равнодействующая': 'Net force', 'Ускорение': 'Acceleration',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'Н': 'N', 'м/с²': 'm/s²',
      'Масса должна быть больше нуля': 'The mass must be greater than zero',
      'Угол наклона задаётся от 0 до 90 градусов': 'The slope angle runs from 0 to 90 degrees',
      'Коэффициент трения не может быть отрицательным': 'The friction coefficient cannot be negative',
    },
  },
  uk: {
    fields: { m: 'Маса тіла, кг', angle: 'Кут нахилу, °', mu: 'Коефіцієнт тертя' },
    options: {},
    results: {
      'Скатывающая сила': 'Скочувальна сила', 'Сила нормального давления': 'Сила нормального тиску',
      'Сила трения': 'Сила тертя', 'Равнодействующая': 'Рівнодійна', 'Ускорение': 'Прискорення',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Н': 'Н', 'м/с²': 'м/с²',
      'Масса должна быть больше нуля': 'Маса має бути більшою за нуль',
      'Угол наклона задаётся от 0 до 90 градусов': 'Кут нахилу задається від 0 до 90 градусів',
      'Коэффициент трения не может быть отрицательным': 'Коефіцієнт тертя не може бути від’ємним',
    },
  },
};
