// CAGR — четвёртый калькулятор волны и первый, где важна точность
// дробной степени, а не только арифметика.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import { cagrCopyEn } from './copy.en';
import { cagrCopyUk } from './copy.uk';
import { cagrCopyDe } from './copy.de';
import { cagrCopyEs } from './copy.es';
import { cagrReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'cagr',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: cagrCopyEn, uk: cagrCopyUk, de: cagrCopyDe, es: cagrCopyEs },
  referenceCases: cagrReferenceCases,
  publishedExample: { inputs: { begin: 100000, end: 200000, years: 5 }, expected: ['14,87 %', '100,00 %'] },
  presentation: {
    "id": "cagr",
    "name": "CAGR-калькулятор",
    "slug": "cagr",
    "fullPath": "/finance/cagr/",
    "category": "finance",
    "icon": "trending-up",
    "popularity": 56,
    "isNew": false,
    "shortDescription": "Среднегодовой темп роста между двумя значениями.",
    "seoTitle": "CAGR-калькулятор — среднегодовой темп роста",
    "seoDescription": "Расчёт среднегодового темпа роста между начальной и конечной стоимостью за любое число лет.",
    "h1": "CAGR-калькулятор",
    "keywords": [
        "cagr калькулятор",
        "среднегодовой рост",
        "годовая доходность"
    ],
    "fields": [
        {
            "name": "begin",
            "label": "Начальная стоимость",
            "type": "number",
            "defaultValue": 100000,
            "min": 0,
            "unit": "₽"
        },
        {
            "name": "end",
            "label": "Конечная стоимость",
            "type": "number",
            "defaultValue": 200000,
            "min": 0,
            "unit": "₽"
        },
        {
            "name": "years",
            "label": "Количество лет",
            "type": "number",
            "defaultValue": 5,
            "min": 0,
            "step": 0.5
        }
    ],
    "resultLabels": {
        "cagr": "Среднегодовой рост",
        "total": "Общий рост за срок"
    },
    "relatedCalculatorIds": [
        "compound-interest",
        "savings-rate",
        "deposit-calculator"
    ],
    ...contractContent.ru,
  },
};
