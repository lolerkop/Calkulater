import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      weight: 'Body weight, kg',
      factor: 'Energy requirement multiplier',
      kcalPer100: 'Food energy, kcal per 100 g',
    },
    results: {
      'Норма корма в сутки': 'Daily food ration',
      'Потребность в энергии': 'Energy requirement',
      'Обмен покоя (RER)': 'Resting requirement (RER)',
      'Масса питомца': 'Body weight',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'г': 'g', 'ккал': 'kcal', 'кг': 'kg',
      'Масса питомца должна быть больше нуля': 'The body weight must be greater than zero',
      'Множитель потребности должен быть больше нуля': 'The requirement multiplier must be greater than zero',
      'Калорийность корма должна быть больше нуля': 'The food energy must be greater than zero',
    },
  },
  uk: {
    fields: {
      weight: 'Маса тіла, кг',
      factor: 'Множник енергопотреби',
      kcalPer100: 'Калорійність корму, ккал на 100 г',
    },
    results: {
      'Норма корма в сутки': 'Добова норма корму',
      'Потребность в энергии': 'Потреба в енергії',
      'Обмен покоя (RER)': 'Обмін спокою (RER)',
      'Масса питомца': 'Маса тварини',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'г': 'г', 'ккал': 'ккал', 'кг': 'кг',
      'Масса питомца должна быть больше нуля': 'Маса тварини має бути більшою за нуль',
      'Множитель потребности должен быть больше нуля': 'Множник потреби має бути більшим за нуль',
      'Калорийность корма должна быть больше нуля': 'Калорійність корму має бути більшою за нуль',
    },
  },
};
