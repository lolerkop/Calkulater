import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import { employeeCostCopyEn } from './copy.en';
import { employeeCostCopyUk } from './copy.uk';
import { employeeCostCopyDe } from './copy.de';
import { employeeCostCopyEs } from './copy.es';
import { employeeCostReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'employee-cost',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: employeeCostCopyEn, uk: employeeCostCopyUk, de: employeeCostCopyDe, es: employeeCostCopyEs },
  referenceCases: employeeCostReferenceCases,
  publishedExample: {
    inputs: { gross: 180000, taxPct: 30, overhead: 25000 },
    expected: ['259 000,00 ₽'],
  },
  presentation: {
    "id": "employee-cost",
    "name": "Калькулятор стоимости сотрудника",
    "slug": "employee-cost",
    "fullPath": "/business/employee-cost/",
    "category": "business",
    "icon": "users",
    "popularity": 23,
    "isNew": false,
    "shortDescription": "Полная стоимость сотрудника со взносами и накладными расходами.",
    "seoTitle": "Калькулятор стоимости сотрудника для бизнеса",
    "seoDescription": "Рассчитайте полную стоимость сотрудника по окладу, ставке взносов и накладным расходам с итоговым множителем к окладу.",
    "h1": "Калькулятор стоимости сотрудника",
    "keywords": [
        "стоимость сотрудника",
        "взносы с зарплаты",
        "накладные расходы",
        "затраты на персонал"
    ],
    "fields": [
        {
            "name": "gross",
            "label": "Начисленный оклад до удержаний",
            "type": "number",
            "defaultValue": 180000,
            "min": 0,
            "step": 5000,
            "unit": "₽"
        },
        {
            "name": "taxPct",
            "label": "Взносы работодателя",
            "type": "number",
            "defaultValue": 30,
            "min": 0,
            "max": 200,
            "step": 1,
            "unit": "%"
        },
        {
            "name": "overhead",
            "label": "Накладные расходы за период",
            "type": "number",
            "defaultValue": 25000,
            "min": 0,
            "step": 1000,
            "unit": "₽"
        }
    ],
    "resultLabels": {
        "total": "Полная стоимость сотрудника",
        "tax": "Взносы",
        "gross": "Оклад",
        "overhead": "Накладные",
        "ratio": "Множитель к окладу"
    },
    "relatedCalculatorIds": [
        "workday-cost",
        "revenue-per-employee",
        "overtime"
    ] ,
    ...contractContent.ru,
  },
};
