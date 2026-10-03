import { mathWave8ContractContent } from './contractContent';
import { validate } from './validate';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { sampleSizeCopyEn } from './copy.en';
import { sampleSizeCopyUk } from './copy.uk';
import { sampleSizeCopyDe } from './copy.de';
import { sampleSizeCopyEs } from './copy.es';
import { sampleSizeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "sample-size",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: sampleSizeCopyEn, uk: sampleSizeCopyUk, de: sampleSizeCopyDe, es: sampleSizeCopyEs },
  referenceCases: sampleSizeReferenceCases,
  publishedExample: { inputs: { confidence: "95", margin: 5, proportion: 50, population: 0 }, expected: ["385 чел"] },
  presentation: {
    id: "sample-size",
    name: "Калькулятор размера выборки",
    slug: "razmer-vyborki",
    fullPath: "/math/razmer-vyborki/",
    category: "math",
    icon: "sigma",
    popularity: 36,
    isNew: false,
    shortDescription: "Сколько респондентов нужно опросить при заданной точности.",
    seoTitle: "Калькулятор размера выборки — сколько респондентов опросить",
    seoDescription: "Рассчитайте необходимый размер выборки по доверительной вероятности, предельной ошибке и ожидаемой доле, с поправкой на объём совокупности.",
    h1: "Калькулятор размера выборки",
    keywords: ["размер выборки", "репрезентативная выборка", "предельная ошибка", "доверительная вероятность"],
    fields: [
      {
        name: 'confidence', label: 'Доверительная вероятность', type: 'select', defaultValue: '95',
        options: [{ value: '90', label: '90 %' }, { value: '95', label: '95 %' }, { value: '99', label: '99 %' }],
      },
      { name: 'margin', label: 'Предельная ошибка, %', type: 'number', defaultValue: 5, min: 0, step: 0.5 },
      { name: 'proportion', label: 'Ожидаемая доля, %', type: 'number', defaultValue: 50, min: 0, max: 100, step: 5 },
      { name: 'population', label: 'Объём совокупности (0 — бесконечная)', type: 'number', defaultValue: 0, min: 0, step: 1000 },
    ],
    resultLabels: {
      "n": "Размер выборки",
      "n0": "Без поправки на совокупность",
      "z": "Критическое значение z",
      "margin": "Предельная ошибка",
      "share": "Доля от совокупности",
    },
    relatedCalculatorIds: ["confidence-interval", "stats-descriptive", "z-score"],
    ...mathWave8ContractContent.ru,
  },
};
