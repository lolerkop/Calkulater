import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'rise': 'Höhenunterschied, m',
      'run': 'Waagerechte Strecke, m',
    },
    results: {
      'Уклон': 'Steigung',
      'Угол': 'Winkel',
      'Отношение': 'Verhältnis',
      'Длина наклона': 'Länge der Neigung',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'м': 'm',
      'Заложение не может быть нулевым': 'Die waagerechte Strecke kann nicht null sein',
    },
  },
  en: {
    fields: { rise: 'Rise, m', run: 'Run, m' },
    results: {
      'Уклон': 'Slope',
      'Угол': 'Angle',
      'Отношение': 'Ratio',
      'Длина наклона': 'Slope length',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'м': 'm',
      'Заложение не может быть нулевым': 'The run cannot be zero',
    },
  },
  uk: {
    fields: { rise: 'Підйом, м', run: 'Закладення, м' },
    results: {
      'Уклон': 'Ухил',
      'Угол': 'Кут',
      'Отношение': 'Співвідношення',
      'Длина наклона': 'Довжина похилої',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Заложение не может быть нулевым': 'Закладення не може бути нульовим',
    },
  },
};
