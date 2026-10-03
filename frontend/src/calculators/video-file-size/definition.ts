import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { videoFileSizeCopyEn } from './copy.en';
import { videoFileSizeCopyUk } from './copy.uk';
import { videoFileSizeCopyDe } from './copy.de';
import { videoFileSizeCopyEs } from './copy.es';
import { videoFileSizeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "video-file-size",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: videoFileSizeCopyEn, uk: videoFileSizeCopyUk, de: videoFileSizeCopyDe, es: videoFileSizeCopyEs },
  referenceCases: videoFileSizeReferenceCases,
  publishedExample: { inputs: { videoMbps: 8, audioKbps: 128, minutes: 10 }, expected: ["0,6096 ГБ"] },
  presentation: {
    ...contractContent.ru,
    id: "video-file-size",
    name: "Калькулятор размера видеофайла",
    slug: "video-file-size",
    fullPath: "/computers/video-file-size/",
    category: "computers",
    icon: "monitor",
    popularity: 42,
    isNew: false,
    seoTitle: "Калькулятор размера видеофайла по битрейту",
    h1: "Калькулятор размера видеофайла",
    keywords: ["размер видеофайла", "битрейт и размер", "сколько весит видео", "расчёт размера записи"],
    fields: [
  {
    "name": "videoMbps",
    "label": "Средний битрейт видео",
    "type": "number",
    "defaultValue": 8,
    "min": 0,
    "step": 0.5,
    "unit": "Мбит/с"
  },
  {
    "name": "audioKbps",
    "label": "Средний битрейт звука",
    "type": "number",
    "defaultValue": 128,
    "min": 0,
    "step": 16,
    "unit": "кбит/с"
  },
  {
    "name": "minutes",
    "label": "Длительность",
    "type": "number",
    "defaultValue": 10,
    "min": 0,
    "step": 1,
    "unit": "мин"
  }
],
    resultLabels: {
      "size": "Размер файла",
      "mb": "В мегабайтах",
      "mib": "В мебибайтах",
      "bitrate": "Суммарный битрейт",
      "perMinute": "Размер одной минуты",
    },
    relatedCalculatorIds: ["files-on-disk", "download-time", "convert-digital"],
  },
};
