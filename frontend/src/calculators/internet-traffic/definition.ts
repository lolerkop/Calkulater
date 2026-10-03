import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { internetTrafficCopyEn } from './copy.en';
import { internetTrafficCopyUk } from './copy.uk';
import { internetTrafficCopyDe } from './copy.de';
import { internetTrafficCopyEs } from './copy.es';
import { internetTrafficReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "internet-traffic",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: internetTrafficCopyEn, uk: internetTrafficCopyUk, de: internetTrafficCopyDe, es: internetTrafficCopyEs },
  referenceCases: internetTrafficReferenceCases,
  publishedExample: { inputs: { mbps: 5, hoursPerDay: 3, days: 30, quotaGb: 100 }, expected: ["202,5 ГБ"] },
  presentation: {
    ...contractContent.ru,
    id: "internet-traffic",
    name: "Калькулятор интернет-трафика",
    slug: "internet-traffic",
    fullPath: "/computers/internet-traffic/",
    category: "computers",
    icon: "globe",
    popularity: 39,
    isNew: false,
    seoTitle: "Калькулятор интернет-трафика за месяц",
    h1: "Калькулятор интернет-трафика",
    keywords: ["расход интернет-трафика", "сколько трафика уходит", "трафик за месяц", "хватит ли лимита"],
    fields: [
  {
    "name": "mbps",
    "label": "Скорость потока",
    "type": "number",
    "defaultValue": 5,
    "min": 0,
    "step": 0.5,
    "unit": "Мбит/с"
  },
  {
    "name": "hoursPerDay",
    "label": "Часов в день",
    "type": "number",
    "defaultValue": 3,
    "min": 0,
    "step": 0.5,
    "unit": "ч/день"
  },
  {
    "name": "days",
    "label": "Дней в периоде",
    "type": "number",
    "defaultValue": 30,
    "min": 0,
    "step": 1,
    "unit": "дни"
  },
  {
    "name": "quotaGb",
    "label": "Лимит оператора",
    "type": "number",
    "defaultValue": 0,
    "min": 0,
    "step": 10,
    "optional": true,
    "unit": "ГБ"
  }
],
    resultLabels: {
      "total": "Трафик за период",
      "perDay": "В день",
      "perHour": "В час",
      "lasts": "Хватит дней при лимите",
      "excess": "Превышение лимита",
      "left": "Остаток лимита",
    },
    relatedCalculatorIds: ["network-bandwidth", "download-time", "convert-data-rate"],
  },
};
