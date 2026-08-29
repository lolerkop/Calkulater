// ROI рекламы. Две шкалы одной величины: процент и отношение.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { adRoiCopyEn } from './copy.en';
import { adRoiCopyUk } from './copy.uk';
import { adRoiCopyDe } from './copy.de';
import { adRoiReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'ad-roi',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: adRoiCopyEn, uk: adRoiCopyUk, de: adRoiCopyDe },
  referenceCases: adRoiReferenceCases,
  publishedExample: { inputs: { revenue: 300000, spend: 100000 }, expected: ['200,00 %', '3,00 : 1'] },
  presentation: {
    id: 'ad-roi',
    name: 'Калькулятор ROI рекламы',
    slug: 'ad-roi',
    fullPath: '/business/ad-roi/',
    category: 'business',
    icon: 'trending-up',
    popularity: 40,
    isNew: false,
    shortDescription: 'Окупаемость кампании как ROI и ROAS рядом.',
    longDescription:
      'Показывает обе меры окупаемости кампании сразу. Они отвечают на один вопрос в разных шкалах, и путать их дорого: при выручке вдвое больше расходов ROAS равен 2, а ROI — 100 процентов.',
    seoTitle: 'Калькулятор ROI рекламы — ROI и ROAS из расходов и выручки',
    seoDescription:
      'Расчёт окупаемости рекламы: ROI в процентах и ROAS как отношение, по расходам и выручке кампании.',
    h1: 'Калькулятор ROI рекламы',
    keywords: ['ROI рекламы', 'калькулятор ROAS', 'окупаемость кампании'],
    fields: [
      { name: 'revenue', label: 'Выручка от кампании', type: 'number', defaultValue: 300000, min: 0 },
      { name: 'spend', label: 'Расходы на кампанию', type: 'number', defaultValue: 100000, min: 0 },
    ],
    resultLabels: { roi: 'ROI рекламы', roas: 'ROAS' },
    howToUse: ['Введите выручку, которую принесла кампания.', 'Введите расходы на кампанию.', 'Сравните обе меры окупаемости.'],
    howItWorks: 'ROI = (выручка − расходы) ÷ расходы × 100. ROAS = выручка ÷ расходы.',
    example: 'Выручка 300 000 при расходах 100 000 даёт ROI 200 % и ROAS 3.',
    faq: [
      { q: 'Какой показатель использовать?', a: 'ROAS удобнее сравнивать между каналами; ROI отвечает, заработала ли кампания. Оба считаются из одних и тех же двух чисел.' },
      { q: 'Где точка окупаемости?', a: 'При ROAS, равном единице, то есть ROI ноль процентов: выручка ровно покрывает расходы.' },
      { q: 'Вычитать ли себестоимость из выручки?', a: 'Если нужна настоящая окупаемость — да. Валовая выручка измеряет оборот, а не прибыль.' },
      { q: 'Почему ROI бывает −100 %?', a: 'Кампания не принесла выручки вовсе, и все расходы потеряны.' },
    ],
    relatedCalculatorIds: ['cac', 'aov', 'contribution-margin'],
    disclaimer: FIN_DISCLAIMER,
  },
};
