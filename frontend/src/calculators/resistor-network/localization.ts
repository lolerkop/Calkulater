import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
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
      "последовательное": "послідовне",
      "параллельное": "паралельне",
      "Сопротивление должно быть больше нуля": "Опір має бути більшим за нуль",
      "Нужно хотя бы два резистора": "Потрібно щонайменше два резистори",
    },
  },
};
