import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
  'Римское число': 'Roman numeral', 'Арабское число': 'Arabic number',
  'Римская запись': 'Roman form', 'Символов в записи': 'Symbols used',
  'Проверьте данные': 'Check the values',
};
const RESULTS_UK = {
  'Римское число': 'Римське число', 'Арабское число': 'Арабське число',
  'Римская запись': 'Римський запис', 'Символов в записи': 'Символів у записі',
  'Проверьте данные': 'Перевірте дані',
};

export const localization: CalculatorLocalization = {
  en: {
    fields: { mode: 'Direction', arabic: 'Arabic number', roman: 'Roman numeral' },
    options: { toRoman: 'Arabic to Roman', toArabic: 'Roman to Arabic' },
    results: RESULTS_EN,
    values: {
      'Введите каноническую римскую запись от I до MMMCMXCIX': 'Enter a canonical Roman numeral from I to MMMCMXCIX',
      'Римские числа записывают от 1 до 3999': 'Roman numerals run from 1 to 3999',
    },
  },
  uk: {
    fields: { mode: 'Напрямок', arabic: 'Арабське число', roman: 'Римське число' },
    options: { toRoman: 'Арабське в римське', toArabic: 'Римське в арабське' },
    results: RESULTS_UK,
    values: {
      'Введите каноническую римскую запись от I до MMMCMXCIX': 'Введіть канонічний римський запис від I до MMMCMXCIX',
      'Римские числа записывают от 1 до 3999': 'Римські числа записують від 1 до 3999',
    },
  },
};
