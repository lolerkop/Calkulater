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
