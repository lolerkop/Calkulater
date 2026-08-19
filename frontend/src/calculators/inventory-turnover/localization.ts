import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "cogs": "Cost of goods sold for the period, $",
      "mode": "Average inventory",
      "avgInventory": "Average inventory, $",
      "beginInventory": "Opening inventory, $",
      "endInventory": "Closing inventory, $",
    },
    options: {
      "direct": "is known",
      "beginEnd": "compute from balances",
    },
    results: {
      "Оборачиваемость": "Turnover",
      "Срок хранения": "Days on hand",
      "Средний запас": "Average inventory",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "раз": "times",
      "дней": "days",
      "Себестоимость продаж должна быть больше нуля": "The cost of goods sold must be greater than zero",
      "Средний запас должен быть больше нуля": "The average inventory must be greater than zero",
    },
  },
  uk: {
    fields: {
      "cogs": "Собівартість продажів за період, ₴",
      "mode": "Середній запас",
      "avgInventory": "Середній запас, ₴",
      "beginInventory": "Запас на початок, ₴",
      "endInventory": "Запас на кінець, ₴",
    },
    options: {
      "direct": "відомий",
      "beginEnd": "рахувати за залишками",
    },
    results: {
      "Оборачиваемость": "Оборотність",
      "Срок хранения": "Термін зберігання",
      "Средний запас": "Середній запас",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "раз": "разів",
      "дней": "днів",
      "Себестоимость продаж должна быть больше нуля": "Собівартість продажів має бути більшою за нуль",
      "Средний запас должен быть больше нуля": "Середній запас має бути більшим за нуль",
    },
  },
};
