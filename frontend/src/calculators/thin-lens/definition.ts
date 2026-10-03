import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { thinLensCopyEn } from './copy.en';
import { thinLensCopyUk } from './copy.uk';
import { thinLensCopyDe } from './copy.de';
import { thinLensCopyEs } from './copy.es';
import { thinLensReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "thin-lens",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: thinLensCopyEn, uk: thinLensCopyUk, de: thinLensCopyDe, es: thinLensCopyEs },
  referenceCases: thinLensReferenceCases,
  publishedExample: { inputs: { mode: "image", f: 10, do: 30 }, expected: ["15 см"] },
  presentation: {
    id: "thin-lens",
    name: "Калькулятор тонкой линзы",
    slug: "tonkaya-linza",
    fullPath: "/physics/tonkaya-linza/",
    category: "physics",
    icon: "atom",
    popularity: 29,
    isNew: false,
    shortDescription: "Расстояние до изображения, увеличение и тип изображения по формуле тонкой линзы.",
    seoTitle: "Калькулятор тонкой линзы — расстояние до изображения и увеличение",
    seoDescription: "Рассчитайте расстояние до изображения, увеличение и тип изображения по формуле тонкой линзы, либо найдите фокусное расстояние по двум расстояниям.",
    h1: "Калькулятор тонкой линзы",
    keywords: ["тонкая линза", "формула линзы", "увеличение линзы", "оптическая сила"],
    fields: [
      {
        name: 'mode', label: 'Что ищем', type: 'select', defaultValue: 'image',
        options: [
          { value: 'image', label: 'расстояние до изображения' },
          { value: 'focal', label: 'фокусное расстояние' },
        ],
      },
      {
        name: 'f', label: "Фокусное расстояние", type: 'number', defaultValue: 10,
        signed: true, step: 1, showIf: { field: 'mode', equals: 'image' },
        unit: "см" },
      { name: 'do', label: "Расстояние до предмета", type: 'number', defaultValue: 30, min: 0, step: 1 , unit: "см" },
      {
        name: 'di', label: "Расстояние до изображения", type: 'number', defaultValue: 15,
        signed: true, step: 1, showIf: { field: 'mode', equals: 'focal' },
        unit: "см" },
    ],
    resultLabels: {
      "image": "Расстояние до изображения", "focal": "Фокусное расстояние",
      "magnification": "Увеличение", "kind": "Тип изображения",
      "power": "Оптическая сила", "object": "Расстояние до предмета",
    },
    relatedCalculatorIds: ["wave", "inverse-square", "photon-energy"],
      ...contract.ru,
  },
};
