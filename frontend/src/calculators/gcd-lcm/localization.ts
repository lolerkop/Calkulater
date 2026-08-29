import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'numbers': 'Zahlen — eine je Zeile oder mit Leerzeichen getrennt',
    },
    results: {
      'НОД': 'ggT',
      'НОК': 'kgV',
      'Чисел': 'Zahlen',
      'Взаимно простые': 'Teilerfremd',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Не целое число:': 'Keine ganze Zahl:',
      'Не число:': 'Keine Zahl:',
      'да': 'ja',
      'нет': 'nein',
      'Числа должны быть больше нуля': 'Die Zahlen müssen größer als null sein',
      'Нужно хотя бы два числа': 'Es werden mindestens zwei Zahlen gebraucht',
      'НОК этих чисел слишком велик для точного расчёта': 'Das kgV dieser Zahlen ist zu groß für eine genaue Rechnung',
    },
  },
  en: {
    fields: {
      "numbers": "Numbers — one per line or separated by spaces",
    },
    options: {},
    results: {
      "НОД": "GCD",
      "НОК": "LCM",
      "Чисел": "Numbers",
      "Взаимно простые": "Coprime",
      "Проверьте данные": "Check the values",
    },
    values: {
      "Не целое число:": "Not a whole number:",
      "Не число:": "Not a number:",
      "да": "yes",
      "нет": "no",
      "Числа должны быть больше нуля": "The numbers must be greater than zero",
      "Нужно хотя бы два числа": "At least two numbers are needed",
      "НОК этих чисел слишком велик для точного расчёта": "The LCM of these numbers is too large to compute exactly",
    },
  },
  uk: {
    fields: {
      "numbers": "Числа — по одному в рядку або через пробіл",
    },
    options: {},
    results: {
      "НОД": "НСД",
      "НОК": "НСК",
      "Чисел": "Чисел",
      "Взаимно простые": "Взаємно прості",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "Не целое число:": "Не ціле число:",
      "Не число:": "Не число:",
      "да": "так",
      "нет": "ні",
      "Числа должны быть больше нуля": "Числа мають бути більшими за нуль",
      "Нужно хотя бы два числа": "Потрібно щонайменше два числа",
      "НОК этих чисел слишком велик для точного расчёта": "НСК цих чисел завеликий для точного обчислення",
    },
  },
};
