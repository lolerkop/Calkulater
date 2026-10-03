// ROI рекламы. Две шкалы одной величины: процент и отношение.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { adRoiCopyEn } from './copy.en';
import { adRoiCopyUk } from './copy.uk';
import { adRoiCopyDe } from './copy.de';
import { adRoiCopyEs } from './copy.es';
import { adRoiReferenceCases } from './referenceCases';

import { contractContent } from './contractContent';

export const definition: CalculatorDefinitionV2 = {
  id: 'ad-roi',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: adRoiCopyEn, uk: adRoiCopyUk, de: adRoiCopyDe, es: adRoiCopyEs },
  referenceCases: adRoiReferenceCases,
  publishedExample: { inputs: { revenue: 200000, spend: 50000 }, expected: ['300,00 %', '4,00 : 1', '150 000 ₽'] },
  presentation: {
    id: 'ad-roi',
    name: 'Калькулятор ROI рекламы',
    slug: 'ad-roi',
    fullPath: '/business/ad-roi/',
    category: 'business',
    icon: 'trending-up',
    popularity: 40,
    isNew: false,
    shortDescription: "ROAS и упрощённый ROI по выручке и рекламным расходам.",
    seoTitle: 'Калькулятор ROI рекламы — ROI и ROAS из расходов и выручки',
    seoDescription:
      "Рассчитайте ROAS и упрощённый ROI по выручке кампании и расходам только на рекламу. Себестоимость, комиссии и другие затраты вводом не предусмотрены.",
    h1: 'Калькулятор ROI рекламы',
    keywords: ['ROI рекламы', 'калькулятор ROAS', 'окупаемость кампании'],
    fields: [
      { name: 'revenue', label: 'Выручка от кампании', type: 'number', defaultValue: 300000, min: 0 },
      { name: 'spend', label: 'Расходы на кампанию', type: 'number', defaultValue: 100000, min: 0 },
    ],
    resultLabels: { roi: 'ROI рекламы', roas: 'ROAS' },
    relatedCalculatorIds: ['cac', 'aov', 'contribution-margin'],
    ...contractContent.ru,
  },
};
