import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  en: {
    fields: { "subscribers": "Subscribers", "arpuMonth": "Average revenue per subscriber per month, $", "growthPct": "Monthly base growth, %" },
    options: {},
    results: {
      "MRR": "MRR", "ARR": "ARR",
      "MRR через месяц": "MRR next month",
      "Прирост за месяц": "Growth in a month",
      "Подписчиков": "Subscribers",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "Число подписчиков должно быть больше нуля": "The number of subscribers must be greater than zero",
      "Средний доход с подписчика должен быть больше нуля": "The average revenue per subscriber must be greater than zero",
      "Падение выручки не может превышать ста процентов": "A revenue decline cannot exceed one hundred percent",
    },
  },
  uk: {
    fields: { "subscribers": "Передплатників", "arpuMonth": "Середній дохід з передплатника на місяць, ₴", "growthPct": "Зростання бази за місяць, %" },
    options: {},
    results: {
      "MRR": "MRR", "ARR": "ARR",
      "MRR через месяц": "MRR через місяць",
      "Прирост за месяц": "Приріст за місяць",
      "Подписчиков": "Передплатників",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "Число подписчиков должно быть больше нуля": "Кількість передплатників має бути більшою за нуль",
      "Средний доход с подписчика должен быть больше нуля": "Середній дохід з передплатника має бути більшим за нуль",
      "Падение выручки не может превышать ста процентов": "Падіння виручки не може перевищувати ста відсотків",
    },
  },
};
