import { contextualField } from './contextualField';
import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { stockDurationCopyEn } from './copy.en';
import { stockDurationCopyUk } from './copy.uk';
import { stockDurationCopyDe } from './copy.de';
import { stockDurationCopyEs } from './copy.es';
import { stockDurationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "stock-duration",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: stockDurationCopyEn, uk: stockDurationCopyUk, de: stockDurationCopyDe, es: stockDurationCopyEs },
  referenceCases: stockDurationReferenceCases,
  publishedExample: { inputs: { stock: 30, perDay: 2, reserveDays: 0 }, expected: ["15 дней"] },
  presentation: {
    id: "stock-duration",
    name: "Калькулятор запаса продукта",
    slug: "stock-duration",
    fullPath: "/household/stock-duration/",
    category: "household",
    icon: "package",
    popularity: 41,
    isNew: false,
    shortDescription: "На сколько дней хватит запаса при известном расходе.",
    seoTitle: "Калькулятор запаса — на сколько дней хватит",
    seoDescription: "Рассчитайте, на сколько дней хватит запаса при известном суточном расходе, и когда пора делать новый заказ.",
    h1: "Калькулятор запаса продукта",
    keywords: ["на сколько хватит запаса", "калькулятор запаса", "когда заказывать снова", "расход в день"],
    fields: [
  {
    "name": "stock",
    "label": "Запас",
    "type": "number",
    "defaultValue": 30,
    "min": 0,
    "step": 0.1,
    "unit": "общая единица"
  },
  {
    "name": "perDay",
    "label": "Расход в сутки",
    "type": "number",
    "defaultValue": 2,
    "min": 0,
    "step": 0.1,
    "unit": "общая единица/сутки"
  },
  {
    "name": "reserveDays",
    "label": "Страховой запас",
    "type": "number",
    "defaultValue": 0,
    "min": 0,
    "step": 1,
    "optional": true,
    "unit": "дней"
  }
],
    resultLabels: {
  "days": "Хватит на",
  "order": "Заказать через",
  "perDay": "Расход в сутки"
},
    relatedCalculatorIds: ["price-per-unit", "electricity-usage", "trip-cost"],
    ...contract.ru,
  },
};
