import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import { validate } from './validate';
// Требуемая полоса для одновременных пользователей.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { networkBandwidthCopyEn } from './copy.en';
import { networkBandwidthCopyUk } from './copy.uk';
import { networkBandwidthCopyDe } from './copy.de';
import { networkBandwidthCopyEs } from './copy.es';
import { networkBandwidthReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "network-bandwidth",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: networkBandwidthCopyEn, uk: networkBandwidthCopyUk, de: networkBandwidthCopyDe, es: networkBandwidthCopyEs },
  referenceCases: networkBandwidthReferenceCases,
  publishedExample: { inputs: { users: 50, perUser: 5, overhead: 20, concurrency: 100 }, expected: ["300,0 Мбит/с"] },
  presentation: {
    ...contractContent.ru,
    id: "network-bandwidth",
    name: "Калькулятор пропускной способности сети",
    slug: "network-bandwidth",
    fullPath: "/computers/network-bandwidth/",
    category: "computers",
    icon: "monitor",
    popularity: 35,
    isNew: false,
    seoTitle: "Калькулятор пропускной способности сети — полоса на пользователей",
    h1: "Калькулятор пропускной способности сети",
    keywords: ["пропускная способность сети", "полоса на пользователя", "планирование интернета"],
    fields: [
  {
    "name": "users",
    "label": "Всего пользователей",
    "type": "number",
    "defaultValue": 50,
    "min": 1,
    "step": 1,
    "unit": "пользователей"
  },
  {
    "name": "perUser",
    "label": "Полоса на активного пользователя",
    "type": "number",
    "defaultValue": 5,
    "min": 0,
    "step": 0.5,
    "unit": "Мбит/с"
  },
  {
    "name": "overhead",
    "label": "Запас",
    "type": "number",
    "defaultValue": 0,
    "min": 0,
    "step": 5,
    "optional": true,
    "unit": "%"
  },
  {
    "name": "concurrency",
    "label": "Активны одновременно",
    "type": "number",
    "defaultValue": 100,
    "min": 0,
    "max": 100,
    "step": 5,
    "unit": "%"
  }
],
    resultLabels: { result: "Требуемая полоса", raw: "Без запаса", active: "Одновременно активны", mbs: "В мегабайтах в секунду" },
    relatedCalculatorIds: ["download-time", "files-on-disk", "convert-data-rate"],
  },
};
