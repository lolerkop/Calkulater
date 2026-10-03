import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { validate } from './validate';
import { aprApyCopyEn } from './copy.en';
import { aprApyCopyUk } from './copy.uk';
import { aprApyCopyDe } from './copy.de';
import { aprApyCopyEs } from './copy.es';
import { aprApyReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'apr-apy',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: aprApyCopyEn, uk: aprApyCopyUk, de: aprApyCopyDe, es: aprApyCopyEs },
  referenceCases: aprApyReferenceCases,
  publishedExample: {
    inputs: { mode: 'toApy', rate: 18, periods: 12 },
    expected: ['19,56%'],
  },
  presentation: {
    "id": "apr-apy",
    "name": "Калькулятор APR и APY",
    "slug": "apr-apy",
    "fullPath": "/finance/apr-apy/",
    "category": "finance",
    "icon": "percent",
    "popularity": 24,
    "isNew": false,
    "shortDescription": "Перевод между номинальной и эффективной годовой ставкой.",
    "seoTitle": "Калькулятор APR и APY: номинальная и эффективная ставка",
    "seoDescription": "Переведите номинальную годовую ставку в эффективную и обратно по числу начислений в году, со ставкой за период и годовым множителем.",
    "h1": "Калькулятор APR и APY",
    "keywords": [
        "apr apy",
        "эффективная ставка",
        "номинальная ставка",
        "сложный процент"
    ],
    "fields": [
        {
            "name": "mode",
            "label": "Направление перевода",
            "type": "select",
            "defaultValue": "toApy",
            "options": [
                {
                    "value": "toApy",
                    "label": "номинальную годовую в эффективную"
                },
                {
                    "value": "toApr",
                    "label": "эффективную годовую в номинальную"
                }
            ]
        },
        {
            "name": "rate",
            "label": "Ставка, %",
            "type": "number",
            "defaultValue": 18,
            "min": 0,
            "step": 0.5
        },
        {
            "name": "periods",
            "label": "Начислений в году",
            "type": "number",
            "defaultValue": 12,
            "min": 1,
            "max": 365,
            "step": 1
        }
    ],
    "resultLabels": {
        "apy": "Эффективная ставка (APY)",
        "apr": "Номинальная ставка (APR)",
        "nominal": "Номинальная ставка",
        "perPeriod": "Ставка за период",
        "periods": "Периодов в году",
        "multiple": "Множитель за год"
    },
    "relatedCalculatorIds": [
        "compound-interest",
        "deposit-calculator",
        "rule-of-72"
    ],
    ...contractContent.ru,
  },
};
