import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      weight: 'Body weight, kg',
      activityMinutes: 'Minutes of activity per day',
      hotWeather: 'Hot weather',
    },
    options: { no: 'No', yes: 'Yes' },
    results: {
      'Норма воды в сутки': 'Daily water intake',
      'Базовая норма': 'Baseline amount',
      'Надбавка за нагрузку': 'Activity allowance',
      'Стаканов по 250 мл': 'Glasses of 250 ml',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'л': 'l',
      'Масса тела должна быть больше нуля': 'The body weight must be greater than zero',
      'Минуты нагрузки не могут быть отрицательными': 'Activity minutes cannot be negative',
    },
  },
  uk: {
    fields: {
      weight: 'Маса тіла, кг',
      activityMinutes: 'Хвилин навантаження на день',
      hotWeather: 'Спекотна погода',
    },
    options: { no: 'Ні', yes: 'Так' },
    results: {
      'Норма воды в сутки': 'Норма води на добу',
      'Базовая норма': 'Базова норма',
      'Надбавка за нагрузку': 'Надбавка за навантаження',
      'Стаканов по 250 мл': 'Склянок по 250 мл',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Масса тела должна быть больше нуля': 'Маса тіла має бути більшою за нуль',
      'Минуты нагрузки не могут быть отрицательными': 'Хвилини навантаження не можуть бути від’ємними',
    },
  },
};
