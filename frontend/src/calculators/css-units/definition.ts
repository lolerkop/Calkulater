import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { cssUnitsCopyEn } from './copy.en';
import { cssUnitsCopyUk } from './copy.uk';
import { cssUnitsCopyDe } from './copy.de';
import { cssUnitsCopyEs } from './copy.es';
import { cssUnitsReferenceCases } from './referenceCases';

const UNITS = [
  { value: 'px', label: 'px' },
  { value: 'rem', label: 'rem' },
  { value: 'em', label: 'em' },
  { value: 'pt', label: 'pt' },
  { value: 'pc', label: 'pc' },
  { value: 'in', label: 'in' },
  { value: 'cm', label: 'cm' },
  { value: 'mm', label: 'mm' },
];

export const definition: CalculatorDefinitionV2 = {
  id: 'css-units',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: cssUnitsCopyEn, uk: cssUnitsCopyUk, de: cssUnitsCopyDe, es: cssUnitsCopyEs },
  referenceCases: cssUnitsReferenceCases,
  publishedExample: {
    inputs: { value: 24, fromUnit: 'px', toUnit: 'rem', rootSize: 16, parentSize: 16 },
    expected: ['1,5'],
  },
  presentation: {
    ...contractContent.ru,
    id: 'css-units',
    name: 'Конвертер единиц CSS',
    slug: 'css-units',
    fullPath: '/computers/css-units/',
    category: 'computers',
    icon: 'type',
    popularity: 22,
    isNew: false,
    seoTitle: 'Конвертер единиц CSS: px, rem, em, pt',
    h1: 'Конвертер единиц CSS',
    keywords: ['единицы css', 'px в rem', 'em и rem', 'конвертер pt'],
    fields: [
  {
    "name": "value",
    "label": "Значение",
    "type": "number",
    "defaultValue": 24,
    "signed": true,
    "step": 1,
    "unit": "px"
  },
  {
    "name": "fromUnit",
    "label": "Из единицы",
    "type": "select",
    "defaultValue": "px",
    "options": [
      {
        "value": "px",
        "label": "px"
      },
      {
        "value": "rem",
        "label": "rem"
      },
      {
        "value": "em",
        "label": "em"
      },
      {
        "value": "pt",
        "label": "pt"
      },
      {
        "value": "pc",
        "label": "pc"
      },
      {
        "value": "in",
        "label": "in"
      },
      {
        "value": "cm",
        "label": "cm"
      },
      {
        "value": "mm",
        "label": "mm"
      }
    ]
  },
  {
    "name": "toUnit",
    "label": "В единицу",
    "type": "select",
    "defaultValue": "rem",
    "options": [
      {
        "value": "px",
        "label": "px"
      },
      {
        "value": "rem",
        "label": "rem"
      },
      {
        "value": "em",
        "label": "em"
      },
      {
        "value": "pt",
        "label": "pt"
      },
      {
        "value": "pc",
        "label": "pc"
      },
      {
        "value": "in",
        "label": "in"
      },
      {
        "value": "cm",
        "label": "cm"
      },
      {
        "value": "mm",
        "label": "mm"
      }
    ]
  },
  {
    "name": "rootSize",
    "label": "Корневой размер шрифта",
    "type": "number",
    "defaultValue": 16,
    "min": 0,
    "step": 1,
    "unit": "px"
  },
  {
    "name": "parentSize",
    "label": "База em",
    "type": "number",
    "defaultValue": 16,
    "min": 0,
    "step": 1,
    "unit": "px"
  }
],
    resultLabels: {
      converted: 'Результат перевода',
      px: 'В пикселях',
      rem: 'В rem',
      em: 'В em',
      pt: 'В пунктах',
    },
    relatedCalculatorIds: ['modular-scale', 'ppi-dpi', 'aspect-ratio'],
  },
};
