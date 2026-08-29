import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'amount': 'Betrag heute, €',
      'ratePct': 'Inflation, % im Jahr',
      'years': 'Zeitraum, Jahre',
    },
    results: {
      'Покупательная способность': 'Kaufkraft',
      'Столько же в будущих деньгах': 'Derselbe Wert in künftigem Geld',
      'Потеряно покупательной способности': 'Verlorene Kaufkraft',
      'Доля потери': 'Anteil des Verlusts',
      'Множитель цен': 'Preisfaktor',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      '₽': '€',
      'Сумма должна быть больше нуля': 'Der Betrag muss größer als null sein',
      'Инфляция не может достигать минус ста процентов': 'Die Inflation kann minus hundert Prozent nicht erreichen',
      'Срок должен быть больше нуля': 'Der Zeitraum muss größer als null sein',
      'Значение слишком велико для расчёта': 'Der Wert ist zu groß für die Rechnung',
    },
  },
  en: {
    fields: { "amount": "Amount today, $", "ratePct": "Inflation, % per year", "years": "Term, years" },
    options: {},
    results: {
      "Покупательная способность": "Purchasing power",
      "Столько же в будущих деньгах": "The same in future money",
      "Потеряно покупательной способности": "Purchasing power lost",
      "Доля потери": "Share lost",
      "Множитель цен": "Price factor",
      "Проверьте данные": "Check the values",
    },
    values: {
      "₽": "$",
      "Сумма должна быть больше нуля": "The amount must be greater than zero",
      "Инфляция не может достигать минус ста процентов": "Inflation cannot reach minus one hundred percent",
      "Срок должен быть больше нуля": "The term must be greater than zero",
      "Значение слишком велико для расчёта": "The value is too large to compute",
    },
  },
  uk: {
    fields: { "amount": "Сума сьогодні, ₴", "ratePct": "Інфляція, % на рік", "years": "Строк, років" },
    options: {},
    results: {
      "Покупательная способность": "Купівельна спроможність",
      "Столько же в будущих деньгах": "Стільки ж у майбутніх грошах",
      "Потеряно покупательной способности": "Втрачено купівельної спроможності",
      "Доля потери": "Частка втрати",
      "Множитель цен": "Множник цін",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "₽": "₴",
      "Сумма должна быть больше нуля": "Сума має бути більшою за нуль",
      "Инфляция не может достигать минус ста процентов": "Інфляція не може сягати мінус ста відсотків",
      "Срок должен быть больше нуля": "Строк має бути більшим за нуль",
      "Значение слишком велико для расчёта": "Значення завелике для обчислення",
    },
  },
};
