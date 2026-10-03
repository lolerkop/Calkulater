import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import { timeValueMoneyCopyEn } from './copy.en';
import { timeValueMoneyCopyUk } from './copy.uk';
import { timeValueMoneyCopyDe } from './copy.de';
import { timeValueMoneyCopyEs } from './copy.es';
import { timeValueMoneyReferenceCases } from './referenceCases';

const COMPOUNDING = [
  { value: 'month', label: 'Ежемесячно' },
  { value: 'quarter', label: 'Ежеквартально' },
  { value: 'year', label: 'Ежегодно' },
];

export const definition: CalculatorDefinitionV2 = {
  id: "time-value-money",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: timeValueMoneyCopyEn, uk: timeValueMoneyCopyUk, de: timeValueMoneyCopyDe, es: timeValueMoneyCopyEs },
  referenceCases: timeValueMoneyReferenceCases,
  publishedExample: { inputs: { mode: 'fv', amount: 100000, rate: 12, years: 5, compounding: 'month' }, expected: ["181 669,67 ₽"] },
  presentation: {
    "id": "time-value-money",
    "name": "Калькулятор будущей и текущей стоимости денег",
    "slug": "time-value-money",
    "fullPath": "/finance/time-value-money/",
    "category": "finance",
    "icon": "trending-up",
    "popularity": 15,
    "isNew": false,
    "shortDescription": "Будущая стоимость суммы и дисконтирование будущих денег к сегодняшним.",
    "seoTitle": "Калькулятор стоимости денег во времени: FV и PV",
    "seoDescription": "Рассчитайте будущую стоимость суммы или приведите будущие деньги к сегодняшним с учётом частоты начисления.",
    "h1": "Калькулятор будущей и текущей стоимости денег",
    "keywords": [
        "стоимость денег во времени",
        "дисконтирование",
        "будущая стоимость",
        "текущая стоимость"
    ],
    "fields": [
        {
            "name": "mode",
            "label": "Что считаем",
            "type": "select",
            "defaultValue": "fv",
            "options": [
                {
                    "value": "fv",
                    "label": "будущую стоимость"
                },
                {
                    "value": "pv",
                    "label": "текущую стоимость"
                }
            ]
        },
        {
            "name": "amount",
            "label": "Сумма",
            "type": "number",
            "defaultValue": 100000,
            "min": 0,
            "step": 10000,
            "unit": "₽"
        },
        {
            "name": "rate",
            "label": "Номинальная годовая ставка, %",
            "type": "number",
            "defaultValue": 12,
            "min": 0,
            "step": 0.1
        },
        {
            "name": "years",
            "label": "Срок, лет",
            "type": "number",
            "defaultValue": 5,
            "min": 0,
            "step": 0.1
        },
        {
            "name": "compounding",
            "label": "Частота начисления",
            "type": "select",
            "defaultValue": "month",
            "options": [
                {
                    "value": "month",
                    "label": "Ежемесячно"
                },
                {
                    "value": "quarter",
                    "label": "Ежеквартально"
                },
                {
                    "value": "year",
                    "label": "Ежегодно"
                }
            ]
        }
    ],
    "resultLabels": {
        "fv": "Будущая стоимость",
        "pv": "Текущая стоимость",
        "factor": "Множитель роста",
        "ear": "Эффективная годовая ставка",
        "periods": "Периодов начисления",
        "amount": "Исходная сумма"
    },
    "relatedCalculatorIds": [
        "compound-interest",
        "inflation",
        "real-return"
    ],
    ...contractContent.ru,
  },
};
