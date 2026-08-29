import type { CalculatorLocalization } from '../../lib/platform/types';

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'startCustomers': 'Kunden am Anfang',
      'lost': 'Im Zeitraum verloren',
      'gained': 'Im Zeitraum gewonnen',
    },
    results: {
      'Отток': 'Abwanderung',
      'Удержание': 'Bindung',
      'Клиентов на конец': 'Kunden am Ende',
      'Чистый прирост': 'Nettozuwachs',
      'Средний срок жизни, периодов': 'Mittlere Kundendauer, Zeiträume',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      'Клиентов на начало должно быть больше нуля': 'Am Anfang muss es mehr als null Kunden geben',
      'Числа клиентов не могут быть отрицательными': 'Kundenzahlen können nicht negativ sein',
      'Ушло не может быть больше, чем было на начало': 'Es können nicht mehr Kunden verloren gehen, als am Anfang da waren',
    },
  },
  en: {
    fields: { "startCustomers": "Customers at the start", "lost": "Lost during the period", "gained": "Gained during the period" },
    options: {},
    results: {
      "Отток": "Churn",
      "Удержание": "Retention",
      "Клиентов на конец": "Customers at the end",
      "Чистый прирост": "Net growth",
      "Средний срок жизни, периодов": "Average lifetime, periods",
      "Проверьте данные": "Check the values",
    },
    values: {
      "Клиентов на начало должно быть больше нуля": "There must be more than zero customers at the start",
      "Числа клиентов не могут быть отрицательными": "Customer counts cannot be negative",
      "Ушло не может быть больше, чем было на начало": "More customers cannot be lost than there were at the start",
    },
  },
  uk: {
    fields: { "startCustomers": "Клієнтів на початок", "lost": "Пішло за період", "gained": "Прийшло за період" },
    options: {},
    results: {
      "Отток": "Відтік",
      "Удержание": "Утримання",
      "Клиентов на конец": "Клієнтів на кінець",
      "Чистый прирост": "Чистий приріст",
      "Средний срок жизни, периодов": "Середній строк життя, періодів",
      "Проверьте данные": "Перевірте дані",
    },
    values: {
      "Клиентов на начало должно быть больше нуля": "Клієнтів на початок має бути більше за нуль",
      "Числа клиентов не могут быть отрицательными": "Кількість клієнтів не може бути від'ємною",
      "Ушло не может быть больше, чем было на начало": "Пішло не може бути більше, ніж було на початок",
    },
  },
};
