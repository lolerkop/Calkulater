import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { positionSizeCopyEn } from './copy.en';
import { positionSizeCopyUk } from './copy.uk';
import { positionSizeCopyDe } from './copy.de';
import { positionSizeCopyEs } from './copy.es';
import { positionSizeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "position-size",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: positionSizeCopyEn, uk: positionSizeCopyUk, de: positionSizeCopyDe, es: positionSizeCopyEs },
  referenceCases: positionSizeReferenceCases,
  publishedExample: { inputs: { deposit: 100000, riskPct: 1, entry: 250, stop: 240 }, expected: ["100 шт"] },
  presentation: {
    id: "position-size",
    name: "Калькулятор размера позиции",
    slug: "position-size",
    fullPath: "/finance/position-size/",
    category: "finance",
    icon: "gauge",
    popularity: 39,
    isNew: false,
    shortDescription: "Объём сделки по допустимому риску на депозит и расстоянию до стоп-приказа.",
    seoTitle: "Калькулятор размера позиции по риску",
    seoDescription: "Рассчитайте объём сделки по допустимому риску на депозит и расстоянию от цены входа до стоп-приказа, включая долю депозита.",
    h1: "Калькулятор размера позиции",
    keywords: ["размер позиции", "риск на сделку", "объём сделки по стопу", "управление капиталом"],
    fields: [
      {
        "name": "deposit",
        "label": "Депозит",
        "type": "number",
        "defaultValue": 100000,
        "min": 0,
        "step": 1000,
        "unit": "₽"
      },
      {
        "name": "riskPct",
        "label": "Допустимый риск на сделку, %",
        "type": "number",
        "defaultValue": 1,
        "min": 0,
        "max": 100,
        "step": 0.1
      },
      {
        "name": "entry",
        "label": "Цена входа",
        "type": "number",
        "defaultValue": 250,
        "min": 0,
        "step": 1,
        "unit": "₽"
      },
      {
        "name": "stop",
        "label": "Цена стоп-приказа",
        "type": "number",
        "defaultValue": 240,
        "min": 0,
        "step": 1,
        "unit": "₽"
      }
    ],
    resultLabels: {
      "quantity": "Размер позиции",
      "whole": "Целых единиц",
      "riskAmount": "Сумма риска",
      "riskPerUnit": "Риск на единицу",
      "positionValue": "Стоимость позиции",
      "share": "Доля депозита",
    },
    ...contractContent.ru,
    relatedCalculatorIds: ["roi", "dti", "percent-calculator"],
  },
};
