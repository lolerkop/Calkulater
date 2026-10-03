import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { validate } from './validate';
import { contractContent } from './contractContent';
import { cycleTimeCopyEn } from './copy.en';
import { cycleTimeCopyUk } from './copy.uk';
import { cycleTimeCopyDe } from './copy.de';
import { cycleTimeCopyEs } from './copy.es';
import { cycleTimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "cycle-time",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: cycleTimeCopyEn, uk: cycleTimeCopyUk, de: cycleTimeCopyDe, es: cycleTimeCopyEs },
  referenceCases: cycleTimeReferenceCases,
  publishedExample: { inputs: { availableMinutes: 480, demand: 120, actualCycle: 3.5 }, expected: ["4 мин/шт"] },
  presentation: {
    "id": "cycle-time",
    "name": "Калькулятор такта производства",
    "slug": "takt-proizvodstva",
    "fullPath": "/business/takt-proizvodstva/",
    "category": "business",
    "icon": "repeat",
    "popularity": 33,
    "isNew": false,
    "shortDescription": "Сколько времени можно тратить на одну единицу, чтобы успевать за спросом.",
    "seoTitle": "Калькулятор такта производства — время на единицу продукции",
    "seoDescription": "Рассчитайте такт производства по доступному времени смены и спросу, сравните с фактическим циклом и оцените загрузку.",
    "h1": "Калькулятор такта производства",
    "keywords": [
        "такт производства",
        "время цикла",
        "бережливое производство",
        "загрузка участка"
    ],
    "fields": [
        {
            "name": "availableMinutes",
            "label": "Доступное время за смену",
            "type": "number",
            "defaultValue": 480,
            "min": 0,
            "step": 10,
            "unit": "мин"
        },
        {
            "name": "demand",
            "label": "Спрос за смену, шт",
            "type": "number",
            "defaultValue": 120,
            "min": 1,
            "step": 1,
            "max": 9007199254740991
        },
        {
            "name": "actualCycle",
            "label": "Фактический цикл",
            "type": "number",
            "defaultValue": 3.5,
            "min": 0,
            "step": 0.1,
            "unit": "мин"
        }
    ],
    "resultLabels": {
        "takt": "Такт производства",
        "perHour": "Единиц в час",
        "actual": "Фактический цикл",
        "load": "Загрузка такта",
        "capacity": "Возможный выпуск за смену"
    },
    "relatedCalculatorIds": [
        "revenue-per-employee",
        "inventory-turnover",
        "employee-cost"
    ] ,
    ...contractContent.ru,
  },
};
