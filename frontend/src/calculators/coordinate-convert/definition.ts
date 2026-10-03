import {validate} from './validate';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { coordinateConvertCopyEn } from './copy.en';
import { coordinateConvertCopyUk } from './copy.uk';
import { coordinateConvertCopyDe } from './copy.de';
import { coordinateConvertCopyEs } from './copy.es';
import { coordinateConvertReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "coordinate-convert",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: coordinateConvertCopyEn, uk: coordinateConvertCopyUk, de: coordinateConvertCopyDe, es: coordinateConvertCopyEs },
  referenceCases: coordinateConvertReferenceCases,
  publishedExample: { inputs: { mode: 'toDecimal', deg: 55, minutes: 45, seconds: 30, decimal: 0, hemisphere: 'N' }, expected: ["55,7583°"] },
  presentation: {
    id: "coordinate-convert",
    name: "Конвертер координат — градусы, минуты, секунды",
    slug: "koordinaty-gradusy-minuty-sekundy",
    fullPath: "/converters/koordinaty-gradusy-minuty-sekundy/",
    category: "converters",
    icon: "globe",
    popularity: 33,
    isNew: false,
    shortDescription: "Перевод координат между градусами-минутами-секундами и десятичными.",
    seoTitle: "Конвертер координат — градусы минуты секунды в десятичные",
    seoDescription: "Переведите географические координаты из градусов, минут и секунд в десятичные градусы и обратно, с учётом полушария.",
    h1: "Конвертер координат — градусы, минуты, секунды",
    keywords: ["перевод координат", "градусы минуты секунды в десятичные", "конвертер координат gps", "десятичные градусы"],
    fields: [
      {
        name: 'mode', label: 'Направление перевода', type: 'select', defaultValue: 'toDecimal',
        options: [
          { value: 'toDecimal', label: 'ГМС → десятичные' },
          { value: 'toDms', label: 'десятичные → ГМС' },
        ],
      },
      { name: 'deg', unit: '°', label: 'Градусы', type: 'number', defaultValue: 55, min: 0, max: 180, step: 1, showIf: { field: 'mode', equals: 'toDecimal' } },
      { name: 'minutes', unit: '′', label: 'Минуты', type: 'number', defaultValue: 45, min: 0, max: 59, step: 1, showIf: { field: 'mode', equals: 'toDecimal' } },
      { name: 'seconds', unit: '″', label: 'Секунды', type: 'number', defaultValue: 30, min: 0, max: 60, step: 0.01, showIf: { field: 'mode', equals: 'toDecimal' } },
      {
        name: 'hemisphere', label: 'Полушарие', type: 'select', defaultValue: 'N',
        options: [
          { value: 'N', label: 'северное или восточное' },
          { value: 'S', label: 'южное или западное' },
        ],
        showIf: { field: 'mode', equals: 'toDecimal' },
      },
      { name: 'decimal', unit: '°', label: 'Десятичные градусы', type: 'number', defaultValue: -37.6173, signed: true, step: 0.0001, showIf: { field: 'mode', equals: 'toDms' } },
    ],
    resultLabels: {
      "decimal": "Десятичные градусы",
      "dms": "Градусы, минуты, секунды",
      "hemisphere": "Полушарие",
      "dm": "Только градусы и минуты",
    },
    relatedCalculatorIds: ["convert-angle", "convert-length", "convert-time"],
    ...contractContent.ru,
  },
};
