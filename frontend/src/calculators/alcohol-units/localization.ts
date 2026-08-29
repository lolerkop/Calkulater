import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Стандартных единиц': 'Standard units', 'Чистого спирта по массе': 'Pure alcohol by mass',
  'Чистого спирта по объёму': 'Pure alcohol by volume', 'Норма единицы': 'Unit definition',
  'Крепость': 'Strength', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Стандартных единиц': 'Стандартних одиниць', 'Чистого спирта по массе': 'Чистого спирту за масою',
  'Чистого спирта по объёму': "Чистого спирту за об'ємом", 'Норма единицы': 'Норма одиниці',
  'Крепость': 'Міцність', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'volume_ml': 'Menge der Portion, ml',
      'abv': 'Stärke, % vol',
      'standard_g': 'Festlegung der Einheit, g Alkohol',
    },
    results: {
      'Стандартных единиц': 'Standardeinheiten',
      'Чистого спирта по массе': 'Reiner Alkohol nach Masse',
      'Чистого спирта по объёму': 'Reiner Alkohol nach Volumen',
      'Норма единицы': 'Festlegung der Einheit',
      'Крепость': 'Stärke',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'мл': 'ml',
      'г': 'g',
      'Объём должен быть больше нуля': 'Die Menge muss größer als null sein',
      'Крепость должна быть от 0 до 100 %': 'Die Stärke muss zwischen 0 und 100 % liegen',
      'Норма единицы должна быть больше нуля': 'Die Festlegung der Einheit muss größer als null sein',
    },
  },
  en: {
    fields: { volume_ml: 'Serving volume, ml', abv: 'Strength, % ABV', standard_g: 'Unit definition, g of alcohol' },
    options: {},
    results: RESULTS_EN,
    values: {
      'мл': 'mL', 'г': 'g',
      'Объём должен быть больше нуля': 'The volume must be greater than zero',
      'Крепость должна быть от 0 до 100 %': 'The strength must be between 0 and 100%',
      'Норма единицы должна быть больше нуля': 'The unit definition must be greater than zero',
    },
  },
  uk: {
    fields: { volume_ml: "Об'єм порції, мл", abv: 'Міцність, %', standard_g: 'Норма одиниці, г спирту' },
    options: {},
    results: RESULTS_UK,
    values: {
      'мл': 'мл', 'г': 'г',
      'Объём должен быть больше нуля': "Об'єм має бути більшим за нуль",
      'Крепость должна быть от 0 до 100 %': 'Міцність має бути від 0 до 100 %',
      'Норма единицы должна быть больше нуля': 'Норма одиниці має бути більшою за нуль',
    },
  },
};
