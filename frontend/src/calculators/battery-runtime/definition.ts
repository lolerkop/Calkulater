import { contractContent } from './contractContent';
// Время работы аккумулятора под нагрузкой.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { batteryRuntimeCopyEn } from './copy.en';
import { batteryRuntimeCopyUk } from './copy.uk';
import { batteryRuntimeCopyDe } from './copy.de';
import { batteryRuntimeCopyEs } from './copy.es';
import { batteryRuntimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "battery-runtime",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: batteryRuntimeCopyEn, uk: batteryRuntimeCopyUk, de: batteryRuntimeCopyDe, es: batteryRuntimeCopyEs },
  referenceCases: batteryRuntimeReferenceCases,
  publishedExample: { inputs: { capacity: 100, voltage: 12, load: 200, dod: 80, efficiency: 90 }, expected: ["4,32 ч"] },
  presentation: {
    seoDescription: "Оцените, сколько проработает аккумулятор под нагрузкой, по ёмкости, напряжению, глубине разряда и КПД.",
    id: "battery-runtime",
    name: "Калькулятор времени работы аккумулятора",
    slug: "battery-runtime",
    fullPath: "/electronics/battery-runtime/",
    category: "electronics",
    icon: "zap",
    popularity: 32,
    isNew: false,
    shortDescription: "Сколько проработает аккумулятор при заданной нагрузке.",
    
    seoTitle: "Калькулятор времени работы аккумулятора — часы по ёмкости",
    
    h1: "Калькулятор времени работы аккумулятора",
    keywords: ["время работы аккумулятора", "ампер-часы в ватт-часы", "ресурс батареи"],
    fields: [
  {
    "name": "capacity",
    "label": "Ёмкость",
    "type": "number",
    "defaultValue": 100,
    "min": 0,
    "step": 1,
    "unit": "А·ч"
  },
  {
    "name": "voltage",
    "label": "Напряжение",
    "type": "number",
    "defaultValue": 12,
    "min": 0,
    "step": 0.1,
    "unit": "В"
  },
  {
    "name": "load",
    "label": "Нагрузка",
    "type": "number",
    "defaultValue": 200,
    "min": 0,
    "step": 10,
    "unit": "Вт"
  },
  {
    "name": "dod",
    "label": "Глубина разряда",
    "type": "number",
    "defaultValue": 80,
    "min": 0,
    "max": 100,
    "step": 5,
    "unit": "%"
  },
  {
    "name": "efficiency",
    "label": "КПД преобразования",
    "type": "number",
    "defaultValue": 90,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%"
  }
],
    resultLabels: { result: "Время работы", hm: "Часы и минуты", energy: "Полезная энергия", total: "Полная энергия батареи" },

    relatedCalculatorIds: ["inverter-power", "led-resistor", "electricity-usage"],
    ...contractContent.ru,
  },
};
