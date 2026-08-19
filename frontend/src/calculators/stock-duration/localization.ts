import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "stock": "Stock on hand",
      "perDay": "Daily use",
      "reserveDays": "Safety buffer, days",
    },
    options: {

    },
    results: {
      "Хватит на": "Lasts for",
      "Заказать через": "Reorder in",
      "Расход в сутки": "Daily use",
      "Проверьте данные": "Check the values",
    },
    values: {
      "дней": "days",
      "Запас не может быть отрицательным": "The stock cannot be negative",
      "Расход в сутки должен быть больше нуля": "The daily use must be greater than zero",
      "Страховой запас больше срока — заказывать нужно уже сейчас": "The buffer exceeds the supply — reorder now",
    },
  },
  uk: {
    fields: {
      "stock": "Запас",
      "perDay": "Витрата на добу",
      "reserveDays": "Страховий запас, днів",
    },
    options: {

    },
    results: {
      "Хватит на": "Вистачить на",
      "Заказать через": "Замовити через",
      "Расход в сутки": "Витрата на добу",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "дней": "днів",
      "Запас не может быть отрицательным": "Запас не може бути від’ємним",
      "Расход в сутки должен быть больше нуля": "Витрата на добу має бути більшою за нуль",
      "Страховой запас больше срока — заказывать нужно уже сейчас": "Страховий запас більший за строк — замовляти треба вже зараз",
    },
  },
};
