import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'fuel': 'Benzin, l',
      'ratio': 'Verhältnis 1:N',
    },
    results: {
      'Масла': 'Öl',
      'Объём смеси': 'Volumen des Gemischs',
      'Доля масла': 'Ölanteil',
      'Соотношение': 'Verhältnis',
      'Бензина': 'Benzin',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'мл': 'ml',
      'л': 'l',
      'Объём топлива должен быть больше нуля': 'Die Kraftstoffmenge muss größer als null sein',
      'Пропорция допустима от 1:20 до 1:100': 'Das Verhältnis ist von 1:20 bis 1:100 zulässig',
    },
  },
  en: {
    fields: { fuel: 'Petrol, L', ratio: 'Ratio 1:N' },
    options: {},
    results: {
      'Масла': 'Oil', 'Объём смеси': 'Mixture volume', 'Доля масла': 'Oil share',
      'Соотношение': 'Ratio', 'Бензина': 'Petrol', 'Проверьте данные': 'Check the values',
    },
    values: {
      'мл': 'mL', 'л': 'L',
      'Объём топлива должен быть больше нуля': 'The fuel volume must be greater than zero',
      'Пропорция допустима от 1:20 до 1:100': 'The ratio must be between 1:20 and 1:100',
    },
  },
  uk: {
    fields: { fuel: 'Бензину, л', ratio: 'Пропорція 1:N' },
    options: {},
    results: {
      'Масла': 'Оливи', 'Объём смеси': 'Об’єм суміші', 'Доля масла': 'Частка оливи',
      'Соотношение': 'Співвідношення', 'Бензина': 'Бензину', 'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'мл': 'мл', 'л': 'л',
      'Объём топлива должен быть больше нуля': 'Об’єм пального має бути більшим за нуль',
      'Пропорция допустима от 1:20 до 1:100': 'Пропорція допустима від 1:20 до 1:100',
    },
  },
};
