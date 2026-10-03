import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import { validate } from './validate';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { raidCopyEn } from './copy.en';
import { raidCopyUk } from './copy.uk';
import { raidCopyDe } from './copy.de';
import { raidCopyEs } from './copy.es';
import { raidReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "raid",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: raidCopyEn, uk: raidCopyUk, de: raidCopyDe, es: raidCopyEs },
  referenceCases: raidReferenceCases,
  publishedExample: { inputs: { level: '5', disks: 6, sizeTb: 4 }, expected: ["20 ТБ"] },
  presentation: {
    ...contractContent.ru,
    id: "raid",
    name: "Калькулятор RAID-массива",
    slug: "raid",
    fullPath: "/computers/raid/",
    category: "computers",
    icon: "layers",
    popularity: 30,
    isNew: false,
    seoTitle: "Калькулятор RAID: полезная ёмкость массива",
    h1: "Калькулятор RAID-массива",
    keywords: ["RAID калькулятор", "полезная ёмкость RAID", "RAID 5", "RAID 6", "RAID 10"],
    fields: [
  {
    "name": "level",
    "label": "Уровень RAID",
    "type": "select",
    "defaultValue": "5",
    "options": [
      {
        "value": "0",
        "label": "RAID 0 — чередование"
      },
      {
        "value": "1",
        "label": "RAID 1 — зеркало"
      },
      {
        "value": "5",
        "label": "RAID 5 — чётность"
      },
      {
        "value": "6",
        "label": "RAID 6 — двойная чётность"
      },
      {
        "value": "10",
        "label": "RAID 10 — зеркало с чередованием"
      }
    ]
  },
  {
    "name": "disks",
    "label": "Число дисков",
    "type": "number",
    "defaultValue": 6,
    "min": 1,
    "step": 1,
    "unit": "дисков"
  },
  {
    "name": "sizeTb",
    "label": "Объём одного диска",
    "type": "number",
    "defaultValue": 4,
    "min": 0,
    "step": 1,
    "unit": "ТБ"
  }
],
    resultLabels: {
      "useful": "Полезная ёмкость",
      "raw": "Сырая ёмкость",
      "failures": "Допустимо отказов",
      "efficiency": "Эффективность",
      "kind": "Тип массива",
      "overhead": "Ушло на избыточность",
    },
    relatedCalculatorIds: ["files-on-disk", "convert-digital", "download-time"],
  },
};
