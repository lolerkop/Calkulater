import { mathWave8ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { correlationCopyEn } from './copy.en';
import { correlationCopyUk } from './copy.uk';
import { correlationCopyDe } from './copy.de';
import { correlationCopyEs } from './copy.es';
import { correlationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "correlation",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: correlationCopyEn, uk: correlationCopyUk, de: correlationCopyDe, es: correlationCopyEs },
  referenceCases: correlationReferenceCases,
  publishedExample: { inputs: { xs: '1 2 3 4 5', ys: '2 4 5 4 5' }, expected: ["0,7746"] },
  presentation: {
    id: "correlation",
    name: "Калькулятор корреляции",
    slug: "correlation",
    fullPath: "/math/correlation/",
    category: "math",
    icon: "trending-up",
    popularity: 37,
    isNew: false,
    shortDescription: "Коэффициент корреляции Пирсона для двух рядов и уравнение линии регрессии.",
    seoTitle: "Калькулятор корреляции Пирсона для двух рядов",
    seoDescription: "Рассчитайте коэффициент корреляции Пирсона, коэффициент детерминации, ковариацию и уравнение линии регрессии по двум рядам значений.",
    h1: "Калькулятор корреляции",
    keywords: ["коэффициент корреляции", "корреляция Пирсона", "линия регрессии", "коэффициент детерминации"],
    fields: [
      { name: 'xs', unit: 'ед. данных', label: 'Ряд X: значения через пробел или с новой строки', type: 'textarea', defaultValue: '1 2 3 4 5' },
      { name: 'ys', unit: 'ед. данных', label: 'Ряд Y: столько же значений', type: 'textarea', defaultValue: '2 4 5 4 5' },
    ],
    resultLabels: {
      "r": "Коэффициент корреляции",
      "r2": "Коэффициент детерминации",
      "cov": "Ковариация выборки",
      "slope": "Наклон линии",
      "intercept": "Свободный член",
      "pairs": "Пар значений",
      "meanX": "Среднее X",
      "meanY": "Среднее Y",
    },
    relatedCalculatorIds: ["stats-descriptive", "weighted-mean", "z-score"],
    ...mathWave8ContractContent.ru,
  },
};
