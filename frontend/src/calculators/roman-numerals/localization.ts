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
  de: {
    fields: {
      'mode': 'Richtung',
      'arabic': 'Arabische Zahl',
      'roman': 'Römische Zahl',
    },
    options: {
      'toRoman': 'arabisch in römisch',
      'toArabic': 'römisch in arabisch',
    },
    results: {
      'Римское число': 'Römische Zahl',
      'Арабское число': 'Arabische Zahl',
      'Римская запись': 'Römische Schreibweise',
      'Символов в записи': 'Verwendete Zeichen',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Введите каноническую римскую запись от I до MMMCMXCIX': 'Trage eine kanonische römische Schreibweise von I bis MMMCMXCIX ein',
      'Римские числа записывают от 1 до 3999': 'Römische Zahlen werden von 1 bis 3999 geschrieben',
    },
  },
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
