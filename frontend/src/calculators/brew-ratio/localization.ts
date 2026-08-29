import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Кофе': 'Coffee', 'Вода': 'Water', 'Соотношение': 'Ratio',
  'Гуща заберёт воды': 'Held by the grounds', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Кофе': 'Кава', 'Вода': 'Вода', 'Соотношение': 'Співвідношення',
  'Гуща заберёт воды': 'Гуща забере води', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was gesucht ist',
      'water': 'Wasser, ml',
      'coffee': 'Kaffee, g',
      'ratio': 'Verhältnis 1:k',
    },
    options: {
      'coffee': 'die Kaffeedosis',
      'water': 'die Wassermenge',
      'ratio': 'das Verhältnis',
    },
    results: {
      'Кофе': 'Kaffee',
      'Вода': 'Wasser',
      'Соотношение': 'Verhältnis',
      'Гуща заберёт воды': 'Vom Satz aufgenommen',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'мл': 'ml',
      'г': 'g',
      'Соотношение должно быть больше нуля': 'Das Verhältnis muss größer als null sein',
      'Масса кофе должна быть больше нуля': 'Die Kaffeedosis muss größer als null sein',
      'Объём воды должен быть больше нуля': 'Die Wassermenge muss größer als null sein',
    },
  },
  en: {
    fields: { mode: 'What to find', water: 'Water, ml', coffee: 'Coffee, g', ratio: 'Ratio 1:k' },
    options: { coffee: 'the coffee dose', water: 'the water volume', ratio: 'the ratio' },
    results: RESULTS_EN,
    values: {
      'мл': 'mL', 'г': 'g',
      'Соотношение должно быть больше нуля': 'The ratio must be greater than zero',
      'Масса кофе должна быть больше нуля': 'The coffee dose must be greater than zero',
      'Объём воды должен быть больше нуля': 'The water volume must be greater than zero',
    },
  },
  uk: {
    fields: { mode: 'Що знайти', water: 'Вода, мл', coffee: 'Кава, г', ratio: 'Співвідношення 1:k' },
    options: { coffee: 'масу кави', water: "об'єм води", ratio: 'співвідношення' },
    results: RESULTS_UK,
    values: {
      'мл': 'мл', 'г': 'г',
      'Соотношение должно быть больше нуля': 'Співвідношення має бути більшим за нуль',
      'Масса кофе должна быть больше нуля': 'Маса кави має бути більшою за нуль',
      'Объём воды должен быть больше нуля': "Об'єм води має бути більшим за нуль",
    },
  },
};
