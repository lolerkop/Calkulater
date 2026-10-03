import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
// Время загрузки файла. Биты и байты, десятичные и двоичные приставки — явно.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { downloadTimeCopyEn } from './copy.en';
import { downloadTimeCopyUk } from './copy.uk';
import { downloadTimeCopyDe } from './copy.de';
import { downloadTimeCopyEs } from './copy.es';
import { downloadTimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'download-time',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: downloadTimeCopyEn, uk: downloadTimeCopyUk, de: downloadTimeCopyDe, es: downloadTimeCopyEs },
  referenceCases: downloadTimeReferenceCases,
  publishedExample: { inputs: { size: 1, sizeUnit: 'gb', speed: 100, speedUnit: 'mbit' }, expected: ['1:20'] },
  presentation: {
    ...contractContent.ru,
    id: 'download-time',
    name: 'Калькулятор времени загрузки файла',
    slug: 'download-time',
    fullPath: '/computers/download-time/',
    category: 'computers',
    icon: 'monitor',
    popularity: 44,
    isNew: false,
    seoTitle: 'Калькулятор времени загрузки файла — размер и скорость',
    h1: 'Калькулятор времени загрузки файла',
    keywords: ['время загрузки файла', 'калькулятор скорости загрузки', 'сколько качать файл'],
    fields: [
  {
    "name": "size",
    "label": "Размер файла",
    "type": "number",
    "defaultValue": 1,
    "min": 0,
    "step": 0.1,
    "unit": "ГБ"
  },
  {
    "name": "sizeUnit",
    "label": "Единица размера",
    "type": "select",
    "defaultValue": "gb",
    "options": [
      {
        "value": "kb",
        "label": "КБ (1000 байт)"
      },
      {
        "value": "mb",
        "label": "МБ (10⁶ байт)"
      },
      {
        "value": "gb",
        "label": "ГБ (10⁹ байт)"
      },
      {
        "value": "tb",
        "label": "ТБ (10¹² байт)"
      },
      {
        "value": "kib",
        "label": "КиБ (1024 байта)"
      },
      {
        "value": "mib",
        "label": "МиБ (1024² байта)"
      },
      {
        "value": "gib",
        "label": "ГиБ (1024³ байта)"
      },
      {
        "value": "tib",
        "label": "ТиБ (1024⁴ байта)"
      }
    ]
  },
  {
    "name": "speed",
    "label": "Скорость соединения",
    "type": "number",
    "defaultValue": 100,
    "min": 0,
    "step": 1,
    "unit": "Мбит/с"
  },
  {
    "name": "speedUnit",
    "label": "Единица скорости",
    "type": "select",
    "defaultValue": "mbit",
    "options": [
      {
        "value": "kbit",
        "label": "Кбит/с"
      },
      {
        "value": "mbit",
        "label": "Мбит/с"
      },
      {
        "value": "gbit",
        "label": "Гбит/с"
      },
      {
        "value": "mbyte",
        "label": "МБ/с"
      }
    ]
  }
],
    resultLabels: { result: 'Время загрузки', seconds: 'Всего секунд', size: 'Размер файла', speed: 'Скорость канала' },
    relatedCalculatorIds: ['fps-frametime', 'aspect-ratio', 'convert-data-rate'],
  },
};
