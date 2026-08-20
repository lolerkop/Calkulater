import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { "revenue": "Revenue for the period, $", "users": "Total users", "payingUsers": "Of them paying" },
    options: {},
    results: {
      "ARPU": "ARPU", "ARPPU": "ARPPU",
      "Доля платящих": "Paying share",
      "Выручка": "Revenue",
      "Пользователей": "Users",
      "Платящих": "Paying users",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "Выручка должна быть больше нуля": "Revenue must be greater than zero",
      "Число пользователей должно быть больше нуля": "The number of users must be greater than zero",
      "Число платящих не может быть отрицательным": "The number of paying users cannot be negative",
      "Платящих не может быть больше, чем пользователей": "There cannot be more paying users than users",
    },
  },
  uk: {
    fields: { "revenue": "Виручка за період, ₴", "users": "Усього користувачів", "payingUsers": "З них платних" },
    options: {},
    results: {
      "ARPU": "ARPU", "ARPPU": "ARPPU",
      "Доля платящих": "Частка платних",
      "Выручка": "Виручка",
      "Пользователей": "Користувачів",
      "Платящих": "Платних",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "Выручка должна быть больше нуля": "Виручка має бути більшою за нуль",
      "Число пользователей должно быть больше нуля": "Кількість користувачів має бути більшою за нуль",
      "Число платящих не может быть отрицательным": "Кількість платних не може бути від'ємною",
      "Платящих не может быть больше, чем пользователей": "Платних не може бути більше, ніж користувачів",
    },
  },
};
