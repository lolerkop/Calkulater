import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { capacitorBasicsCopyEn } from './copy.en';
import { capacitorBasicsCopyUk } from './copy.uk';
import { capacitorBasicsCopyDe } from './copy.de';
import { capacitorBasicsCopyEs } from './copy.es';
import { capacitorBasicsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "capacitor-basics",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: capacitorBasicsCopyEn, uk: capacitorBasicsCopyUk, de: capacitorBasicsCopyDe, es: capacitorBasicsCopyEs },
  referenceCases: capacitorBasicsReferenceCases,
  publishedExample: { inputs: { mode: 'charge', c: 100, v: 12, q: 1200 }, expected: ["1 200 мкКл"] },
  presentation: {
    seoDescription: "Рассчитайте заряд, напряжение или ёмкость конденсатора по формуле Q = C·U и энергию его электрического поля.",
    id: "capacitor-basics",
    name: "Калькулятор заряда и энергии конденсатора",
    slug: "zaryad-kondensatora",
    fullPath: "/electronics/zaryad-kondensatora/",
    category: "electronics",
    icon: "zap",
    popularity: 34,
    isNew: false,
    shortDescription: "Заряд, напряжение или ёмкость конденсатора и энергия его поля.",
    
    seoTitle: "Калькулятор конденсатора — заряд, напряжение, ёмкость, энергия",
    
    h1: "Калькулятор заряда и энергии конденсатора",
    keywords: ["заряд конденсатора", "энергия конденсатора", "ёмкость конденсатора", "формула q c u"],
    fields: [
  {
    "name": "mode",
    "label": "Что найти",
    "type": "select",
    "defaultValue": "charge",
    "options": [
      {
        "value": "charge",
        "label": "заряд"
      },
      {
        "value": "voltage",
        "label": "напряжение"
      },
      {
        "value": "capacitance",
        "label": "ёмкость"
      }
    ]
  },
  {
    "name": "c",
    "label": "Ёмкость",
    "type": "number",
    "defaultValue": 100,
    "min": 0,
    "step": 1,
    "unit": "мкФ",
    "showIf": {
      "field": "mode",
      "oneOf": [
        "charge",
        "voltage"
      ]
    }
  },
  {
    "name": "v",
    "label": "Напряжение",
    "type": "number",
    "defaultValue": 12,
    "signed": true,
    "step": 1,
    "unit": "В",
    "showIf": {
      "field": "mode",
      "oneOf": [
        "charge",
        "capacitance"
      ]
    }
  },
  {
    "name": "q",
    "label": "Заряд",
    "type": "number",
    "defaultValue": 1200,
    "signed": true,
    "step": 100,
    "unit": "мкКл",
    "showIf": {
      "field": "mode",
      "oneOf": [
        "voltage",
        "capacitance"
      ]
    }
  }
],
    resultLabels: {
      "charge": "Заряд",
      "voltage": "Напряжение",
      "capacitance": "Ёмкость",
      "energy": "Энергия поля",
    },

    relatedCalculatorIds: ["ohms-law", "resistor-network", "battery-series-parallel"],
    ...contractContent.ru,
  },
};
