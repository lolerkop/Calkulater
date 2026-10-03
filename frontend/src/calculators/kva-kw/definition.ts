import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { kvaKwCopyEn } from './copy.en';
import { kvaKwCopyUk } from './copy.uk';
import { kvaKwCopyDe } from './copy.de';
import { kvaKwCopyEs } from './copy.es';
import { kvaKwReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "kva-kw",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: kvaKwCopyEn, uk: kvaKwCopyUk, de: kvaKwCopyDe, es: kvaKwCopyEs },
  referenceCases: kvaKwReferenceCases,
  publishedExample: { inputs: { mode: 'kva', kw: 10, kva: 0, pf: 0.8 }, expected: ["12,5 кВА"] },
  presentation: {
    id: "kva-kw",
    name: "Калькулятор кВА и кВт",
    slug: "kva-v-kvt",
    fullPath: "/electronics/kva-v-kvt/",
    category: "electronics",
    icon: "zap",
    popularity: 34,
    isNew: false,
    shortDescription: "Перевод полной мощности в активную через коэффициент мощности.",
    
    seoTitle: "Калькулятор кВА в кВт — перевод через коэффициент мощности",
    
    h1: "Калькулятор кВА и кВт",
    keywords: ["кВА в кВт", "перевод кВА", "коэффициент мощности", "мощность генератора"],
    fields: [
  {
    "name": "mode",
    "label": "Что найти",
    "type": "select",
    "defaultValue": "kva",
    "options": [
      {
        "value": "kva",
        "label": "полную мощность, кВА"
      },
      {
        "value": "kw",
        "label": "активную мощность, кВт"
      }
    ]
  },
  {
    "name": "kw",
    "label": "Активная мощность",
    "type": "number",
    "defaultValue": 10,
    "min": 0,
    "step": 0.5,
    "unit": "кВт",
    "showIf": {
      "field": "mode",
      "equals": "kva"
    }
  },
  {
    "name": "kva",
    "label": "Полная мощность",
    "type": "number",
    "defaultValue": 12.5,
    "min": 0,
    "step": 0.5,
    "unit": "кВА",
    "showIf": {
      "field": "mode",
      "equals": "kw"
    }
  },
  {
    "name": "pf",
    "label": "Коэффициент мощности (cos φ)",
    "type": "number",
    "defaultValue": 0.8,
    "min": 0,
    "max": 1,
    "step": 0.05,
    "unit": "1"
  }
],
    resultLabels: {
      "apparent": "Полная мощность",
      "active": "Активная мощность",
      "reactive": "Реактивная мощность",
      "powerFactor": "Коэффициент мощности",
    },

    relatedCalculatorIds: ["ohms-law", "voltage-divider", "capacitor-basics"],
    ...contractContent.ru,
  },
};
