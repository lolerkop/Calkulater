import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { validate } from './validate';
import { contractContent } from './contractContent';
import { cogsUnitCostCopyEn } from './copy.en';
import { cogsUnitCostCopyUk } from './copy.uk';
import { cogsUnitCostCopyDe } from './copy.de';
import { cogsUnitCostCopyEs } from './copy.es';
import { cogsUnitCostReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'cogs-unit-cost',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: cogsUnitCostCopyEn, uk: cogsUnitCostCopyUk, de: cogsUnitCostCopyDe, es: cogsUnitCostCopyEs },
  referenceCases: cogsUnitCostReferenceCases,
  publishedExample: {
    inputs: { materials: 240000, labor: 96000, overhead: 54000, units: 1500 },
    expected: ['260,00 ₽'],
  },
  presentation: {
    "id": "cogs-unit-cost",
    "name": "Калькулятор себестоимости единицы",
    "slug": "unit-cost",
    "fullPath": "/business/unit-cost/",
    "category": "business",
    "icon": "package",
    "popularity": 23,
    "isNew": false,
    "shortDescription": "Себестоимость одной единицы продукции по материалам, труду и накладным.",
    "seoTitle": "Калькулятор себестоимости единицы продукции",
    "seoDescription": "Рассчитайте себестоимость одной единицы по затратам на материалы, труд и накладные расходы, а также долю материалов в сумме затрат.",
    "h1": "Калькулятор себестоимости единицы",
    "keywords": [
        "себестоимость единицы",
        "расчёт себестоимости",
        "затраты на продукцию",
        "доля материалов"
    ],
    "fields": [
        {
            "name": "materials",
            "label": "Материалы",
            "type": "number",
            "defaultValue": 240000,
            "min": 0,
            "step": 1000,
            "unit": "₽"
        },
        {
            "name": "labor",
            "label": "Труд",
            "type": "number",
            "defaultValue": 96000,
            "min": 0,
            "step": 1000,
            "unit": "₽"
        },
        {
            "name": "overhead",
            "label": "Накладные расходы",
            "type": "number",
            "defaultValue": 54000,
            "min": 0,
            "step": 1000,
            "unit": "₽"
        },
        {
            "name": "units",
            "label": "Выпущено единиц",
            "type": "number",
            "defaultValue": 1500,
            "min": 0,
            "step": 1,
            "max": 9007199254740991
        }
    ],
    "resultLabels": {
        "unit": "Себестоимость единицы",
        "total": "Всего затрат",
        "units": "Единиц",
        "materials": "Доля материалов"
    },
    "relatedCalculatorIds": [
        "cogs",
        "contribution-margin",
        "price-per-unit"
    ] ,
    ...contractContent.ru,
  },
};
