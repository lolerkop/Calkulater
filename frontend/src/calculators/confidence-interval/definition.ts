import { mathWave8ContractContent } from './contractContent';
import { validate } from './validate';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { confidenceIntervalCopyEn } from './copy.en';
import { confidenceIntervalCopyUk } from './copy.uk';
import { confidenceIntervalCopyDe } from './copy.de';
import { confidenceIntervalCopyEs } from './copy.es';
import { confidenceIntervalReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "confidence-interval",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: confidenceIntervalCopyEn, uk: confidenceIntervalCopyUk, de: confidenceIntervalCopyDe, es: confidenceIntervalCopyEs },
  referenceCases: confidenceIntervalReferenceCases,
  publishedExample: { inputs: { mean: 100, sd: 15, n: 36, confidence: '95' }, expected: ["95,1 … 104,9"] },
  presentation: {
    id: "confidence-interval",
    name: "Калькулятор доверительного интервала",
    slug: "confidence-interval",
    fullPath: "/math/confidence-interval/",
    category: "math",
    icon: "divide",
    popularity: 36,
    isNew: false,
    shortDescription: "Доверительный интервал для среднего по объёму выборки, отклонению и уровню доверия.",
    seoTitle: "Калькулятор доверительного интервала для среднего",
    seoDescription: "Рассчитайте доверительный интервал для среднего по выборочному среднему, стандартному отклонению, объёму выборки и уровню доверия.",
    h1: "Калькулятор доверительного интервала",
    keywords: ["доверительный интервал", "стандартная ошибка среднего", "уровень доверия", "интервальная оценка"],
    fields: [
      { name: 'mean', label: 'Выборочное среднее', type: 'number', unit: 'ед. данных', defaultValue: 100, step: 0.1, signed: true },
      { name: 'sd', label: 'Стандартное отклонение', type: 'number', unit: 'ед. данных', defaultValue: 15, min: 0, step: 0.1 },
      { name: 'n', label: 'Объём выборки', type: 'number', defaultValue: 36, min: 2, step: 1 },
      {
        name: 'confidence', label: 'Уровень доверия', type: 'select', defaultValue: '95',
        options: [
          { value: '90', label: '90 % — z = 1,645' },
          { value: '95', label: '95 % — z = 1,96' },
          { value: '99', label: '99 % — z = 2,576' },
        ],
      },
    ],
    resultLabels: {
      "interval": "Доверительный интервал",
      "margin": "Предел погрешности",
      "se": "Стандартная ошибка",
      "z": "Критическое значение z",
      "low": "Нижняя граница",
      "high": "Верхняя граница",
    },
    relatedCalculatorIds: ["stats-descriptive", "z-score", "weighted-mean"],
    ...mathWave8ContractContent.ru,
  },
};
