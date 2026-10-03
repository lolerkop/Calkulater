import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import { validate } from './validate';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { tvViewingDistanceCopyEn } from './copy.en';
import { tvViewingDistanceCopyUk } from './copy.uk';
import { tvViewingDistanceCopyDe } from './copy.de';
import { tvMonitorViewingDistanceCopyEs } from './copy.es';
import { tvViewingDistanceReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "tv-monitor-viewing-distance",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: tvViewingDistanceCopyEn, uk: tvViewingDistanceCopyUk, de: tvViewingDistanceCopyDe, es: tvMonitorViewingDistanceCopyEs },
  referenceCases: tvViewingDistanceReferenceCases,
  publishedExample: { inputs: { diag: 55, ratio: "16:9", lines: 2160 }, expected: ["1,673 м"] },
  presentation: {
    ...contractContent.ru,
    id: "tv-monitor-viewing-distance",
    name: "Калькулятор расстояния до телевизора",
    slug: "rasstoyanie-do-televizora",
    fullPath: "/computers/rasstoyanie-do-televizora/",
    category: "computers",
    icon: "monitor",
    popularity: 26,
    isNew: true,
    seoTitle: "Калькулятор расстояния до телевизора — THX, SMPTE и 4K",
    h1: "Калькулятор расстояния до телевизора",
    keywords: ["расстояние до телевизора", "угол обзора", "THX", "4K"],
    fields: [
  {
    "name": "diag",
    "label": "Диагональ",
    "type": "number",
    "defaultValue": 55,
    "min": 1,
    "step": 1,
    "unit": "in"
  },
  {
    "name": "ratio",
    "label": "Пропорции экрана",
    "type": "select",
    "defaultValue": "16:9",
    "options": [
      {
        "value": "16:9",
        "label": "16:9"
      },
      {
        "value": "21:9",
        "label": "21:9"
      },
      {
        "value": "4:3",
        "label": "4:3"
      }
    ]
  },
  {
    "name": "lines",
    "label": "Строк разрешения",
    "type": "number",
    "defaultValue": 2160,
    "min": 1,
    "step": 1,
    "unit": "px"
  }
],
    resultLabels: {
      "thx": "Расстояние при угле 40°", "smpte": "Расстояние при угле 30°",
      "width": "Ширина экрана", "height": "Высота экрана",
      "sharp": "Оценка для углового размера 1′",
    },
    relatedCalculatorIds: ["ppi-dpi", "aspect-ratio", "video-file-size"],
  },
};
