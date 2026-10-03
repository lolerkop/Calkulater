import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { curtainSizeCopyEn } from './copy.en';
import { curtainSizeCopyUk } from './copy.uk';
import { curtainSizeCopyDe } from './copy.de';
import { curtainSizeCopyEs } from './copy.es';
import { curtainSizeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "curtain-size",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: curtainSizeCopyEn, uk: curtainSizeCopyUk, de: curtainSizeCopyDe, es: curtainSizeCopyEs },
  referenceCases: curtainSizeReferenceCases,
  publishedExample: { inputs: { windowWidth: 140, fullness: 2, fabricWidth: 280, height: 250, hem: 20 }, expected: ["2,7 м"] },
  presentation: {
    id: "curtain-size",
    name: "Калькулятор ткани на шторы",
    slug: "raschet-shtor",
    fullPath: "/household/raschet-shtor/",
    category: "household",
    icon: "home",
    popularity: 33,
    isNew: false,
    shortDescription: "Сколько ткани нужно на шторы с заданным коэффициентом сборки.",
    seoTitle: "Калькулятор ткани на шторы — по ширине карниза и сборке",
    seoDescription: "Рассчитайте расход ткани на шторы по ширине карниза, коэффициенту сборки, ширине полотна и высоте.",
    h1: "Калькулятор ткани на шторы",
    keywords: ["ткань на шторы", "коэффициент сборки штор", "расход ткани", "пошив штор"],
    fields: [
  {
    "name": "windowWidth",
    "label": "Ширина карниза",
    "type": "number",
    "defaultValue": 140,
    "min": 0,
    "step": 10,
    "unit": "см"
  },
  {
    "name": "fullness",
    "label": "Коэффициент сборки",
    "type": "number",
    "defaultValue": 2,
    "min": 0,
    "step": 0.5,
    "unit": "1"
  },
  {
    "name": "fabricWidth",
    "label": "Ширина полотна",
    "type": "number",
    "defaultValue": 280,
    "min": 0,
    "step": 10,
    "unit": "см"
  },
  {
    "name": "height",
    "label": "Готовая высота",
    "type": "number",
    "defaultValue": 250,
    "min": 0,
    "step": 10,
    "unit": "см"
  },
  {
    "name": "hem",
    "label": "Припуск сверху и снизу",
    "type": "number",
    "defaultValue": 20,
    "min": 0,
    "step": 5,
    "unit": "см"
  }
],
    resultLabels: {
  "fabric": "Ткани потребуется",
  "panels": "Полотнищ",
  "needed": "Ширина ткани до сборки",
  "cut": "Длина отреза",
  "fullness": "Коэффициент сборки"
},
    relatedCalculatorIds: ["picture-frame-mat", "wallpaper-calculator", "linoleum"],
    ...contract.ru,
  },
};
