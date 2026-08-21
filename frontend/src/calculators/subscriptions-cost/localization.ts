import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { "items": "Subscriptions: name, price and period in months per line" },
    options: {},
    results: {
      "В месяц": "Per month",
      "В год": "Per year",
      "Подписок": "Subscriptions",
      "Самая дорогая": "Most expensive",
      "Её вклад в месяц": "Its share per month",
      "Подписки в пересчёте на месяц": "Subscriptions per month",
      "Подписка": "Subscription",
      "Цена": "Price",
      "Месяцев": "Months",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "Нужны название, цена и период в месяцах в строке:": "Name, price and period in months are required on the line:",
      "Цена и период должны быть числами в строке:": "Price and period must be numbers on the line:",
      "Период в месяцах должен быть больше нуля в строке:": "The period in months must be greater than zero on the line:",
      "Цена не может быть отрицательной": "The price cannot be negative",
      "Введите хотя бы одну подписку": "Enter at least one subscription",
    },
  },
  uk: {
    fields: { "items": "Підписки: назва, ціна і період у місяцях у рядку" },
    options: {},
    results: {
      "В месяц": "На місяць",
      "В год": "На рік",
      "Подписок": "Підписок",
      "Самая дорогая": "Найдорожча",
      "Её вклад в месяц": "Її внесок на місяць",
      "Подписки в пересчёте на месяц": "Підписки в перерахунку на місяць",
      "Подписка": "Підписка",
      "Цена": "Ціна",
      "Месяцев": "Місяців",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "Нужны название, цена и период в месяцах в строке:": "Потрібні назва, ціна і період у місяцях у рядку:",
      "Цена и период должны быть числами в строке:": "Ціна і період мають бути числами в рядку:",
      "Период в месяцах должен быть больше нуля в строке:": "Період у місяцях має бути більшим за нуль у рядку:",
      "Цена не может быть отрицательной": "Ціна не може бути від'ємною",
      "Введите хотя бы одну подписку": "Введіть хоча б одну підписку",
    },
  },
};
