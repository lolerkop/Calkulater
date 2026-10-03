import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import { validate } from './validate';
// Соотношение сторон: сокращение разрешения и поиск недостающей стороны.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { aspectRatioCopyEn } from './copy.en';
import { aspectRatioCopyUk } from './copy.uk';
import { aspectRatioCopyDe } from './copy.de';
import { aspectRatioCopyEs } from './copy.es';
import { aspectRatioReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'aspect-ratio',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: aspectRatioCopyEn, uk: aspectRatioCopyUk, de: aspectRatioCopyDe, es: aspectRatioCopyEs },
  referenceCases: aspectRatioReferenceCases,
  publishedExample: { inputs: { mode: 'reduce', width: 1920, height: 1080 }, expected: ['16:9'] },
  presentation: {
    ...contractContent.ru,
    id: 'aspect-ratio',
    name: 'Калькулятор соотношения сторон',
    slug: 'aspect-ratio',
    fullPath: '/computers/aspect-ratio/',
    category: 'computers',
    icon: 'monitor',
    popularity: 34,
    isNew: false,
    seoTitle: 'Калькулятор соотношения сторон — разрешение и пропорция',
    h1: 'Калькулятор соотношения сторон',
    keywords: ['соотношение сторон', 'калькулятор разрешения', '16:9 пропорция'],
    fields: [
  {
    "name": "mode",
    "label": "Что считаем",
    "type": "select",
    "defaultValue": "reduce",
    "options": [
      {
        "value": "reduce",
        "label": "соотношение из разрешения"
      },
      {
        "value": "side",
        "label": "недостающая сторона по соотношению"
      }
    ]
  },
  {
    "name": "width",
    "label": "Ширина",
    "type": "number",
    "defaultValue": 1920,
    "min": 1,
    "step": 1,
    "showIf": {
      "field": "mode",
      "equals": "reduce"
    },
    "unit": "px"
  },
  {
    "name": "height",
    "label": "Высота",
    "type": "number",
    "defaultValue": 1080,
    "min": 1,
    "step": 1,
    "showIf": {
      "field": "mode",
      "equals": "reduce"
    },
    "unit": "px"
  },
  {
    "name": "ratioW",
    "label": "Ширина соотношения",
    "type": "number",
    "defaultValue": 16,
    "min": 0,
    "step": 1,
    "showIf": {
      "field": "mode",
      "equals": "side"
    },
    "unit": "1"
  },
  {
    "name": "ratioH",
    "label": "Высота соотношения",
    "type": "number",
    "defaultValue": 9,
    "min": 0,
    "step": 1,
    "showIf": {
      "field": "mode",
      "equals": "side"
    },
    "unit": "1"
  },
  {
    "name": "known",
    "label": "Известная сторона",
    "type": "select",
    "defaultValue": "width",
    "options": [
      {
        "value": "width",
        "label": "ширина"
      },
      {
        "value": "height",
        "label": "высота"
      }
    ],
    "showIf": {
      "field": "mode",
      "equals": "side"
    }
  },
  {
    "name": "side",
    "label": "Значение известной стороны",
    "type": "number",
    "defaultValue": 1280,
    "min": 1,
    "step": 1,
    "showIf": {
      "field": "mode",
      "equals": "side"
    },
    "unit": "px"
  }
],
    resultLabels: { result: 'Соотношение сторон', decimal: 'Десятичное отношение', divisor: 'Наибольший общий делитель', nearest: 'Ближайшее распространённое' },
    relatedCalculatorIds: ['fps-frametime', 'download-time', 'convert-length'],
  },
};
