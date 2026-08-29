import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Логарифм': 'Logarithm', 'Запись': 'Written out', 'Проверка возведением': 'Check by exponentiation',
  'Натуральный логарифм': 'Natural logarithm', 'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Логарифм': 'Логарифм', 'Запись': 'Запис', 'Проверка возведением': 'Перевірка піднесенням',
  'Натуральный логарифм': 'Натуральний логарифм', 'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Art des Logarithmus',
      'value': 'Zahl',
      'base': 'Basis',
    },
    options: {
      'log10': 'Zehnerlogarithmus, Basis 10',
      'ln': 'Natürlicher, Basis e',
      'custom': 'Eigene Basis',
    },
    results: {
      'Логарифм': 'Logarithmus',
      'Запись': 'Ausgeschrieben',
      'Проверка возведением': 'Probe durch Potenzieren',
      'Натуральный логарифм': 'Natürlicher Logarithmus',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'по основанию': 'zur Basis',
      'в степени': 'hoch',
      'Логарифм определён только для положительных чисел': 'Ein Logarithmus ist nur für positive Zahlen festgelegt',
      'Основание должно быть больше нуля': 'Die Basis muss größer als null sein',
      'Основание не может быть единицей': 'Die Basis kann nicht eins sein',
    },
  },
  en: {
    fields: { mode: 'Logarithm type', value: 'Number', base: 'Base' },
    options: { log10: 'Common, base 10', ln: 'Natural, base e', custom: 'Custom base' },
    results: RESULTS_EN,
    values: {
      'по основанию': 'to base', 'в степени': 'raised to',
      'Логарифм определён только для положительных чисел': 'A logarithm is defined only for positive numbers',
      'Основание должно быть больше нуля': 'The base must be greater than zero',
      'Основание не может быть единицей': 'The base cannot be one',
    },
  },
  uk: {
    fields: { mode: 'Тип логарифма', value: 'Число', base: 'Основа' },
    options: { log10: 'Десятковий, основа 10', ln: 'Натуральний, основа e', custom: 'Довільна основа' },
    results: RESULTS_UK,
    values: {
      'по основанию': 'за основою', 'в степени': 'у степені',
      'Логарифм определён только для положительных чисел': 'Логарифм визначений лише для додатних чисел',
      'Основание должно быть больше нуля': 'Основа має бути більшою за нуль',
      'Основание не может быть единицей': 'Основа не може бути одиницею',
    },
  },
};
