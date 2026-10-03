// Кредитная нагрузка. Процентный вывод с пороговой оценкой.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import { dtiCopyEn } from './copy.en';
import { dtiCopyUk } from './copy.uk';
import { dtiCopyDe } from './copy.de';
import { dtiCopyEs } from './copy.es';
import { dtiReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'dti',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: dtiCopyEn, uk: dtiCopyUk, de: dtiCopyDe, es: dtiCopyEs },
  referenceCases: dtiReferenceCases,
  publishedExample: { inputs: { payments: 45000, income: 150000 }, expected: ['30,00 %', 'До 30 % (условная зона)'] },
  presentation: {
    "id": "dti",
    "name": "Калькулятор кредитной нагрузки",
    "slug": "dti",
    "fullPath": "/finance/dti/",
    "category": "finance",
    "icon": "percent",
    "popularity": 50,
    "isNew": false,
    "shortDescription": "Какая доля дохода до налогов уходит на обслуживание долгов.",
    "seoTitle": "Калькулятор кредитной нагрузки — DTI и остаток дохода",
    "seoDescription": "Рассчитайте DTI по месячным долгам и доходу до налогов. Показаны условные зоны и остаток до налогов и обычных расходов без оценки одобрения кредита.",
    "h1": "Калькулятор кредитной нагрузки",
    "keywords": [
        "кредитная нагрузка",
        "DTI",
        "долговая нагрузка"
    ],
    "fields": [
        {
            "name": "payments",
            "label": "Ежемесячные платежи по долгам",
            "type": "number",
            "defaultValue": 45000,
            "min": 0,
            "unit": "₽"
        },
        {
            "name": "income",
            "label": "Месячный доход до налогов",
            "type": "number",
            "defaultValue": 150000,
            "min": 0,
            "unit": "₽"
        }
    ],
    "resultLabels": {
        "dti": "Кредитная нагрузка",
        "assessment": "Оценка"
    },
    "relatedCalculatorIds": [
        "credit-calculator",
        "savings-rate",
        "simple-interest"
    ],
    ...contractContent.ru,
  },
};
