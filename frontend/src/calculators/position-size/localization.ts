import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: {
      "deposit": "Account balance, $",
      "riskPct": "Risk allowed per trade, %",
      "entry": "Entry price",
      "stop": "Stop price",
    },
    options: {},
    results: {
      "Размер позиции": "Position size",
      "Целых единиц": "Whole units",
      "Сумма риска": "Risk amount",
      "Риск на единицу": "Risk per unit",
      "Стоимость позиции": "Position value",
      "Доля депозита": "Share of the account",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "шт": "pcs",
      "Депозит должен быть больше нуля": "The account balance must be greater than zero",
      "Допустимый риск должен быть больше нуля": "The permitted risk must be greater than zero",
      "Цена входа должна быть больше нуля": "The entry price must be greater than zero",
      "Цена стопа не может быть отрицательной": "The stop price cannot be negative",
      "Стоп не может совпадать с ценой входа": "The stop cannot equal the entry price",
    },
  },
  uk: {
    fields: {
      "deposit": "Депозит, ₴",
      "riskPct": "Допустимий ризик на угоду, %",
      "entry": "Ціна входу",
      "stop": "Ціна стоп-наказу",
    },
    options: {},
    results: {
      "Размер позиции": "Розмір позиції",
      "Целых единиц": "Цілих одиниць",
      "Сумма риска": "Сума ризику",
      "Риск на единицу": "Ризик на одиницю",
      "Стоимость позиции": "Вартість позиції",
      "Доля депозита": "Частка депозиту",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "шт": "од",
      "Депозит должен быть больше нуля": "Депозит має бути більшим за нуль",
      "Допустимый риск должен быть больше нуля": "Допустимий ризик має бути більшим за нуль",
      "Цена входа должна быть больше нуля": "Ціна входу має бути більшою за нуль",
      "Цена стопа не может быть отрицательной": "Ціна стопу не може бути від'ємною",
      "Стоп не может совпадать с ценой входа": "Стоп не може збігатися з ціною входу",
    },
  },
};
