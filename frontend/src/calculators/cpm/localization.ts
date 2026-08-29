import type { CalculatorLocalization } from '../../lib/platform/types';

const RESULTS_EN = {
    "CPM": "CPM",
    "Показы": "Impressions",
    "Бюджет": "Budget",
    "Стоимость показа": "Cost per impression",
    "Проверьте данные": "Check the values",
};
const RESULTS_UK = {
    "CPM": "CPM",
    "Показы": "Покази",
    "Бюджет": "Бюджет",
    "Стоимость показа": "Вартість показу",
    "Проверьте данные": "Перевірте дані",
};

export const localization: CalculatorLocalization = {
  de: {
    fields: {
      'mode': 'Was gesucht ist',
      'cost': 'Budget der Kampagne',
      'impressions': 'Einblendungen',
      'cpm': 'CPM',
    },
    options: {
      'cpm': 'CPM',
      'impressions': 'Einblendungen',
      'cost': 'Budget',
    },
    results: {
      'CPM': 'CPM',
      'Показы': 'Einblendungen',
      'Бюджет': 'Budget',
      'Стоимость показа': 'Kosten je Einblendung',
      'Проверьте данные': 'Prüfe die Werte',
    },
    values: {
      '₽': '€',
      'Бюджет не может быть отрицательным': 'Das Budget kann nicht negativ sein',
      'CPM должен быть больше нуля': 'Der CPM muss größer als null sein',
      'Показов должно быть не меньше одного': 'Es muss mindestens eine Einblendung sein',
    },
  },
  en: {
    fields: { mode: "What to find", cost: "Campaign budget", impressions: "Impressions", cpm: "CPM" },
    options: { cpm: "CPM", impressions: "impressions", cost: "budget" },
    results: RESULTS_EN,
    values: {
    "₽": "$",
    "Бюджет не может быть отрицательным": "The budget cannot be negative",
    "CPM должен быть больше нуля": "CPM must be greater than zero",
    "Показов должно быть не меньше одного": "There must be at least one impression",
    },
  },
  uk: {
    fields: { mode: "Що знайти", cost: "Бюджет кампанії", impressions: "Покази", cpm: "CPM" },
    options: { cpm: "CPM", impressions: "покази", cost: "бюджет" },
    results: RESULTS_UK,
    values: {
    "₽": "₴",
    "Бюджет не может быть отрицательным": "Бюджет не може бути від’ємним",
    "CPM должен быть больше нуля": "CPM має бути більшим за нуль",
    "Показов должно быть не меньше одного": "Показів має бути щонайменше один",
    },
  },
};
