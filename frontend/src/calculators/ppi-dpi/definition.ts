import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import { validate } from './validate';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { ppiDpiCopyEn } from './copy.en';
import { ppiDpiCopyUk } from './copy.uk';
import { ppiDpiCopyDe } from './copy.de';
import { ppiDpiCopyEs } from './copy.es';
import { ppiDpiReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "ppi-dpi",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: ppiDpiCopyEn, uk: ppiDpiCopyUk, de: ppiDpiCopyDe, es: ppiDpiCopyEs },
  referenceCases: ppiDpiReferenceCases,
  publishedExample: { inputs: { w: 1920, h: 1080, diagonal: 15.6 }, expected: ["141,21 ppi"] },
  presentation: {
    ...contractContent.ru,
    id: "ppi-dpi",
    name: "Калькулятор плотности пикселей PPI",
    slug: "ppi",
    fullPath: "/computers/ppi/",
    category: "computers",
    icon: "monitor",
    popularity: 44,
    isNew: false,
    seoTitle: "Калькулятор PPI — плотность пикселей экрана",
    h1: "Калькулятор плотности пикселей PPI",
    keywords: ["калькулятор ppi", "плотность пикселей", "ppi монитора", "пиксели на дюйм"],
    fields: [
  {
    "name": "w",
    "label": "Разрешение по горизонтали",
    "type": "number",
    "defaultValue": 1920,
    "min": 1,
    "step": 1,
    "unit": "px"
  },
  {
    "name": "h",
    "label": "Разрешение по вертикали",
    "type": "number",
    "defaultValue": 1080,
    "min": 1,
    "step": 1,
    "unit": "px"
  },
  {
    "name": "diagonal",
    "label": "Диагональ",
    "type": "number",
    "defaultValue": 15.6,
    "min": 0,
    "step": 0.1,
    "unit": "in"
  }
],
    resultLabels: {
      "ppi": "Плотность пикселей",
      "diagPx": "Диагональ в пикселях",
      "pixel": "Размер пикселя",
      "total": "Всего пикселей",
    },
    relatedCalculatorIds: ["aspect-ratio", "files-on-disk", "fps-frametime"],
  },
};
