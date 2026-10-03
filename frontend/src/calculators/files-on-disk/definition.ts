import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
// Сколько файлов заданного размера поместится на носитель.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { filesOnDiskCopyEn } from './copy.en';
import { filesOnDiskCopyUk } from './copy.uk';
import { filesOnDiskCopyDe } from './copy.de';
import { filesOnDiskCopyEs } from './copy.es';
import { filesOnDiskReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "files-on-disk",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: filesOnDiskCopyEn, uk: filesOnDiskCopyUk, de: filesOnDiskCopyDe, es: filesOnDiskCopyEs },
  referenceCases: filesOnDiskReferenceCases,
  publishedExample: { inputs: { capacity: 1000, capacityUnit: 'gb', fileSize: 4, fileUnit: 'mb' }, expected: ["250 000"] },
  presentation: {
    ...contractContent.ru,
    id: "files-on-disk",
    name: "Калькулятор количества файлов на носителе",
    slug: "files-on-disk",
    fullPath: "/computers/files-on-disk/",
    category: "computers",
    icon: "monitor",
    popularity: 31,
    isNew: false,
    seoTitle: "Калькулятор файлов на носителе — сколько поместится",
    h1: "Калькулятор количества файлов на носителе",
    keywords: ["сколько файлов поместится", "ёмкость накопителя", "размер файла"],
    fields: [
  {
    "name": "capacity",
    "label": "Ёмкость носителя",
    "type": "number",
    "defaultValue": 1,
    "min": 0,
    "step": 1,
    "unit": "ГБ"
  },
  {
    "name": "capacityUnit",
    "label": "Единица ёмкости",
    "type": "select",
    "defaultValue": "gb",
    "options": [
      {
        "value": "mb",
        "label": "МБ (10⁶)"
      },
      {
        "value": "gb",
        "label": "ГБ (10⁹)"
      },
      {
        "value": "tb",
        "label": "ТБ (10¹²)"
      },
      {
        "value": "mib",
        "label": "МиБ (1024²)"
      },
      {
        "value": "gib",
        "label": "ГиБ (1024³)"
      },
      {
        "value": "tib",
        "label": "ТиБ (1024⁴)"
      }
    ]
  },
  {
    "name": "fileSize",
    "label": "Размер файла",
    "type": "number",
    "defaultValue": 4,
    "min": 0,
    "step": 1,
    "unit": "МБ"
  },
  {
    "name": "fileUnit",
    "label": "Единица файла",
    "type": "select",
    "defaultValue": "mb",
    "options": [
      {
        "value": "kb",
        "label": "КБ (1000)"
      },
      {
        "value": "mb",
        "label": "МБ (10⁶)"
      },
      {
        "value": "gb",
        "label": "ГБ (10⁹)"
      },
      {
        "value": "kib",
        "label": "КиБ (1024)"
      },
      {
        "value": "mib",
        "label": "МиБ (1024²)"
      },
      {
        "value": "gib",
        "label": "ГиБ (1024³)"
      }
    ]
  },
  {
    "name": "reserved",
    "label": "Служебный резерв",
    "type": "number",
    "defaultValue": 0,
    "min": 0,
    "max": 99,
    "step": 1,
    "unit": "%"
  }
],
    resultLabels: { result: "Поместится файлов", exact: "Точное частное", left: "Останется свободно", usable: "Доступно под файлы" },
    relatedCalculatorIds: ["download-time", "network-bandwidth", "convert-digital"],
  },
};
