import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'span': 'Gebäudespannweite, m',
      'rise': 'Firsthöhe über der Auflage, m',
      'overhang': 'Dachüberstand, m',
    },
    results: {
      'Длина стропила': 'Sparrenlänge',
      'Угол наклона': 'Dachneigung',
      'Заложение': 'Waagerechte Ausladung',
      'Уклон': 'Gefälle',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'м': 'm',
      'Пролёт должен быть больше нуля': 'Die Spannweite muss größer als null sein',
      'Подъём должен быть больше нуля': 'Die Firsthöhe muss größer als null sein',
      'Свес не может быть отрицательным': 'Der Überstand kann nicht negativ sein',
    },
  },
  en: {
    fields: {
      span: 'Building span, m',
      rise: 'Ridge rise, m',
      overhang: 'Eaves overhang, m',
    },
    results: {
      'Длина стропила': 'Rafter length',
      'Угол наклона': 'Roof angle',
      'Заложение': 'Horizontal run',
      'Уклон': 'Slope',
      'Проверьте данные': 'Check the values',
    },
    values: {
      'м': 'm',
      'Пролёт должен быть больше нуля': 'The span must be greater than zero',
      'Подъём должен быть больше нуля': 'The rise must be greater than zero',
      'Свес не может быть отрицательным': 'The overhang cannot be negative',
    },
  },
  uk: {
    fields: {
      span: 'Проліт будівлі, м',
      rise: 'Підйом коника, м',
      overhang: 'Звис карниза, м',
    },
    results: {
      'Длина стропила': 'Довжина кроквини',
      'Угол наклона': 'Кут нахилу',
      'Заложение': 'Закладення',
      'Уклон': 'Ухил',
      'Проверьте данные': 'Перевірте дані',
    },
    values: {
      'Пролёт должен быть больше нуля': 'Проліт має бути більшим за нуль',
      'Подъём должен быть больше нуля': 'Підйом має бути більшим за нуль',
      'Свес не может быть отрицательным': 'Звис не може бути від’ємним',
    },
  },
};
