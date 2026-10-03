import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { singlePhaseCopyEn } from './copy.en';
import { singlePhaseCopyUk } from './copy.uk';
import { singlePhaseCopyDe } from './copy.de';
import { singlePhaseCopyEs } from './copy.es';
import { singlePhaseReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'single-phase',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: singlePhaseCopyEn, uk: singlePhaseCopyUk, de: singlePhaseCopyDe, es: singlePhaseCopyEs },
  referenceCases: singlePhaseReferenceCases,
  publishedExample: {
    inputs: { mode: 'P', voltage: 230, current: 6.5, powerFactor: 0.95 },
    expected: ['1 420,25 Вт'],
  },
  presentation: {
    seoDescription: "Рассчитайте активную, полную и реактивную мощность однофазной сети по напряжению, току и коэффициенту мощности или найдите ток по мощности.",
    id: 'single-phase',
    name: 'Калькулятор однофазной мощности',
    slug: 'single-phase-power',
    fullPath: '/electronics/single-phase-power/',
    category: 'electronics',
    icon: 'zap',
    popularity: 22,
    isNew: false,
    shortDescription: 'Активная, полная и реактивная мощность однофазной сети или ток по мощности.',
    
    seoTitle: 'Калькулятор однофазной мощности и тока',
    
    h1: 'Калькулятор однофазной мощности',
    keywords: ['однофазная мощность', 'расчёт тока', 'коэффициент мощности', 'полная мощность'],
    fields: [
  {
    "name": "mode",
    "label": "Что найти",
    "type": "select",
    "defaultValue": "P",
    "options": [
      {
        "value": "P",
        "label": "мощность по току"
      },
      {
        "value": "current",
        "label": "ток по мощности"
      }
    ]
  },
  {
    "name": "voltage",
    "label": "Действующее напряжение",
    "type": "number",
    "defaultValue": 230,
    "min": 0,
    "step": 10,
    "unit": "В"
  },
  {
    "name": "current",
    "label": "Действующий ток",
    "type": "number",
    "defaultValue": 6.5,
    "min": 0,
    "step": 0.5,
    "showIf": {
      "field": "mode",
      "equals": "P"
    },
    "unit": "А"
  },
  {
    "name": "power",
    "label": "Активная мощность",
    "type": "number",
    "defaultValue": 2200,
    "min": 0,
    "step": 100,
    "showIf": {
      "field": "mode",
      "equals": "current"
    },
    "unit": "Вт"
  },
  {
    "name": "powerFactor",
    "label": "Коэффициент мощности cos φ",
    "type": "number",
    "defaultValue": 0.95,
    "min": 0,
    "max": 1,
    "step": 0.05,
    "unit": "1"
  }
],
    resultLabels: {
      active: 'Активная мощность',
      apparent: 'Полная мощность',
      reactive: 'Реактивная мощность',
      current: 'Ток',
    },

    relatedCalculatorIds: ['ohms-law', 'electricity-usage', 'inverter-power'],
    ...contractContent.ru,
  },
};
