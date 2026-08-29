import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'resistances': 'Widerstände in Ohm — einer je Zeile oder mit Leerzeichen getrennt',
      'mode': 'Schaltung',
    },
    options: {
      'series': 'Reihe',
      'parallel': 'Parallel',
    },
    results: {
      'Общее сопротивление': 'Gesamtwiderstand',
      'Резисторов': 'Widerstände',
      'Наименьший': 'Kleinster',
      'Наибольший': 'Größter',
      'Соединение': 'Schaltung',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Не число:': 'Keine Zahl:',
      'Ом': 'Ω',
      'последовательное': 'Reihe',
      'параллельное': 'parallel',
      'Сопротивление должно быть больше нуля': 'Der Widerstand muss größer als null sein',
      'Нужно хотя бы два резистора': 'Es werden mindestens zwei Widerstände gebraucht',
    },
  },
  en: {
    fields: {
      "resistances": "Resistances in ohms — one per line or separated by spaces",
      "mode": "Connection",
    },
    options: {
      "series": "Series",
      "parallel": "Parallel",
    },
    results: {
      "Общее сопротивление": "Total resistance",
      "Резисторов": "Resistors",
      "Наименьший": "Smallest",
      "Наибольший": "Largest",
      "Соединение": "Connection",
      "Проверьте данные": "Check the values",
    },
    values: {
      "Не число:": "Not a number:",
      "Ом": "Ω",
      "последовательное": "series",
      "параллельное": "parallel",
      "Сопротивление должно быть больше нуля": "Resistance must be greater than zero",
      "Нужно хотя бы два резистора": "At least two resistors are needed",
    },
  },
  uk: {
    fields: {
      "resistances": "Опори, Ом — по одному в рядку або через пробіл",
      "mode": "З'єднання",
    },
    options: {
      "series": "Послідовне",
      "parallel": "Паралельне",
    },
    results: {
      "Общее сопротивление": "Загальний опір",
      "Резисторов": "Резисторів",
      "Наименьший": "Найменший",
      "Наибольший": "Найбільший",
      "Соединение": "З'єднання",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "Не число:": "Не число:",
      "последовательное": "послідовне",
      "параллельное": "паралельне",
      "Сопротивление должно быть больше нуля": "Опір має бути більшим за нуль",
      "Нужно хотя бы два резистора": "Потрібно щонайменше два резистори",
    },
  },
};
