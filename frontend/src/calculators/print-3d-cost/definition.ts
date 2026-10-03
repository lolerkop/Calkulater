import { contextualField } from './contextualField';
import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { print3dCostCopyEn } from './copy.en';
import { print3dCostCopyUk } from './copy.uk';
import { print3dCostCopyDe } from './copy.de';
import { print3dCostCopyEs } from './copy.es';
import { print3dCostReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "print-3d-cost",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: print3dCostCopyEn, uk: print3dCostCopyUk, de: print3dCostCopyDe, es: print3dCostCopyEs },
  referenceCases: print3dCostReferenceCases,
  publishedExample: {
    inputs: { grams: 85, spoolPrice: 1800, spoolWeight: 1000, hours: 6.5, powerW: 120, kwhPrice: 5.5, wearPerHour: 0, markupPct: 0 },
    expected: ["157,29 ₽"],
  },
  presentation: {
    id: "print-3d-cost",
    name: "Калькулятор стоимости 3D-печати",
    slug: "print-3d-cost",
    fullPath: "/household/print-3d-cost/",
    category: "household",
    icon: "layers",
    popularity: 38,
    isNew: false,
    seoTitle: "Калькулятор стоимости 3D-печати — себестоимость детали",
    seoDescription: "Рассчитайте себестоимость 3D-печати: расход пластика, электричество, амортизацию принтера и наценку на готовую деталь.",
    h1: "Калькулятор стоимости 3D-печати",
    keywords: ["стоимость 3D-печати", "себестоимость детали", "расход пластика", "калькулятор 3D-принтера"],
    fields: [
  {
    "name": "grams",
    "label": "Вес детали",
    "type": "number",
    "defaultValue": 85,
    "min": 0,
    "step": 1,
    "unit": "г"
  },
  {
    "name": "spoolPrice",
    "label": "Цена катушки",
    "type": "number",
    "defaultValue": 1800,
    "min": 0,
    "step": 10,
    "unit": "₽"
  },
  {
    "name": "spoolWeight",
    "label": "Вес катушки",
    "type": "number",
    "defaultValue": 1000,
    "min": 0,
    "step": 50,
    "unit": "г"
  },
  {
    "name": "hours",
    "label": "Время печати",
    "type": "number",
    "defaultValue": 6.5,
    "min": 0,
    "step": 0.5,
    "unit": "ч"
  },
  {
    "name": "powerW",
    "label": "Мощность принтера",
    "type": "number",
    "defaultValue": 120,
    "min": 0,
    "step": 10,
    "unit": "Вт"
  },
  {
    "name": "kwhPrice",
    "label": "Цена киловатт-часа",
    "type": "number",
    "defaultValue": 5.5,
    "min": 0,
    "step": 0.1,
    "unit": "₽/кВт·ч"
  },
  {
    "name": "wearPerHour",
    "label": "Амортизация за час",
    "type": "number",
    "defaultValue": 0,
    "min": 0,
    "step": 1,
    "optional": true,
    "unit": "₽/ч"
  },
  {
    "name": "markupPct",
    "label": "Наценка",
    "type": "number",
    "defaultValue": 0,
    "min": 0,
    "step": 1,
    "optional": true,
    "unit": "%"
  }
],
    resultLabels: {
  "total": "Стоимость печати с наценкой",
  "material": "Пластик",
  "energy": "Электричество",
  "wear": "Амортизация принтера",
  "markup": "Наценка",
  "kwh": "Израсходовано энергии",
  "gramPrice": "Цена грамма пластика"
},
    relatedCalculatorIds: ["electricity-usage", "price-per-unit", "workday-cost"],
    ...contract.ru,
  },
};
