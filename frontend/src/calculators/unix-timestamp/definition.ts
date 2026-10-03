import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import { validate } from './validate';
// Перевод между Unix-временем и датой UTC. Только UTC, без часовых поясов.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { unixTimestampCopyEn } from './copy.en';
import { unixTimestampCopyUk } from './copy.uk';
import { unixTimestampCopyDe } from './copy.de';
import { unixTimestampCopyEs } from './copy.es';
import { unixTimestampReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "unix-timestamp",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: unixTimestampCopyEn, uk: unixTimestampCopyUk, de: unixTimestampCopyDe, es: unixTimestampCopyEs },
  referenceCases: unixTimestampReferenceCases,
  publishedExample: { inputs: { mode: 'toDate', timestamp: 1700000000 }, expected: ["2023-11-14 22:13:20 UTC"] },
  presentation: {
    ...contractContent.ru,
    id: "unix-timestamp",
    name: "Конвертер Unix-времени",
    slug: "unix-timestamp",
    fullPath: "/computers/unix-timestamp/",
    category: "computers",
    icon: "monitor",
    popularity: 30,
    isNew: false,
    seoTitle: "Конвертер Unix-времени — секунды эпохи в дату UTC",
    h1: "Конвертер Unix-времени",
    keywords: ["unix время конвертер", "epoch time", "timestamp в дату"],
    fields: [
  {
    "name": "mode",
    "label": "Направление",
    "type": "select",
    "defaultValue": "toDate",
    "options": [
      {
        "value": "toDate",
        "label": "timestamp → дата"
      },
      {
        "value": "toTimestamp",
        "label": "дата → timestamp"
      }
    ]
  },
  {
    "name": "timestamp",
    "label": "Unix-время",
    "type": "number",
    "defaultValue": 1700000000,
    "step": 1,
    "signed": true,
    "showIf": {
      "field": "mode",
      "equals": "toDate"
    },
    "unit": "с"
  },
  {
    "name": "date",
    "label": "Дата (UTC)",
    "type": "date",
    "defaultValue": "2000-01-01",
    "showIf": {
      "field": "mode",
      "equals": "toTimestamp"
    }
  },
  {
    "name": "hour",
    "label": "Час",
    "type": "number",
    "defaultValue": 0,
    "min": 0,
    "max": 23,
    "step": 1,
    "showIf": {
      "field": "mode",
      "equals": "toTimestamp"
    },
    "unit": "ч"
  },
  {
    "name": "minute",
    "label": "Минута",
    "type": "number",
    "defaultValue": 0,
    "min": 0,
    "max": 59,
    "step": 1,
    "showIf": {
      "field": "mode",
      "equals": "toTimestamp"
    },
    "unit": "мин"
  },
  {
    "name": "second",
    "label": "Секунда",
    "type": "number",
    "defaultValue": 0,
    "min": 0,
    "max": 59,
    "step": 1,
    "showIf": {
      "field": "mode",
      "equals": "toTimestamp"
    },
    "unit": "с"
  }
],
    resultLabels: { result: "Результат", seconds: "Unix-время, секунды", iso: "Дата в ISO 8601", weekday: "День недели" },
    relatedCalculatorIds: ["download-time", "files-on-disk", "day-of-week"],
  },
};
