import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { colorConvertCopyEn } from './copy.en';
import { colorConvertCopyUk } from './copy.uk';
import { colorConvertCopyDe } from './copy.de';
import { colorConvertCopyEs } from './copy.es';
import { colorConvertReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "color-convert",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: colorConvertCopyEn, uk: colorConvertCopyUk, de: colorConvertCopyDe, es: colorConvertCopyEs },
  referenceCases: colorConvertReferenceCases,
  publishedExample: { inputs: { hex: '#2E86DE' }, expected: ["rgb(46, 134, 222)"] },
  presentation: {
    ...contractContent.ru,
    id: "color-convert",
    name: "Конвертер цветов HEX, RGB и HSL",
    slug: "color-convert",
    fullPath: "/computers/color-convert/",
    category: "computers",
    icon: "circle",
    popularity: 29,
    isNew: false,
    seoTitle: "Конвертер цветов HEX в RGB и HSL онлайн",
    h1: "Конвертер цветов HEX, RGB и HSL",
    keywords: ["конвертер цветов", "HEX в RGB", "RGB в HSL", "код цвета"],
    fields: [
  {
    "name": "hex",
    "label": "Шестнадцатеричный код цвета",
    "type": "textarea",
    "defaultValue": "#2E86DE"
  }
],
    resultLabels: {
      "rgb": "RGB",
      "hsl": "HSL",
      "hex": "HEX",
      "lightness": "Яркость",
      "r": "Красный",
      "g": "Зелёный",
      "b": "Синий",
    },
    relatedCalculatorIds: ["ppi-dpi", "aspect-ratio", "convert-digital"],
  },
};
