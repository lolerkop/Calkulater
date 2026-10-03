import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import { validate } from './validate';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { modularScaleCopyEn } from './copy.en';
import { modularScaleCopyUk } from './copy.uk';
import { modularScaleCopyDe } from './copy.de';
import { modularScaleCopyEs } from './copy.es';
import { modularScaleReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'modular-scale',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: modularScaleCopyEn, uk: modularScaleCopyUk, de: modularScaleCopyDe, es: modularScaleCopyEs },
  referenceCases: modularScaleReferenceCases,
  publishedExample: {
    inputs: { base: 16, ratio: 1.25, stepsUp: 5, stepsDown: 2 },
    expected: ['48,828'],
  },
  presentation: {
    ...contractContent.ru,
    id: 'modular-scale',
    name: 'Калькулятор модульной шкалы',
    slug: 'modular-scale',
    fullPath: '/computers/modular-scale/',
    category: 'computers',
    icon: 'type',
    popularity: 21,
    isNew: false,
    seoTitle: 'Калькулятор модульной шкалы типографики',
    h1: 'Калькулятор модульной шкалы',
    keywords: ['модульная шкала', 'типографика', 'размеры шрифта', 'отношение шкалы'],
    fields: [
  {
    "name": "base",
    "label": "Базовый размер",
    "type": "number",
    "defaultValue": 16,
    "min": 0,
    "step": 1,
    "unit": "ед. длины"
  },
  {
    "name": "ratio",
    "label": "Отношение шкалы",
    "type": "number",
    "defaultValue": 1.25,
    "min": 1,
    "step": 0.05,
    "unit": "1"
  },
  {
    "name": "stepsUp",
    "label": "Ступеней вверх от базы",
    "type": "number",
    "defaultValue": 5,
    "min": 0,
    "max": 20,
    "step": 1,
    "unit": "ступеней"
  },
  {
    "name": "stepsDown",
    "label": "Ступеней вниз от базы",
    "type": "number",
    "defaultValue": 2,
    "min": 0,
    "max": 20,
    "step": 1,
    "unit": "ступеней"
  }
],
    resultLabels: {
      largest: 'Наибольший размер',
      smallest: 'Наименьший размер',
      steps: 'Ступеней',
      base: 'База',
    },
    relatedCalculatorIds: ['ppi-dpi', 'aspect-ratio', 'golden-ratio'],
  },
};
