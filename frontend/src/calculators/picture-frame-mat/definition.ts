import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { pictureFrameMatCopyEn } from './copy.en';
import { pictureFrameMatCopyUk } from './copy.uk';
import { pictureFrameMatCopyDe } from './copy.de';
import { pictureFrameMatCopyEs } from './copy.es';
import { pictureFrameMatReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "picture-frame-mat",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: pictureFrameMatCopyEn, uk: pictureFrameMatCopyUk, de: pictureFrameMatCopyDe, es: pictureFrameMatCopyEs },
  referenceCases: pictureFrameMatReferenceCases,
  publishedExample: { inputs: { photoWidth: 20, photoHeight: 30, border: 5, bottomExtra: 1 }, expected: ["30×41 см"] },
  presentation: {
    id: "picture-frame-mat",
    name: "Калькулятор паспарту и рамы",
    slug: "polya-passepartu",
    fullPath: "/household/polya-passepartu/",
    category: "household",
    icon: "rectangle-horizontal",
    popularity: 29,
    isNew: false,
    seoTitle: "Калькулятор паспарту и рамы — размер под фотографию",
    h1: "Калькулятор паспарту и рамы",
    keywords: ["паспарту", "размер рамы", "багет", "оформление фотографии"],
    fields: [
  {
    "name": "photoWidth",
    "label": "Ширина видимого окна",
    "type": "number",
    "defaultValue": 20,
    "min": 0,
    "step": 1,
    "unit": "см"
  },
  {
    "name": "photoHeight",
    "label": "Высота видимого окна",
    "type": "number",
    "defaultValue": 30,
    "min": 0,
    "step": 1,
    "unit": "см"
  },
  {
    "name": "border",
    "label": "Поле сверху и по бокам",
    "type": "number",
    "defaultValue": 5,
    "min": 0,
    "step": 0.5,
    "unit": "см"
  },
  {
    "name": "bottomExtra",
    "label": "Утяжеление нижнего поля",
    "type": "number",
    "defaultValue": 1,
    "min": 0,
    "step": 0.5,
    "unit": "см"
  }
],
    resultLabels: {
  "outer": "Внешний размер паспарту",
  "bottom": "Нижнее поле",
  "border": "Верх и бока",
  "matArea": "Площадь паспарту",
  "aspect": "Соотношение сторон паспарту"
},
    relatedCalculatorIds: ["curtain-size", "geom-rectangle", "ppi-dpi"],
    ...contract.ru,
  },
};
