import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "mode": "What to find",
      "shares": "Shares outstanding",
      "price": "Price per share, $",
      "cap": "Market capitalisation, $",
    },
    options: {
      "cap": "the capitalisation",
      "price": "the share price",
    },
    results: {
      "Капитализация": "Market capitalisation",
      "Цена одной акции": "Price per share",
      "Акций в обращении": "Shares outstanding",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "шт": "pcs",
      "Число акций должно быть больше нуля": "The share count must be greater than zero",
      "Цена акции должна быть больше нуля": "The share price must be greater than zero",
      "Капитализация должна быть больше нуля": "The capitalisation must be greater than zero",
    },
  },
  uk: {
    fields: {
      "mode": "Що знайти",
      "shares": "Акцій в обігу, шт",
      "price": "Ціна однієї акції, ₴",
      "cap": "Капіталізація, ₴",
    },
    options: {
      "cap": "капіталізацію",
      "price": "ціну акції",
    },
    results: {
      "Капитализация": "Капіталізація",
      "Цена одной акции": "Ціна однієї акції",
      "Акций в обращении": "Акцій в обігу",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "шт": "шт",
      "Число акций должно быть больше нуля": "Кількість акцій має бути більшою за нуль",
      "Цена акции должна быть больше нуля": "Ціна акції має бути більшою за нуль",
      "Капитализация должна быть больше нуля": "Капіталізація має бути більшою за нуль",
    },
  },
};
