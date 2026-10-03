import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { validate } from './validate';
import { contractContent } from './contractContent';
import { audienceGrowthCopyEn } from './copy.en';
import { audienceGrowthCopyUk } from './copy.uk';
import { audienceGrowthCopyDe } from './copy.de';
import { audienceGrowthCopyEs } from './copy.es';
import { audienceGrowthReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'audience-growth',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: audienceGrowthCopyEn, uk: audienceGrowthCopyUk, de: audienceGrowthCopyDe, es: audienceGrowthCopyEs },
  referenceCases: audienceGrowthReferenceCases,
  publishedExample: {
    inputs: { start: 12000, end: 18500, periods: 6 },
    expected: ['54,17%'],
  },
  presentation: {
    "id": "audience-growth",
    "name": "Калькулятор роста аудитории",
    "slug": "audience-growth",
    "fullPath": "/business/audience-growth/",
    "category": "business",
    "icon": "trending-up",
    "popularity": 23,
    "isNew": false,
    "shortDescription": "Общий рост аудитории и средний темп за один период.",
    "seoTitle": "Калькулятор роста аудитории: общий и за период",
    "seoDescription": "Рассчитайте общий рост аудитории и средний темп за один период по начальному и конечному значению и числу периодов.",
    "h1": "Калькулятор роста аудитории",
    "keywords": [
        "рост аудитории",
        "темп роста",
        "прирост подписчиков",
        "аналитика соцсетей"
    ],
    "fields": [
        {
            "name": "start",
            "label": "Аудитория на начало",
            "type": "number",
            "defaultValue": 12000,
            "min": 0,
            "step": 1,
            "max": 9007199254740991
        },
        {
            "name": "end",
            "label": "Аудитория на конец",
            "type": "number",
            "defaultValue": 18500,
            "min": 0,
            "step": 1,
            "max": 9007199254740991
        },
        {
            "name": "periods",
            "label": "Число периодов",
            "type": "number",
            "defaultValue": 6,
            "min": 1,
            "step": 1
        }
    ],
    "resultLabels": {
        "total": "Общий рост",
        "perPeriod": "Рост за период",
        "delta": "Прирост",
        "multiple": "Множитель"
    },
    "relatedCalculatorIds": [
        "cagr",
        "engagement-rate",
        "conversion-rate"
    ] ,
    ...contractContent.ru,
  },
};
