import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { overtimeCopyEn } from './copy.en';
import { overtimeCopyUk } from './copy.uk';
import { overtimeCopyDe } from './copy.de';
import { overtimeCopyEs } from './copy.es';
import { overtimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'overtime',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: overtimeCopyEn, uk: overtimeCopyUk, de: overtimeCopyDe, es: overtimeCopyEs },
  referenceCases: overtimeReferenceCases,
  publishedExample: {
    inputs: { rate: 650, normalHours: 160, overtimeHours: 14, multiplier: 1.5 },
    expected: ['117 650,00 ₽'],
  },
  presentation: {
    id: 'overtime',
    name: 'Калькулятор сверхурочных',
    slug: 'overtime-pay',
    fullPath: '/finance/overtime-pay/',
    category: 'finance',
    icon: 'clock',
    popularity: 23,
    isNew: false,
    shortDescription: 'Оплата за месяц со сверхурочными часами и средняя ставка за час.',
    seoTitle: 'Калькулятор сверхурочных: оплата и средняя ставка',
    seoDescription:
      'Рассчитайте оплату за период по ставке, обычным и сверхурочным часам и коэффициенту, вместе со средней ставкой за отработанный час.',
    h1: 'Калькулятор сверхурочных',
    keywords: ['сверхурочные', 'оплата переработки', 'ставка за час', 'коэффициент сверхурочных'],
    fields: [
      {
        "name": "rate",
        "label": "Ставка за час",
        "type": "number",
        "defaultValue": 650,
        "min": 0,
        "step": 50,
        "unit": "₽"
      },
      {
        "name": "normalHours",
        "label": "Обычных часов",
        "type": "number",
        "defaultValue": 160,
        "min": 0,
        "step": 8
      },
      {
        "name": "overtimeHours",
        "label": "Сверхурочных часов",
        "type": "number",
        "defaultValue": 14,
        "min": 0,
        "step": 1
      },
      {
        "name": "multiplier",
        "label": "Коэффициент сверхурочных",
        "type": "number",
        "defaultValue": 1.5,
        "min": 1,
        "step": 0.5
      }
    ],
    resultLabels: {
      total: 'Всего к оплате',
      base: 'Оплата обычных часов',
      overtime: 'Оплата сверхурочных',
      effective: 'Средняя ставка за час',
    },
    ...contractContent.ru,
    relatedCalculatorIds: ['work-hours', 'workday-cost', 'salary-convert'],
  },
};
