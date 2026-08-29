import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'visitors': 'Besuche im Zeitraum',
      'conversions': 'Konversionen',
      'cost': 'Budget im Zeitraum, €',
    },
    results: {
      'Конверсия': 'Konversionsrate',
      'Конверсий': 'Konversionen',
      'Визитов': 'Besuche',
      'Цена конверсии': 'Kosten je Konversion',
      'Визитов на одну конверсию': 'Besuche je Konversion',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      '₽': '€',
      'Число визитов должно быть больше нуля': 'Die Zahl der Besuche muss größer als null sein',
      'Число конверсий не может быть отрицательным': 'Die Zahl der Konversionen kann nicht negativ sein',
      'Конверсий не может быть больше, чем визитов': 'Es kann nicht mehr Konversionen als Besuche geben',
      'Бюджет не может быть отрицательным': 'Das Budget kann nicht negativ sein',
    },
  },
  en: {
    fields: { "visitors": "Visits for the period", "conversions": "Conversions", "cost": "Budget for the period, $" },
    options: {},
    results: {
      "Конверсия": "Conversion rate",
      "Конверсий": "Conversions",
      "Визитов": "Visits",
      "Цена конверсии": "Cost per conversion",
      "Визитов на одну конверсию": "Visits per conversion",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "Число визитов должно быть больше нуля": "The number of visits must be greater than zero",
      "Число конверсий не может быть отрицательным": "The number of conversions cannot be negative",
      "Конверсий не может быть больше, чем визитов": "There cannot be more conversions than visits",
      "Бюджет не может быть отрицательным": "The budget cannot be negative",
    },
  },
  uk: {
    fields: { "visitors": "Візитів за період", "conversions": "Цільових дій", "cost": "Бюджет за період, ₴" },
    options: {},
    results: {
      "Конверсия": "Конверсія",
      "Конверсий": "Конверсій",
      "Визитов": "Візитів",
      "Цена конверсии": "Ціна конверсії",
      "Визитов на одну конверсию": "Візитів на одну конверсію",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "Число визитов должно быть больше нуля": "Кількість візитів має бути більшою за нуль",
      "Число конверсий не может быть отрицательным": "Кількість конверсій не може бути від'ємною",
      "Конверсий не может быть больше, чем визитов": "Конверсій не може бути більше, ніж візитів",
      "Бюджет не может быть отрицательным": "Бюджет не може бути від'ємним",
    },
  },
};
