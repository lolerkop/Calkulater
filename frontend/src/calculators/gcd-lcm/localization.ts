import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
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
      "да": "так",
      "нет": "ні",
      "Числа должны быть больше нуля": "Числа мають бути більшими за нуль",
      "Нужно хотя бы два числа": "Потрібно щонайменше два числа",
      "НОК этих чисел слишком велик для точного расчёта": "НСК цих чисел завеликий для точного обчислення",
    },
  },
};
